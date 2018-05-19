import React, { Component } from 'react';
import './App.css';
import Paragraph from './Paragraph';
import Image from './Image';
import Link from './Link';
import Dropzone from './Dropzone';

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="tool-bar">
          <h3>Available blocks</h3>
          <Paragraph />
          <Image />
          <Link />
        </div>
        <div className="dropzone">
          <h3>Playground</h3>
          <Dropzone />
        </div>
      </div>
    );
  }
}

export default App;
