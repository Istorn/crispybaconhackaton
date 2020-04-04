    
 


function update(){
  if(lastT===null){
    lastT=getSeconds();
    window.requestAnimationFrame(update);
    return; 
  }
  curT=getSeconds();
  deltaT=curT-lastT; //seconds
  //console.log(1/deltaT);
  deltaStep= stepsize*BPM*deltaT/60.; // m
  //console.log(deltaStep);
  if (deltaStep<MINSTEP){deltaStep=0;}
  step(deltaStep);
  
  inertia();
  lastT=curT;
  window.requestAnimationFrame(update);
}

function load(){
  scene=AFRAME.scenes[0];    
  console.log("loading...");
  console.log(scene);
  if(scene.hasLoaded){sceneLoaded();}
  else{scene.addEventListener('loaded', sceneLoaded);}
};

function sceneLoaded(){
  console.log("loaded?");    
  camera=AFRAME.scenes[0].camera;
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