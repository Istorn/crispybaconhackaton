import React from 'react';


import load from '../circuit/app';

import sky from '../assets/day.jpg';
import country2 from '../assets/large_countryside.obj';
import country2Mtl from '../assets/large_countryside.mtl';
class CircuitDisplay extends React.Component{


     componentDidMount(){
        

    }
    componentWillMount(){
        
    }
    render(){

        /* intensità per la notte: 0.3, disabilitare sopra e usare night.jpg
        intensità per il giorno: 0.7, true sopra e usare day.jpg*/

        return(
            <div id="scena">

                <a-scene light="defaultLightsEnabled: true">      
                    <a-entity light="type: ambient; intensity: 0.7"></a-entity>
                    <a-entity light="type: directional; intensity: 0.8 castShadow:true; position=1 10 1"></a-entity>
                    <a-assets>
                        <a-asset-item id="scene-obj" src={country2}></a-asset-item>
                        <a-asset-item id="scene-mtl" src={country2Mtl}></a-asset-item>
                        <img id="sky" src={sky} />
                    </a-assets>
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