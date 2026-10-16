// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('../image-targets/Front.json'),
      require('../image-targets/Back.json'),
    ],
  })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)

import {mainComp, ImageTargetSlamComponent} from './main'
AFRAME.registerComponent('main-comp', mainComp)
AFRAME.registerComponent('img-slam', ImageTargetSlamComponent)
