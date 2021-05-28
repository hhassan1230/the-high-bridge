
/* global AFRAME */
AFRAME.registerComponent('room', {
  init: function () {
    var buttonEls = this.buttonEls = this.el.querySelectorAll('.nav-button');
    this.onClick = this.onClick.bind(this);
    this.setEnvironment = this.setEnvironment.bind(this);
    this.setBackground = this.setBackground.bind(this);
    this.setInteractions = this.setInteractions.bind(this);
    this.reset = this.reset.bind(this);

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
    }
  },

  setEnvironment: function(){
    const { rooms } = house;
    // const currentRoom = this.data.room;
    // console.log("Setting env for: ", this.data.room);
    this.setBackground(rooms[`${this.data.room}`].background);
    this.setInteractions(rooms[`${this.data.room}`].interactions);
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
        if(interaction.id === 1789){
          // console.log("seeting rotation")
          entity.setAttribute('rotation', `${interaction.rotation.x} ${interaction.rotation.y} ${interaction.rotation.z}`);
        }
        entity.innerHTML = `
        <a-entity class="room-attribute">
          <a-entity class="raycastable nav-button" mixin="navs">
            <a-image src="${interaction.type.toLowerCase() === "nav" ? '#nav' : '#bow'}" width="${interaction.width}" height="${interaction.height}"></a-image>
          </a-entity>
        </a-entity>
        `;
        let parent = document.getElementById("parent");
        parent.appendChild(entity);
        entity.addEventListener('click', ()=> {
          this.onClick(interaction)
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
    if(document.getElementById("modal")){
      document.getElementById("modal").remove();
    } 
    document.querySelectorAll('.room-attribute').forEach(e => e.remove());
  },
});