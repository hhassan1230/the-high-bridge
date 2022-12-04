/* global AFRAME */
AFRAME.registerComponent('play', {
    init: function () {
    //   this.onClick = this.onStart.bind(this);
        // var videoEl = this.el.getAttribute('material').src;
        // if (!videoEl) { return; }
        // this.el.visible = true;
        console.log("HEREE")
        // this.el.setAttribute('src', "#videoBackground");
        var videoEl = this.el.getAttribute('material').src;
        if (!videoEl) { 
            console.log("dont exist")
            // return; 
        }
        // videoEl.muted = false;
        videoEl.play();
        // console.log("yooo", videoEl.muted)
        // videoEl.addEventListener("playing", this.onStart, true);
    },
  });