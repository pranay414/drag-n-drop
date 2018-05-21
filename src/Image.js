import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './Constants';

const imageSource = {
    beginDrag(props) {
        return {
            name: 'image'
        };
    },
    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if(dropResult) {
            alert(`You dropped an item!`)
        }
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Image extends Component {
    render() {
        const { name, connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 20,
                cursor: 'move'
            }}>
                <p>📷 Image</p>
            </div>
        )
    }
}

export default DragSource(ItemTypes.IMAGE, imageSource, collect)(Image);