import React from 'react';


import load from '../circuit/app';

import sky from '../assets/day.jpg';
import country2 from '../assets/country2.obj';
import country2Mtl from '../assets/country2.mtl';
class CircuitDisplay extends React.Component{


     componentDidMount(){
        

    }
    componentWillMount(){
        
    }
    render(){
        return(
            <div id="scena">
                <a-scene light="defaultLightsEnabled: true">
      
      


      
            <a-entity light="type: ambient; intensity: 0.4"></a-entity>
            <a-entity light="type: directional; intensity: 0.8 castShadow:true; position=1 1 1"></a-entity>

            <a-assets>
          <a-asset-item id="scene-obj" src={country2}></a-asset-item>
          <a-asset-item id="scene-mtl" src={country2Mtl}></a-asset-item>
          </a-assets>
          <a-entity obj-model="obj: #scene-obj; mtl: #scene-mtl"  shadow="cast: true" position="40 -1 20"></a-entity>
          

          

                    
            <div id="entityMode"></div>
                    
                    
            <a-assets>
          <img id="sky" src={sky} />
        </a-assets>
        <a-sky src="#sky"></a-sky>
                    


                </a-scene>
            </div>
            
        );
    }

}



/*

*/
export default CircuitDisplay;