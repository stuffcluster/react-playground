import React, { Component } from 'react';
import YuLogo from  './YuLogo.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      color: '#000',
      viewBox: '-100 0 800 369.1',
    };

  }

  updateColor=(e)=> {
    this.setState({color: e.target.value});
  }
  render(){
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", height: "100vh"}}>
        <YuLogo {...this.state} style={{width: "50%"}}/>
        <input style={{width: "100px", height: "100px"}} type="color" onChange={this.updateColor}/>
      </div>
    );
  }
}

export default App;

