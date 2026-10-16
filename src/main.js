const mainComp = {
  init() {
    // pre-play video as fix for black box bug (Android Only)
    const v = document.querySelector('#vid')
    const playBtn = document.getElementById('playbtn')
    function autoPlayCheck() {
      v.muted = true
      const playPromise = v.play()
      setTimeout(() => {
        if (playPromise !== undefined) {
          playPromise.then((_) => {
            // Automatic playback started!
            // Show playing UI.
            // We can now safely pause video...
            console.log('inside play promise')
            v.pause()
            v.muted = false
          })
            .catch((error) => {
              // Auto-play was prevented
              // Show paused UI.
            })
        }
      }, 550)
    }
    setTimeout(autoPlayCheck(), 1700)

    v.addEventListener('ended', () => {
      setTimeout(autoPlayCheck(), 1700)
      playBtn.setAttribute('visible', 'true')
      playBtn.setAttribute('class', 'clickable')
    })
    // play btn click event
    playBtn.addEventListener('click', () => {
      document.querySelector('#vid').play()
      playBtn.setAttribute('visible', 'false')
      playBtn.removeAttribute('class')
    })

    document.getElementById('linkedInBtn').addEventListener('click', () => {
      window.open('https://www.linkedin.com/in/marcverbenkov/', '_blank')
    })

    document.getElementById('twitterBtn').addEventListener('click', () => {
      window.open('https://twitter.com/MarcVerbenkov', '_blank')
    })

    document.getElementById('callBtn').addEventListener('click', () => {
      window.open('tel: +17785513662', '_blank')
    })

    document.getElementById('mailBtn').addEventListener('click', () => {
      window.open('mailto: marc.verbenkov@future-readyconsulting.com', '_blank')
    })

    document.getElementById('webBtn').addEventListener('click', () => {
      window.open('https://future-readyconsulting.com/', '_blank')
    })

    document.getElementById('podcastBtn').addEventListener('click', () => {
      window.open('https://futuretechandforesight.com/', '_blank')
    })

    const showImage = () => {
      document.getElementById('text1').setAttribute('animation', 'property: position; to: -1.2 0.3 -0.01; easing: easeInOutBack; dur: 4000;')
      document.getElementById('qualificationText').setAttribute('animation', 'property: position; to: -1 0.22 -0.01; easing: easeInOutBack; dur: 4300;')
      // document.getElementById('text1').setAttribute('geometry', 'primitive: plane; width: 2; height: 0.1;')

      document.getElementById('text2').setAttribute('animation', 'property: position; to: -1.1 0.1 -0.01; easing: easeInOutBack; dur: 4500;')
      // document.getElementById('text2').setAttribute('geometry', 'primitive: plane; width: 2; height: 0.1;')

      document.getElementById('text3').setAttribute('animation', 'property: position; to: -1 -0.1 -0.01; easing: easeInOutBack; dur: 5000;')
      // document.getElementById('text3').setAttribute('geometry', 'primitive: plane; width: 2; height: 0.1;')

      document.getElementById('text4').setAttribute('animation', 'property: position; to: -0.9 -0.3 -0.01; easing: easeInOutBack; dur: 5500;')
      // document.getElementById('text4').setAttribute('geometry', 'primitive: plane; width: 2; height: 0.1;')

      document.getElementById('linkedInBtn').setAttribute('animation', 'property: position; to: -0.3 0.5 0; easing: easeOutExpo; dur: 6000;')
      document.getElementById('twitterBtn').setAttribute('animation', 'property: position; to: 0.1 0.5 0; easing: easeOutExpo; dur: 6000;')

      document.getElementById('BtnsRoot').setAttribute('animation', 'property: position; to: -1.3 -0.9 0; easing: easeOutExpo; dur: 6000;')
      document.getElementById('callBtn').setAttribute('animation', 'property: position; to: 0 0.3 0; easing: easeInOutBack; dur: 7000;')
      document.getElementById('mailBtn').setAttribute('animation', 'property: position; to: 0 0.1 0; easing: easeInOutBack; dur: 7500;')
      document.getElementById('webBtn').setAttribute('animation', 'property: position; to: 0 -0.1 0; easing: easeInOutBack; dur: 8000;')
      document.getElementById('podcastBtn').setAttribute('animation', 'property: position; to: 0 -0.3 0; easing: easeInOutBack; dur: 8500;')

      document.getElementById('logo').setAttribute('animation', 'property: position; to: -1.1 0.53 -0.001; easing: easeOutExpo; dur: 8000;')

      const aboutusPlane = document.getElementById('aboutusPlane')
      const aboutusArrow = document.getElementById('aboutUsArrow')
      const servicePlane = document.getElementById('servicesPlane')
      const serviceArrow = document.getElementById('servicesArrow')
      document.getElementById('aboutUsBtn').addEventListener('click', () => {
        aboutusArrow.setAttribute('visible', true)
        aboutusPlane.setAttribute('visible', true)

        if (aboutusPlane.getAttribute('visible')) {
          servicePlane.setAttribute('animation__scale', 'property: scale; from: 1 1 1; to: 0 0 0; easing: easeOutCirc; dur: 5000')
          servicePlane.setAttribute('animation', 'property: position; from: 1 -0.4 0.01;  to: 1 0.3 0; easing: easeOutCirc; dur: 6000')
          serviceArrow.setAttribute('animation', 'property: position; from: 1 0.09 0.01; to: 1 0.3 0; easing: easeOutCirc; dur: 5000;')
          serviceArrow.setAttribute('animation__scale', 'property: scale; from: 1 1 1; to: 0 0 0; easing: easeOutCirc; dur: 6000;')
        }

        aboutusArrow.setAttribute('animation', 'property: position; from: 0 -0.8 0; to: 0.07 -0.8 0.01; easing: easeOutCirc; dur: 5000;')
        aboutusArrow.setAttribute('animation__scale', 'property: scale; from: 0 0 0; to: 1 1 1; easing: easeOutCirc; dur: 6000;')

        setTimeout(() => {
          serviceArrow.setAttribute('visible', false)
          servicePlane.setAttribute('visible', false)
          aboutusPlane.setAttribute('animation', 'property: position; from: 0.2 -0.8 0; to: 0.9 -0.8 0; easing: easeOutCirc; dur: 5000')
          aboutusPlane.setAttribute('animation__scale', 'property: scale; from: 0 0 0; to: 1 1 1; easing: easeOutCirc; dur: 6000')
        }, 1000)
      })  //

      document.getElementById('servicesBtn').addEventListener('click', () => {
        servicePlane.setAttribute('visible', true)
        serviceArrow.setAttribute('visible', true)

        if (aboutusPlane.getAttribute('visible')) {
          aboutusPlane.setAttribute('animation__scale', 'property: scale; from: 1 1 1; to: 0 0 0; easing: easeOutCirc; dur: 5000')
          aboutusPlane.setAttribute('animation', 'property: position; from: 0.9 -0.8 0;  to: 0 -0.8 0; easing: easeOutCirc; dur: 6000')
          aboutusArrow.setAttribute('animation', 'property: position; from: 0.07 -0.8 0.01; to: 0 -0.8 0; easing: easeOutCirc; dur: 5000;')
          aboutusArrow.setAttribute('animation__scale', 'property: scale; from: 1 1 1; to: 0 0 0; easing: easeOutCirc; dur: 6000;')
        }
        serviceArrow.setAttribute('animation', 'property: position; from: 1 0.3 0; to: 1 0.09 0.01; easing: easeOutCirc; dur: 5000;')
        serviceArrow.setAttribute('animation__scale', 'property: scale; from: 0 0 0; to: 1 1 1; easing: easeOutCirc; dur: 6000;')
        setTimeout(() => {
          aboutusArrow.setAttribute('visible', false)
          aboutusPlane.setAttribute('visible', false)
          servicePlane.setAttribute('animation', 'property: position; from: 1 0.1 0; to: 1 -0.5 0.01; easing: easeOutCirc; dur: 5000')
          servicePlane.setAttribute('animation__scale', 'property: scale; from: 0 0 0; to: 1 1 1; easing: easeOutCirc; dur: 6000')
        }, 1000)
      })
    }
    this.el.sceneEl.addEventListener('xrimagefound', showImage)
  },
}

const ImageTargetSlamComponent = {
  schema: {
    name: {type: 'string'},
  },
  init() {
    const eventThrown = false
    const {object3D} = this.el
    const {name} = this.data
    object3D.visible = false
    const sceneElement = this.el.sceneEl
    const element = this.el
    const originalPosition = object3D.position.clone()
    const showImage = ({detail}) => {
      // if (name !== detail.name) {
      //   return
      // }
      object3D.position.copy(detail.position)
      object3D.position.x += 0.08
      // object3D.position.z -= 0.1
      object3D.quaternion.copy(detail.rotation)
      // object3D.rotation.y -= 0.87
      // object3D.rotation.z -= 0
      object3D.scale.set(detail.scale, detail.scale, detail.scale)
      object3D.visible = true
      this.el.sceneEl.emit('image-target-slam-found')
    }
    this.el.sceneEl.addEventListener('xrimagefound', showImage)
    this.el.sceneEl.addEventListener('xrimageupdated', showImage)
  },
}
export {mainComp, ImageTargetSlamComponent}
