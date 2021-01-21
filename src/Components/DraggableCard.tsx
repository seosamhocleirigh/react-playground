import * as React from 'react';
import { I2DCoordinate } from '../Interfaces';
import { DraggableContext } from './DraggableContext';

interface IProps {
    fillColor: "red" | "blue" | "green"
};

class DraggableCard extends React.Component<IProps, I2DCoordinate> {
    static contextType = DraggableContext;

    constructor(props: any) { 
        super(props); 
        this.state = {
            x: 0,
            y: 0
        };
    };

    render() {
        const { setDraggableState } = this.context;

        const cardStyle: React.CSSProperties = {
            border: "1px solid #ccc",
            backgroundColor: this.props.fillColor,
            width: 100,
            height: 200,
            position: "relative",
            left: this.state.x,
            top: this.state.y
        };

        const handleMouseDown = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            setDraggableState({
                draggedComponent: this,
                componentPosition: { x: this.state.x, y: this.state.y },
                mousePosition: { x: event.pageX, y: event.pageY }
            });
        };

        return <div style={cardStyle} onMouseDown={handleMouseDown}>X:{this.state.x}<br />Y:{this.state.y}</div>
    };
};

export default DraggableCard;