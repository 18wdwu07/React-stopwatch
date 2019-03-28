import React, { Component } from 'react';
import './App.css';
var timerInt;

class App extends Component {
    constructor(){
        super();
        this.state = {
            timerOn: false,
            timerText: 0,
            buttonText: 'Start Stop Watch',
            buttonClass: 'btn btn-primary'
        }
        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetWatch = this.resetWatch.bind(this);
    }

    toggleTimer(){
        if(this.state.timerOn === false){

            timerInt = setInterval(
                () => this.tick(),1000
            );
            this.setState({
                timerOn: true,
                buttonText: 'Stop Timer',
                buttonClass: 'btn btn-warning'
            })

        } else {

            clearInterval(timerInt);
            this.setState({
                timerOn: false,
                buttonText: 'Continue Timer',
                buttonClass: 'btn btn-primary'
            })
        }
    }

    tick(){
        var newTime = this.state.timerText + 1;
        this.setState({
            timerText: newTime
        })
    }

    resetWatch(){
        this.setState({
            timerText: 0,
            buttonText: 'Start Stop Watch',
            buttonClass: 'btn btn-primary'
        })
    }


  render() {
      let { buttonText, buttonClass } = this.state;
      let button;
      if( (this.state.timerOn === false) && (this.state.timerText > 0) ){
          button = <button className="btn btn-danger" onClick={this.resetWatch}>Reset Stop Watch</button>;
      }

    return (
      <div className="d-flex align-items-center h-100 bg-dark">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="card text-center">
                        <h1 className="display-4">Stop Watch</h1>
                        <h2 className="display-2">{this.state.timerText}</h2>
                        <button className={buttonClass} onClick={this.toggleTimer} >{buttonText}</button>
                        {button}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
