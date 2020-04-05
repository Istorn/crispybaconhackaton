import React from 'react';
import VideoRenderer from './VideoRenderer';
import logoCrispy from '../assets/logocrispy.png';

class App extends React.Component {
    
    state={status:'showMenu'};

    startGame = ()=>{
        
        this.setState({status:'showGame'});
    }

    seeInstructions = () =>{
        this.setState({status:'showInstructions'});
    }

    seeDisclaimer = () =>{
        this.setState({status:'showDisclaimer'});
    }

    seeCredits = () =>{
        this.setState({status:'showCredits'});
    }
    resetMenu = () =>{
        this.setState({status: 'showMenu'});
    }
    render(){
        if (this.state.status==='showMenu'){
                return(
                <div>
                    <div className="centralMenu">
                        <br/>
                        <h1 className="centralMenuContent">Posso Andare a correre?</h1>
                        <br/><br/><br/>
                        <div class="ui green animated button" tabindex="0" onClick={this.startGame}>
                            <div class="visible content">Gioca</div>
                            <div class="hidden content">
                                <i class="right flag checkered icon"></i>
                            </div>
                        </div>
                        <br/><br/><br/>
                        <div class="ui primary animated button" tabindex="0" onClick={this.seeInstructions}>
                            <div class="visible content">Istruzioni</div>
                            <div class="hidden content">
                                <i class="right file alternate icon"></i>
                            </div>
                        </div>
                        <br/><br/><br/>
                        <div class="ui yellow animated button" tabindex="0" onClick={this.seeDisclaimer}>
                            <div class="visible content">Disclaimer</div>
                            <div class="hidden content">
                                <i class="right info icon"></i>
                            </div>
                        </div>
                        <br/><br/><br/>
                        <div class="ui white animated button" tabindex="0" onClick={this.seeCredits}>
                            <div class="visible content">Credits</div>
                            <div class="hidden content">
                                <i class="right heart outline icon"></i>
                            </div>
                        </div>
                        
                        <VideoRenderer showOrNot={'no'}/>
                    </div>
                    <div className="footerLogo">
                        
                    <h3 className="floatFooterContent">Hack At Home 3-6 Aprile 2020</h3>
                            <a href="https://crispybacon.it/"><img className="floatFooterContent" src={logoCrispy}/></a>
                            
                            
                        
                    </div>
                </div>
            );
        }
        else if (this.state.status === 'showInstructions'){
            return (
                <div>
                    <div className="centralMenu">
                    
                        <br/>
                        <h1 className="centralMenuContent">Istruzioni</h1>
                        <br/><br/><br/>
                        <h4>
                            Inseriamo qui le istruzioni di gioco
                        </h4>
                        <br/>
                        <div class="ui white animated button" tabindex="0" onClick={this.resetMenu}>
                            <div class="visible content">Indietro</div>
                            <div class="hidden content">
                                <i class="left arrow icon"></i>
                            </div>
                        </div>    
                        <VideoRenderer showOrNot={'no'}/>
                    </div>
                    <div className="footerLogo">
                        
                    <h3 className="floatFooterContent">Hack At Home 3-6 Aprile 2020</h3>
                            <a href="https://crispybacon.it/"><img className="floatFooterContent" src={logoCrispy}/></a>
                            
                            
                        
                    </div>
                </div>
                );
        }
        else if (this.state.status === 'showDisclaimer'){
            return (
                <div>
                    <div className="centralMenu">
                    
                        <br/>
                        <h1 className="centralMenuContent">Disclaimer</h1>
                        <br/><br/><br/>
                        <h4>
                            Eventuali informazioni legali
                        </h4>
                        <br/>
                        <div class="ui white animated button" tabindex="0" onClick={this.resetMenu}>
                            <div class="visible content">Indietro</div>
                            <div class="hidden content">
                                <i class="left arrow icon"></i>
                            </div>
                        </div>    
                        <VideoRenderer showOrNot={'no'}/>
                    </div>
                    <div className="footerLogo">
                        
                    <h3 className="floatFooterContent">Hack At Home 3-6 Aprile 2020</h3>
                            <a href="https://crispybacon.it/"><img className="floatFooterContent" src={logoCrispy}/></a>
                            
                            
                        
                    </div>
                </div>
                );
        }
        else if (this.state.status === 'showCredits'){
            return (
                <div>
                    <div className="centralMenu">
                    
                        <br/>
                        <h1 className="centralMenuContent">Credits</h1>
                        <br/><br/><br/>
                        <h4>
                            Creato durante l'Hack At Home 3-6 Aprile 2020 organizzato da <a style={{"color":"white","text-decoration":"underline"}}href="https://crispybacon.it/">Crispy Bacon</a>
                            <br/>
                            <br/>
                            Autori: Michele Buccoli, Francesco Foscarin, Lorenzo Neri, Denis Rasia
                            

                        </h4>
                        <br/>
                        <div class="ui white animated button" tabindex="0" onClick={this.resetMenu}>
                            <div class="visible content">Indietro</div>
                            <div class="hidden content">
                                <i class="left arrow icon"></i>
                            </div>
                        </div>    
                        <VideoRenderer showOrNot={'no'}/>
                    </div>
                    <div className="footerLogo">
                        
                    <h3 className="floatFooterContent">Hack At Home 3-6 Aprile 2020</h3>
                            <a href="https://crispybacon.it/"><img className="floatFooterContent" src={logoCrispy}/></a>
                            
                            
                        
                    </div>
                </div>
                );
        }
        else{
            return (
                <div>
                    <VideoRenderer showOrNot={'yes'}/>
                </div>
                );
        }
        
    }
}


export default App;