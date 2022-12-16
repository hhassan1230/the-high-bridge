
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

  // tick: function () {
  //   // `this.el` is the element.
  //   // `object3D` is the three.js object.

  //   // `rotation` is a three.js Euler using radians. `quaternion` also available.
  //   // console.log(this.el.object3D.rotation);

  //   // `position` is a three.js Vector3.
  //   console.log(this.el.object3D.position);
  // },

  onClick: function (interaction) {
    // console.log(interaction)
    if(interaction.type.toLowerCase() === 'nav'){
      console.log("change background to: ", interaction);
      const { rooms } = house;
      this.reset();
      this.data.room = interaction.whereTo;
      this.setEnvironment();
    } else if(interaction.type.toLowerCase() === 'print' || interaction.type.toLowerCase() === 'picture'){
      var cameraEl = this.el.sceneEl.camera.el;
      var rotation = cameraEl.getAttribute('rotation');
      var position = cameraEl.getAttribute('position');
      // console.log(position, rotation)
      // var worldPos = new THREE.Vector3();
      // console.log(worldPos)
      // worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
      // console.log("Time: " + this.data.seconds 
      // + "; Camera Position: (" + worldPos.x.toFixed(2) + ", " + worldPos.y.toFixed(2) + ", " + worldPos.z.toFixed(2) 
      // + "); Camera Rotation: (" + rotation.x.toFixed(2) + ", " + rotation.y.toFixed(2) + ", " + rotation.z.toFixed(2) + ")");        
      if(document.getElementById("modal")){
        document.getElementById("modal").remove();
        return;
      } 
      const { source, text } = interaction.display;
      // console.log("open interaction");
      const modal = document.createElement("a-entity");
      modal.setAttribute('id', 'modal');
      modal.setAttribute('position', {x: 0, y: 1.6, z: -2.5});
      // newSphere.setAttribute('position', cameraEl.object3D.position.x+offSet*i + ' 0 -2.5');

      // modal.setAttribute('rotation', rotation);

      modal.innerHTML = `
          <a-image position="0 0.4 0" src="${source}" width="3" height="3"></a-image>
          <a-entity mixin="text" text="value: ${text}; color: black; width: 2.3;"></a-entity>
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
      imgBackground.setAttribute('shader', "flat");
      imgBackground.setAttribute('rotation', "0 0 0");
      let parent = document.getElementById("parent");
      parent.appendChild(imgBackground);
    } 
    if(background.type.toLowerCase() === 'video'){
      const videoBackground = document.getElementById("videoBackground");
      
      videoBackground.setAttribute('src', background.source);
      

      const videosphere = document.createElement("a-videosphere");
      videosphere.setAttribute('rotation', background.rotation.join(" "));
      videosphere.setAttribute('src', "#videoBackground");
      
      let parent = document.getElementById("parent");
      parent.appendChild(videosphere);
      videoBackground.play();

    }
  },

  filterAssets: function(currentFilter){
    document.querySelectorAll('.room-attribute').forEach(e => e.remove());
    // TODO: Adds setInteraction with filtered interaction array

  },

  setInteractions: function(interactions){
    // console.log(interactions);
    interactions.forEach(interaction => {
      // if(interaction.type.toLowerCase() === "nav"){
        const entity = document.createElement("a-entity");
        entity.setAttribute('position', interaction.location.join(" "));
        // if(interaction.id === 1789){
          // console.log("seeting rotation")
          entity.setAttribute('rotation', interaction.rotation.join(" "));
        // }
        entity.innerHTML = `
        <a-entity class="room-attribute">
          <a-entity class="raycastable nav-button" mixin="interactions">
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