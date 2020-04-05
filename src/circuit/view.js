//var delta_angle= stepsize/RADIUS;

import * as main from './main';


 function createTrees(){
  let tree=document.querySelector(".tree");
  let forest=document.querySelector("#forest");
  let num_trees=100;
  let deltaRot=Math.round(360/(num_trees-1));
  let rotation= tree.object3D.rotation.y;
  let dist=7;
  let sign=1;
  for(let i=0; i<num_trees-1; i++){
    let newTree = tree.cloneNode(true);
    let position=RADIUS+sign*dist;
    rotation=rotation+deltaRot;

    newTree.setAttribute("rotation","0 "+ rotation+" 0");
    newTree.children[0].setAttribute("position", position +" 0 0");
    forest.appendChild(newTree);    
    sign=sign*-1;
  }
  tree.children[0].children[1].setAttribute("color","black");
 }


 function step(deltaStep){            
  if(camera===null){ 
    console.log("Problem");
  }
  if(deltaStep==0){return;}

  angle = angle + deltaStep/RADIUS;
  camera.position.x=RADIUS*Math.cos(-angle);
  camera.position.z=RADIUS*Math.sin(-angle);

  //camera.position.y=camera.position.y+DELTAHEAD*Math.cos(2*Math.PI*curT*BPM/60.);

  camera.rotation.y=angle;

  
}   