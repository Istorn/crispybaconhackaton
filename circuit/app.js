
      
     
    function step(){            
      if(camera===null){changeScene();}
      angle = angle + delta_angle;//*moving
      
      if(moving==0){                
        window.requestAnimationFrame(move);
      }
      moving=1;
    }   
    function move(){
      if(moving<=0){moving=0; return;}      
      
      moveCamera(angle);

      moving = moving - 0.01;
      angle = angle+ 0.1*delta_angle; 
      window.requestAnimationFrame(move);
    }
    function moveCamera(angle){
      //console.log(angle);
      camera.position.x=RADIUS*Math.cos(-angle);
      camera.position.z=RADIUS*Math.sin(-angle);
      camera.rotation.y=angle;

      
    }
   function load(){
    scene=AFRAME.scenes[0];    
    if(scene.hasLoaded){changeScene();}
    else{scene.addEventListener('loaded', changeScene);}
    
   };

   function changeScene(){
    console.log("loaded?");    
      camera=AFRAME.scenes[0].camera;
      camera.position.x=RADIUS;
      ring= document.querySelector("#track");
      ring.setAttribute("radius-inner",RADIUS-HALF_WIDTH);
      ring.setAttribute("radius-outer",RADIUS+HALF_WIDTH);
      createTrees();
   }
 document.addEventListener('keydown', function(event){
        if(event.keyCode == 32) {
          step();} });