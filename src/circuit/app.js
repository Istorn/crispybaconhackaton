 let BPM=0;
 
 let camera=null;
 let scene=null;
 
 let MINSTEP=0.001;
 let realStepsize=0.5;
 let virtualStepsize=1;
 let lastT=null;
 let curT=0;
 let lambdaBPM=0.8;
 let lambdaAngle=0.99;
 let inertiaBPM=0.995;
 let always_steady=true;
 let distance=0;
 let b=0;
 let lastKMH=0;



 let breakpoints=[
  {x: 0.672, z:-6.465},      //0
  {x: 0.672, z: -20.689  },  // 1
  {x: 2.760, z:  -33.775 },   // 2
  {x: 9.436, z:  -38.917 },   // 3
  {x: 15.264, z:  -46.298 },   //4 
  {x: 12.420, z:  -55.250 },   // 5
  {x: 4.680, z:  -62.470 },   //6
  {x: 4.157, z: -71.891  },   // 7
  {x: 5.571, z:  -81.612 },   //8 
  {x: 6.339, z:  -94.349 },   //9 
  {x: 11.420, z:  -99.025 },   //9   
  {x: 20.478, z: -99.025},    //10
  {x: 31.794, z:  -98.203 },
  {x: 37.876, z:  -95.422 },
  {x: 40.857, z:  -92.427 },
  {x: 42.740, z: -91.755 },
  {x: 45.959, z:  -93.878 },
  {x: 50.057, z: -96.068  },
  {x: 55.481, z:  -96.678 },
  {x: 73.273, z: -95.699 },
  {x: 78.395, z: -95.425  },
  {x: 78.415, z:  -89.560 },
  {x:78.415, z:  -65.837 },
 {x: 77.894, z:  -61.946 },
  {x:76.054, z: -58.602  },
  {x: 72.000, z: -54.408  },
  {x: 67.539, z: -51.325  },
  {x: 63.981, z: -48.009  },
  {x: 62.417, z:  -44.099 },
  {x:62.417, z: -41.182 },
  {x: 64.666, z: -36.413  },
  {x: 69.304, z: -32.053  },
  {x: 72.983, z:  -27.631 },
  {x: 73.405, z:  -21.270 },
 {x: 70.407, z: 3.364 },
  {x: 70.164, z: 7.292  },
  {x: 67.767, z:  7.127 },
  {x: 60.902, z: 6.743  },
  {x: 47.581, z: 5.697  },
  {x: 43.741, z:  4.483 },
  {x: 40.232, z: 2.682  },
  {x: 38.283, z: 0.845  },
  {x: 35.736, z: -1.152  },
  {x: 31.869, z: 1.777  },
  {x: 27.724, z: 3.529 },
 {x:23.856 , z: 3.888  },
  {x: 4.388, z:  2.606 },
  {x: 1.522, z:  2.606 },];
 
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


function towards(dest){
 // console.log("I'm at "+camera.position.x+" "+camera.position.z);
  //console.log(b+"-> I want to go to "+dest.x+" "+dest.z);
  let diffZ=-(dest.x-camera.position.x);
  let diffX=-(dest.z-camera.position.z);

  let phi=0;
 // console.log("diffX= "+diffX+ "diffZ= "+diffZ);
  if (diffX===0 && diffZ===0){phi= 0;}
  else if (diffX===0 && diffZ>0){phi= 0.5*Math.PI;}
  else if (diffX===0 && diffZ<0){phi= -0.5*Math.PI;}
  else if (diffZ===0 && diffX<0){phi = Math.PI;}
  else if (diffX>0){phi= Math.atan(diffZ/diffX);}
  else if (diffZ>0){phi= Math.atan(diffZ/diffX)+Math.PI;}
  else if (diffZ<0){phi= Math.atan(diffZ/diffX)-Math.PI;}
 // console.log("New angle is "+(phi));
  return {r:Math.sqrt(diffX*diffX+diffZ*diffZ), phi:phi}
}           
function moveCube(){
  console.log("Breakpoint "+b);
  let sign=document.querySelector("#breakpoint");
  sign.setAttribute("position", breakpoints[b].x +" 5 "+ breakpoints[b].z);
}
function moveTo(deltaStep, angle){  
  camera.position.z =camera.position.z-deltaStep*Math.cos(-angle);
  camera.position.x =camera.position.x+deltaStep*Math.sin(-angle);
  if(Math.abs(camera.rotation.y - angle)>Math.PI){ // problems around -PI + PI
      if(camera.rotation.y>0)         
      { 
        camera.rotation.y = camera.rotation.y  - 2*Math.PI;
      }
      else
      { 
        camera.rotation.y = camera.rotation.y + 2*Math.PI;
      }
  }
  camera.rotation.y = lambdaAngle*camera.rotation.y + (1-lambdaAngle)*angle;//*180/Math.PI; 
}            
 function step(deltaStep){    
  if(camera===null){ 
    console.log("Problem");
  }
  let distNext=towards(breakpoints[b])

  if(distNext.r > deltaStep){
    moveTo(deltaStep, distNext.phi);
  }
  else{
   moveTo(distNext.r, distNext.phi);
   b=(b+1)%breakpoints.length;
   moveCube();
   step(deltaStep-distNext.r)
  }  
}   



function update(){

  if(!lastT){
    lastT=getSeconds();
    window.requestAnimationFrame(update);
    return; 
  }
  curT=getSeconds();
  let deltaT=curT-lastT; //seconds
  //console.log(1/deltaT);
  let deltaStep= virtualStepsize*BPM*deltaT/60.; // m virtuali
  
  distance+=realStepsize*BPM*deltaT/60.; // m;
  let newKMH = realStepsize*BPM/60.; // m; = m/s
  newKMH = newKMH * 3.6;
  lastKMH = 0.9 * lastKMH + 0.1 * newKMH;
  //update_stats_screen(lastKMH, distance/1000.);

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