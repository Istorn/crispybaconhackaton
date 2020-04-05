import React from 'react';


import load from '../circuit/app';



class CircuitDisplay extends React.Component{


     componentDidMount(){
        

    }
    componentWillMount(){
        
    }
    render(){
        return(
            <div id="scena" style={{'z-index':-100}}>
                <a-scene>
     
                <a-sky color="#b8e1ff"></a-sky>
                    <a-entity id="forest">
                        <a-entity class="tree" rotation="0 0 0">
                        <a-entity class="treeRadius" position="43 0 0">
                            <a-cone color="brown" radius-bottom="1" height="10" position="0 5 0" radius-top="0.1"></a-cone>
                            <a-sphere color="green" radius="5" position="0 10 0" scale="1 0.7 1" ></a-sphere>
                        </a-entity>
                        </a-entity>
                    </a-entity>
                    


                    
                    <a-box height="0.01" width="500" depth="500" color="#609060"></a-box>
                    <a-entity rotation="-90 0 0" position="0 0.02 0">
                    <a-ring id="track" color="#c24e00" ></a-ring>
                    </a-entity>
                    
                    </a-scene>
            </div>
            
        );
    }

}



/*

*/
export default CircuitDisplay;