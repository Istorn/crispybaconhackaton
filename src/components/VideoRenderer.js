import React from 'react';
import bindPage from '../posenet/posenet';

class VideoRenderer extends React.Component{

    componentDidMount(){
        

        bindPage();
    }
    render(){
        return (
            <div id='main' >
                <video id="video" playsInline style={{'width':0, 'height':0}}>
                </video>
                <canvas id="output" />
            </div>
        );
    }
}

export default VideoRenderer;