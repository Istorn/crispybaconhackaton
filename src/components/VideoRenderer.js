import React from 'react';
import bindPage from '../posenet/posenet';
import CircuitDisplay from './CircuitDisplay';
class VideoRenderer extends React.Component{
    
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
        
         bindPage();
        
    }
    render(){
        if (this.props.showOrNot==='yes'){
            return (
                <div id='main' >
                    <CircuitDisplay/>
                    <video id="video" hidden>
    
                    </video>
                    <canvas id="output" style={{"position":"absolute","top":"0px","right":"0px","opacity":"0.5"}}/>
                    <div id="stats" style={{"position":"absolute","top":"40px","left":"40px","opacity":"1"}}>
                    <div className="ui statistic">
                        <div className="label">
                            Ritmo
                        </div>
                        <div className="value" id="ritmo">
                            
                        </div>
                        <br/>
                        <div className="label">
                            Km percorsi
                        </div>
                        <div className="value" id="kmPercorsi">
                            
                        </div>
                        </div>
                    </div>
                    <div id="blink">
                        
                    </div>
                </div>
            );
        }
        else{
            return (
                <div id='main' hidden>
                    <CircuitDisplay/>
                    <video id="video" hidden>
    
                    </video>
                    <canvas id="output" style={{"position":"absolute","top":"0px","right":"0px","opacity":"0.5"}}/>
                    <div id="stats" style={{"position":"absolute","top":"40px","left":"40px","opacity":"1"}}>
                    <div className="ui statistic">
                        <div className="label">
                            Ritmo
                        </div>
                        <div className="value" id="ritmo">
                            
                        </div>
                        <br/>
                        <div className="label">
                            Km percorsi
                        </div>
                        <div className="value" id="kmPercorsi">
                            
                        </div>
                        </div>
                    </div>
                    <div id="blink">
                        
                    </div>
                </div>
                );
        }
        
    }
}

export default VideoRenderer;