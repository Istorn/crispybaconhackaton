import React from 'react';
import VideoRenderer from './VideoRenderer';
import logoCrispy from '../assets/logocrispy.png';

class App extends React.Component {
    
    constructor(){
        super();
        
        
    }

    
   
    render(){

            return (
                <div>
                    

                    <VideoRenderer showOrNot={'yes'}/>
                </div>
                );
        
        
    }
}


export default App;