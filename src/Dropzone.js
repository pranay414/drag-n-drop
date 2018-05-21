import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from './Constants';

const style = {
    height: '100%',
    width: '100%',
};

const dropTarget = {
    drop(props, monitor) {
        console.log(`Dropped ${monitor.getItem()}`);
        return {}
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

class Dropzone extends Component {
    render() {
        const { connectDropTarget, isOver, canDrop } = this.props;
        const isActive = canDrop && isOver;
        return connectDropTarget(
            <div style={{...style}}>
                {isActive ? 'Release to drop' : 'Drag an item here'}
            </div>
        )
    }
}

export default DropTarget([ItemTypes.LINK, ItemTypes.IMAGE, ItemTypes.PARAGRAPH], dropTarget, collect)(Dropzone);