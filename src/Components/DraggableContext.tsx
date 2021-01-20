import * as React from 'react';
import { IDraggableComponent } from '../Interfaces';

const initialDraggableState:IDraggableComponent = {
    draggedComponent: null,
    componentPosition:  null,
    mousePosition: null
};

interface ContextTypes {
    draggableState:IDraggableComponent | null,
    setDraggableState: React.Dispatch<React.SetStateAction<IDraggableComponent>> | null
}

export const DraggableContext = React.createContext<ContextTypes>(null as any);

export const DraggableProvider = ({children}) => {
    const [draggableState, setDraggableState] = React.useState(initialDraggableState);

    // React.useEffect(() => {
    //     console.log("draggableState", draggableState);
    // }, [draggableState]);

    return <DraggableContext.Provider value={{ draggableState, setDraggableState }}>
        {children}
    </DraggableContext.Provider>;
};

export const DraggableConsumer = DraggableContext.Consumer;