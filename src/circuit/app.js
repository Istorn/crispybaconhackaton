 let BPM=2000;
 
 let angle=0;
 let camera=null;
 let scene=null;
 let RADIUS=48;

 let MINSTEP=0.001;
 let HALF_WIDTH=2;
 let stepsize=1;
 let lastT=null;
 let curT=0;
 let lambdaBPM=0.8;
 let inertiaBPM=0.995;
 let always_steady=true;
 let path=0;
 let PATH_1_TH=28;
 let PATH_2_TH=32;
 let PATH_3_TH=50;
 let PATH_4_TH=60;
 let PATH_5_TH=67;
 let PATH_6_TH=81;
 let PATH_7_TH=93;
 let PATH_8_TH=118;
 let PATH_9_TH=169;
 let PATH_10_TH=178;
 let PATH_11_TH=190;
 function getSeconds(){
	let d = new Date();
	return d.getMilliseconds()/1000.;
}

 export  function updateBPM(newBPM){
  if(always_steady){return;}
	BPM = lambdaBPM*BPM + (1-lambdaBPM)*newBPM;
	BPM= Math.max(0, BPM);
  
	return BPM;
}

 function inertia(){
//	console.log("inertia", inertiaBPM*BPM);
	updateBPM(inertiaBPM*BPM);
};


 function step(deltaStep){            
  if(camera===null){ 
    console.log("Problem");
  }
  let angle=0;
  path += deltaStep;
  if(deltaStep==0){return;}
  if(path < PATH_1_TH){    
    console.log(path);
  }
  else if(path < PATH_2_TH){
    angle = 0.25*Math.PI*(path-PATH_1_TH)/(PATH_2_TH-PATH_1_TH);
    console.log("Angle is " + (angle*180/Math.PI));
    
  }
  else if(path < PATH_3_TH){
    angle = 0.25*Math.PI;
  }
  else if(path < PATH_4_TH){
    angle = Math.PI*(0.25-0.5*(path-PATH_3_TH)/(PATH_4_TH-PATH_3_TH));    
  }

  else if(path < PATH_5_TH){    
    angle = -0.25*Math.PI;
  }
  else if(path < PATH_6_TH){    
   // BPM=200;
    angle = Math.PI*(-0.25+0.25*(path-PATH_5_TH)/(PATH_6_TH-PATH_5_TH)); 
  }
  else if(path < PATH_7_TH){    
    
    angle = 0;//Math.PI*(-0.25+0.25*(path-PATH_5_TH)/(PATH_6_TH-PATH_5_TH)); 
  }
  else if(path < PATH_8_TH){    
    
   // BPM=200;
    angle = Math.PI*0.5*(path-PATH_7_TH)/(PATH_8_TH-PATH_7_TH); 
  }
  else if(path < PATH_9_TH){    
    angle = Math.PI*0.50;//-0.25*Math.PI;
  }
  else if(path < PATH_10_TH){    
    BPM=200;
    angle = Math.PI*(0.5+0.5*(path-PATH_9_TH)/(PATH_10_TH-PATH_9_TH)); 
     
   // BPM=200;
    //angle = Math.PI*0.5*(path-PATH_7_TH)/(PATH_8_TH-PATH_7_TH); 
  }    
  else{
    angle = Math.PI;//-0.25*Math.PI;
    BPM=0;
  }
  console.log("Angle is " + (angle*180/Math.PI));
  camera.position.z =camera.position.z-deltaStep*Math.cos(angle);
  camera.position.x =camera.position.x+deltaStep*Math.sin(angle);
  camera.rotation.y = -angle;//*180/Math.PI; 
  /*
  angle = angle + deltaStep/RADIUS;
  camera.position.x=RADIUS*Math.cos(-angle);
  camera.position.z=RADIUS*Math.sin(-angle);

  //camera.position.y=camera.position.y+DELTAHEAD*Math.cos(2*Math.PI*curT*BPM/60.);

  camera.rotation.y=angle;  */
}   


function update(){
  console.log(camera.position);
  if(lastT===null){
    lastT=getSeconds();
    window.requestAnimationFrame(update);
    return; 
  }
  curT=getSeconds();
  let deltaT=curT-lastT; //seconds
  //console.log(1/deltaT);
  let deltaStep= stepsize*BPM*deltaT/60.; // m
  console.log(deltaStep);
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
  if (!scene){
    setTimeout(()=>{
        load();
    },5000);
    return "not loaded";
  }
  if(scene.hasLoaded){sceneLoaded();}
  else{scene.addEventListener('loaded', sceneLoaded);}
  return "loaded";
};

function sceneLoaded(){
  console.log("loaded?");    
  camera=window.AFRAME.scenes[0].camera;
  camera.position.y=1.7; // 170 cm
  
  window.requestAnimationFrame(update);
}