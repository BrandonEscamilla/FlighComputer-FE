import { Group, Quaternion } from 'three';
import Rocket_ from './Rocket/Rocket.js'
import BasicLights from './Lights.js';

export default class RocketScene extends Group {
  constructor() {
    super();

    const Rocket = new Rocket_()
    const lights = new BasicLights();

    this.add(Rocket, lights);
  }

  update(timeStamp) {
  //Variables  
    var w = 0
    var x = 0
    var y = 0
    var z = 0
    var quaternion = 0
    var url1 = 'http://127.0.0.1:3000/xdk/virtualsensors/brandonxdk'

    fetch(url1).then(res => res.json())
      .then((json) => {
        console.log(json)
        w = json.response.sensors[0].quatW
        x = json.response.sensors[0].quatX
        y = json.response.sensors[0].quatY
        z = json.response.sensors[0].quatZ
        quaternion = new Quaternion().set(-x,z,y,w).normalize()
     //Two ways to rotate objects avoiding gimbal lock..
        //var rotObjectMatrix = new Matrix4();
        //rotObjectMatrix.makeRotationFromQuaternion(quaternion);
        this.rotation.setFromQuaternion(quaternion);
    })
  }
}