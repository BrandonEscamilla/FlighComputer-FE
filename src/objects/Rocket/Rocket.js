import { Group, ObjectLoader  } from 'three';
import MODEL from './rocket.json';

export default class Rocket extends Group {
  constructor() {
    const loader = new ObjectLoader();
    
    super();

    this.name = 'rocket';

    loader.load(MODEL, (mesh)=>{
      this.add(mesh);
    });
  }
}
