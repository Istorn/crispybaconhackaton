 let BPM=0;
 let moving=0;
 let angle=0;
 let camera=null;
 let scene=null;
 let ring=null;
 let RADIUS=48;

 let MINSTEP=0.001;
 let DELTAHEAD=0.05
 let HALF_WIDTH=2;
 let stepsize=1;
 let lastT=null;
 let curT=0;
 let lambdaBPM=0.8;
 let inertiaBPM=0.995;

 function getSeconds(){
	let d = new Date();
	return d.getMilliseconds()/1000.;
}

 export  function updateBPM(newBPM){
	BPM = lambdaBPM*BPM + (1-lambdaBPM)*newBPM;
	BPM= Math.max(0, BPM);
	return BPM;
}

 function inertia(){
//	console.log("inertia", inertiaBPM*BPM);
	updateBPM(inertiaBPM*BPM);
};



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





function update(){
  if(lastT===null){
    lastT=getSeconds();
    window.requestAnimationFrame(update);
    return; 
  }
  curT=getSeconds();
  let deltaT=curT-lastT; //seconds
  //console.log(1/deltaT);
 let deltaStep= stepsize*BPM*deltaT/60.; // m
  //console.log(deltaStep);
  if (deltaStep<MINSTEP){deltaStep=0;}
  step(deltaStep);
  
  inertia();
  lastT=curT;
  window.requestAnimationFrame(update);
}

export  function load(){
  console.log(window.AFRAME.scenes);
  scene=window.AFRAME.scenes[0];   
  console.log(window.AFRAME.scenes[0]); 
  console.log("loading...");
  console.log(scene);
  if(scene.hasLoaded){sceneLoaded();}
  else{scene.addEventListener('loaded', sceneLoaded);}
  return "loaded";
};

function sceneLoaded(){
  console.log("loaded?");    
  camera=window.AFRAME.scenes[0].camera;
  camera.position.x=RADIUS;
  camera.position.y=1.7; // 170 cm
  ring= document.querySelector("#track");
  ring.setAttribute("radius-inner",RADIUS-HALF_WIDTH);
  ring.setAttribute("radius-outer",RADIUS+HALF_WIDTH);
  createTrees();
  window.requestAnimationFrame(update);
}
document.addEventListener('keydown', function(event){
        if(event.keyCode == 32) {
          step();} }
          );