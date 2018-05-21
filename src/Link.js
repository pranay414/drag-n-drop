import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './Constants';

const linkSource = {
    beginDrag(props) {
        return {
            name: 'link'
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

class Link extends Component {
    render() {
        const { name, connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 20,
                cursor: 'move'
            }}>
                <p>🔗 Link</p>
            </div>
        )
    }
}

export default DragSource(ItemTypes.LINK, linkSource, collect)(Link);