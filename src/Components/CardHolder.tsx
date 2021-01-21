import * as React from 'react';
import DraggableCard from './DraggableCard';
import { DraggableContext } from './DraggableContext';

const CardHolder = () => {

    const { draggableState, setDraggableState } = React.useContext(DraggableContext);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if( draggableState !== null && 
            draggableState.draggedComponent !== null && 
            draggableState.componentPosition !== null && 
            draggableState.mousePosition !== null) {

            draggableState.draggedComponent.setState({
                x: draggableState.componentPosition.x + (event.pageX - draggableState.mousePosition.x),
                y: draggableState.componentPosition.y + (event.pageY - draggableState.mousePosition.y)
            });
        }
    };

    const handleMouseUp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (setDraggableState !== null && draggableState !== null) {
            setDraggableState({
                ...draggableState,
                draggedComponent: null
            });
        }
    };

    return (
        <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <DraggableCard fillColor={"red"} />
            <DraggableCard fillColor={"blue"} />
        </div>
    );
};

export default CardHolder;