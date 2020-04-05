import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import * as circuit from './circuit/app';


ReactDOM.render(<App/>,document.querySelector('#root'));

window.onload = function (){
    circuit.load();
    
}
window.load = function(){
    
}