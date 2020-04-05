import React from 'react';


import load from '../circuit/app';

import sky from '../assets/day.jpg';
import country2 from '../assets/countryside.obj';
import country2Mtl from '../assets/countryside.mtl';
class CircuitDisplay extends React.Component{


     componentDidMount(){
        

    }
    componentWillMount(){
        
    }
    render(){

        /* intensità per la notte: 0.3, disabilitare sopra e usare night.jpg
        intensità per il giorno: 0.7, true sopra e usare day.jpg*/
        //<a-entity light="type: ambient; intensity: 0.7"></a-entity>
        //<a-entity light="type: directional; intensity: 0.7; castShadow:true" position="200 200 200"></a-entity>
                  //  <a-light type="ambient" color="#445451"></a-light>
                    
        return(
            <div id="scena">

                <a-scene light="defaultLightsEnabled: true">      
                    <a-assets>
                        <a-asset-item id="scene-obj" src={country2}></a-asset-item>
                        <a-asset-item id="scene-mtl" src={country2Mtl}></a-asset-item>
                        <img id="sky" src={sky} />
                    </a-assets>
                      <a-light type="ambient" color="#aabbb8" intensity="0.7"></a-light>
                      <a-entity light="type:directional; intensity:0.9; castShadow:true; color:#c4d4d2" position="200 200 200"></a-entity>
                    <a-entity obj-model="obj: #scene-obj; mtl: #scene-mtl"  shadow="cast: true" position="-0.6 0 6" rotation="0 176 0"></a-entity>
                    <a-sky src="#sky"></a-sky>
            
                    <div id="entityMode"></div>
                    <a-sphere id="breakpoint" position="0.672 4 -6.465" scale="0 0 0" color="red"></a-sphere>
                </a-scene>

            </div>
            
        );
    }

}



/*

*/
export default CircuitDisplay;