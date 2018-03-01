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
      number: [0]
    }
  }

  addPicture=()=> {
    this.setState(prevState => ({number: [...prevState.number, 0]}))
  }

  toggleShow=()=> {
    this.setState(prevState => ({showPictures: !prevState.showPictures}))
  }

  mouseHandler=(e)=> {
    const x = e.clientX.toString(16);
    const y = e.clientY.toString(16);
    const color = `#${x}8${y}`;

    this.setState({mouseX: x, mouseY: y, color});
  }

  render() {
    return (

      <div className="App">
        <header style={{background: this.state.color}} className="App-header">
          <h1>{this.state.header}</h1>
        </header>
          { this.state.showPictures ?
            <div>
              <Picture imageSource={this.state.imageURL} alt="dog" number={this.state.number}/>
            </div>
              :
              <h1 style={{color: this.state.color}}>Nothing to see</h1>
          }
          <button onClick={this.toggleShow} >SHOW/HIDE</button>
          <button onClick={this.addPicture}>ADD PIC</button>
          <Field mouseHandler={this.mouseHandler} color={this.state.color} />
      </div>
    );
  }
}

export default App;

