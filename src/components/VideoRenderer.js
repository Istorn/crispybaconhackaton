import React from 'react';
import bindPage from '../posenet/posenet';
import CircuitDisplay from './CircuitDisplay';
class VideoRenderer extends React.Component{
    
    
    componentDidMount(){
        
        bindPage();
        
    }
    render(){
        return (
            <div id='main'  >
                <CircuitDisplay/>
                <video id="video" style={{'width':0, 'height':0}} hidden>

                </video>
                <canvas id="output" hidden/>
                <div id="blink">
                    Pause
                </div>
            </div>
        );
    }
}

export default VideoRenderer;