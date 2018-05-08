import React, { Component } from 'react';
import YuLogo from  './YuLogo.js';
import Container from './Container.js';
import Swatch from './Swatch.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      color: '#e30d76',
      background: '#d9d9d9',
      viewBox: '-100 0 800 369.1',
    };

  }

  updateColor=(e)=> {
    this.setState({color: e.target.value});
  }
  updateBackground=(e)=> {
    this.setState({background: e.target.value});
  }
  render(){
    return (
      <Container color={this.state.background}>
        <YuLogo {...this.state} style={{width: "50%"}}/>
        <div style={{display:"flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
          <Swatch 
            label="Logo"
            onChange={this.updateColor}
            value={this.state.color}
            color={this.state.color}
          />
          <Swatch 
            label="Background"
            onChange={this.updateBackground}
            value={this.state.background}
            color={this.state.background}
          />
        </div>
      </Container>

    );
  }
}

export default App;

