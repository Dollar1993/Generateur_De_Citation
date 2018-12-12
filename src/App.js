import React, { Component } from 'react';
import './App.css';
import './citation.css'
import mcs from './citations'



class App extends Component {


// Constructeur pour initialiser les objets
    constructor(props) {
        super(props);
          this.keyvals  = [];
          this.auteurs  = [];
          this.citations  = [];
          //this.obj = JSON.parse(JSON.stringify(mcs));
          JSON.parse(JSON.stringify(mcs),(key, value) => {
                 if(key === 'auteur'){
                       this.auteurs.push(value)
                   }
                   else if( key === 'citation' )
                   {
                       this.citations.push(value);
                   }

                   console.log(mcs.length);
           return value;
        });

        this.state = {
            numOfClicks: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () =>{

        this.setState({numOfClicks: Math.floor(Math.random() * Math.floor(mcs.length - 1))})
        console.log( this.state.numOfClicks );

    }
  render(){
    return (
        <div className="App">
            <header className="App-header">
                <h4>Generateur de citation</h4>
            </header>
            <div className="div">
                <p> { this.citations[this.state.numOfClicks] }</p>
                <span> -- { this.auteurs[this.state.numOfClicks] } --</span>
                <button onClick={ this.handleClick }>
                    { this.state.numOfClicks }
                </button>

            </div>
        </div>
    );
  }
}

export default App;
