
/* global AFRAME */
AFRAME.registerComponent('room', {
  init: function () {
    // var buttonEls = this.buttonEls = this.el.querySelectorAll('.nav-button');
    this.onClick = this.onClick.bind(this);
    this.setEnvironment = this.setEnvironment.bind(this);
    this.setBackground = this.setBackground.bind(this);
    this.setInteractions = this.setInteractions.bind(this);
    this.reset = this.reset.bind(this);
    this.tick = this.tick.bind(this);
    this.setCustomizables = this.setCustomizables.bind(this);

    this.data.room = "Entry";

    this.setEnvironment();
  },

  onClick: function (interaction) {
    // console.log(interaction)
    if(interaction.type.toLowerCase() === 'nav'){
      console.log("change background to: ", interaction);
      this.data.room = interaction.whereTo;
      this.reset();
      this.setEnvironment()
    } else if(interaction.type.toLowerCase() === 'print' || interaction.type.toLowerCase() === 'picture'){
      if(document.getElementById("modal")){
        document.getElementById("modal").remove();
      } 
      const { source, text } = interaction.display;
      console.log("open interaction");
      const modal = document.createElement("a-entity");   
      modal.setAttribute('id', 'modal');
      modal.setAttribute('position', "0 1.6 -2.5");
      modal.innerHTML = `
      <a-entity>
          <a-image position="0 0.4 0" src="${source}" width="3" height="3"></a-image>
          <a-entity mixin="text" text="value: ${text}; color: black; width: 2.3;"></a-entity>
      </a-entity>
      `;
      let parent = document.getElementById("parent");
      parent.appendChild(modal);
    } else if(interaction.type === "addButton"){
      console.log("clickinggg", interaction)
      // const { source, text } = interaction.display;
      console.log("open interaction");
      const modal = document.createElement("a-entity");   
      modal.setAttribute('id', 'modal');
      modal.setAttribute('position', "-15 1.6 15");
      modal.setAttribute('rotation', "100 0 10");
      modal.innerHTML = `
        <a-entity mixin="btnModal" color: black; width: 2.3;"></a-entity>
      `;
      let parent = document.getElementById("parent");
      parent.appendChild(modal);
    }
  },

  setEnvironment: function(){
    const { rooms } = house;
    // const currentRoom = this.data.room;
    // console.log("Setting env for: ", this.data.room);
    this.setBackground(rooms[`${this.data.room}`].background);
    this.setInteractions(rooms[`${this.data.room}`].interactions);
    this.setCustomizables();
  },

  setBackground: function(background){
    if(background.type.toLowerCase() === 'picture'){
      console.log("setting img background")
      const imgBackground = document.createElement("a-sky");
      imgBackground.setAttribute('src', background.source);
      imgBackground.setAttribute('rotation', "0 -130 0");
      let parent = document.getElementById("parent");
      parent.appendChild(imgBackground);
    } 
    if(background.type.toLowerCase() === 'video'){
      const videoBackground = document.createElement("a-videosphere");
      videoBackground.setAttribute('src', background.source);
      videoBackground.setAttribute('rotation', "0 -80 0");
      videoBackground.setAttribute('loop', `${background.loop ? background.loop : 'false'}`);
      let parent = document.getElementById("parent");
      parent.appendChild(videoBackground);
      videoBackground.play();
    }
  },

  setInteractions: function(interactions){
    // console.log(interactions);
    interactions.forEach(interaction => {
      // if(interaction.type.toLowerCase() === "nav"){
        const entity = document.createElement("a-entity");
        entity.setAttribute('position', `${interaction.location.x} ${interaction.location.y} ${interaction.location.z}`);
        entity.setAttribute('class', `interactions`);

        if(interaction.id === 1789){
          // console.log("seeting rotation")
          entity.setAttribute('rotation', `${interaction.rotation.x} ${interaction.rotation.y} ${interaction.rotation.z}`);
        }
        entity.innerHTML = `
          <a-entity class="raycastable" mixin="interactions">
            <a-image src="${interaction.type.toLowerCase() === "nav" ? '#nav' : '#bow'}" width="${interaction.width}" height="${interaction.height}"></a-image>
          </a-entity>
        `;
        let parent = document.getElementById("parent");
        parent.appendChild(entity);
        entity.addEventListener('click', ()=> {
          this.onClick(interaction)
        });
    });
  },

  setCustomizables: function(){
    const { settings : {customizables} } = house;

    // console.log(interactions);
    customizables.forEach(customize => {
      // if(interaction.type.toLowerCase() === "nav"){
        const entity = document.createElement("a-entity");
        entity.setAttribute('position', `${customize.location.x} ${customize.location.y} ${customize.location.z}`);
        // entity.setAttribute('position', `0 1 1`);

        entity.setAttribute('class', `customizes`);

        // if(customize.id === 1789){
          // console.log("seeting rotation")
        entity.setAttribute('rotation', `${customize.rotation.x} ${customize.rotation.y} ${customize.rotation.z}`);
        // }
        entity.innerHTML = `
          <a-entity class="raycastable" mixin="customizables">
            <a-image src="#addIcon" width="${customize.width}" height="${customize.height}"></a-image>
          </a-entity>
        `;
        let parent = document.getElementById("parent");
        parent.appendChild(entity);
        entity.addEventListener('click', ()=> {
          this.onClick(customize)
        });
    });
  },

  reset: function(){
    if(document.querySelector("a-sky")){
      console.log("remove img background");
      document.querySelector("a-sky").remove();
    } 
    if(document.querySelector("a-videosphere")){
      document.querySelector("a-videosphere").remove();
    } 
    if(document.querySelector(".interactions")){
      document.querySelectorAll(".interactions").forEach(el => el.remove());
    } 
    if(document.getElementById("modal")){
      document.getElementById("modal").remove();
    } 
    document.querySelectorAll('.room-attribute').forEach(e => e.remove());
  },
  tick: function () {
    this.el.object3D.position.set(0, 2, 3);

    // // `this.el` is the element.
    // // `object3D` is the three.js object.

    // // `rotation` is a three.js Euler using radians. `quaternion` also available.
    // console.log(this.el.object3D.rotation);

    // // `position` is a three.js Vector3.
    // console.log(this.el.object3D.position);
  }
});