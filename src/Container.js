import React, { Component } from 'react';
import './Container.css';
import Paragraph from './Paragraph';
import Image from './Image';
import Link from './Link';
import Dropzone from './Dropzone';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class Container extends Component {
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

export default DragDropContext(HTML5Backend)(Container);
