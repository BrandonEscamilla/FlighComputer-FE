/**
 * entry.js
 * 
 * This is the first file loaded. It sets up the Renderer, 
 * Scene and Camera. It also starts the render loop and 
 * handles window resizes.
 * 
 */

import { WebGLRenderer, PerspectiveCamera, Scene, Vector3 } from 'three';
import RocketScene from './objects/Scene.js';

const scene = new Scene();
const camera = new PerspectiveCamera();
const renderer = new WebGLRenderer({antialias: true});
const RocketScene_ = new RocketScene();

// scene
scene.add(RocketScene_);

// camera
camera.position.set(10,10,-20);
camera.lookAt(new Vector3(0,0,0));

// renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 1);

// render loop
const onAnimationFrameHandler = (timeStamp) => {
  renderer.render(scene, camera);
  RocketScene_.update && RocketScene_.update(timeStamp);
  window.requestAnimationFrame(onAnimationFrameHandler);
}
window.requestAnimationFrame(onAnimationFrameHandler);

// resize
const windowResizeHanlder = () => { 
  const { innerHeight, innerWidth } = window;
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
};
windowResizeHanlder();
window.addEventListener('resize', windowResizeHanlder);

// dom
document.body.style.margin = 0;
document.body.appendChild( renderer.domElement );

