import React, { Component } from 'react';
import './App.css';
import {Picture} from './Picture.js';
import Field from './Field.js'; 

class App extends Component {
  constructor(){
    super();
    this.state={
      mouseX: 0,
      mouseY: 0,
      showPictures: false,
      header: "This is the header",
      imageURL: "http://www.dogbreedworld.com/dogs/kangal_dog/kangal_dog.jpg",
      number: [0],
      inputText: "placeholder",
      opacity: 100
    }
  }

  addPicture=()=> {
    this.setState(prevState => ({number: [...prevState.number, 0]}))
  }

  removePic=()=> {
    this.setState(prevState => ({number: [...prevState.number.slice(0, prevState.number.length-1)]}))
  }

  toggleShow=()=> {
    this.setState(prevState => ({showPictures: !prevState.showPictures}))
  }

  textInput=(e)=> {
    const stuff = e.target.value;
    this.setState(prevState =>({inputText: stuff}))
  }

  mouseHandler=(e)=> {
    const x = e.clientX.toString(16);
    const y = e.clientY.toString(16);
    const color = `#${x}8${y}`;

    this.setState({mouseX: x, mouseY: y, color});
  }

  opacityHandler=(e)=> {
    const op = e.target.value / 100;
    this.setState({opacity: op});
  }

  render() {
    return (

      <div className="App">
        <header style={{background: this.state.color}} className="App-header">
          <h1>{this.state.header}</h1>
        </header>
          { this.state.showPictures ?
            <div>
              <Picture imageSource={this.state.imageURL} alt="dog" number={this.state.number} opacity={this.state.opacity} />
            </div>
              :
              <h1 style={{color: this.state.color}}>Nothing to see</h1>
            }
          <input type="range" min="0" max="100" onChange={this.opacityHandler} />
          <h2>{this.state.inputText == "Patrick"? "Hey": "Bye"}</h2>
          <button onClick={this.toggleShow} >SHOW/HIDE</button>
          <button onClick={this.addPicture}>ADD PIC</button>
          <button onClick={this.removePic}>REMOVE PIC</button>
          <Field mouseHandler={this.mouseHandler} color={this.state.color} />
          <input onChange={this.textInput} />
      </div>
    );
  }
}

export default App;

