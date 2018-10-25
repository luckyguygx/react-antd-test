import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{flex:1}}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
