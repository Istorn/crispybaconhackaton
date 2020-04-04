import React from 'react';
import bindPage from '../posenet/posenet';

class VideoRenderer extends React.Component{
    
    
    componentDidMount(){
        
        bindPage();
        
    }
    render(){
        return (
            <div id='main'  >
                
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