import { I2DCoordinate } from "./I2DCoordinate";

export interface IDraggableComponent {
    draggedComponent: React.Component | null,
    componentPosition: I2DCoordinate | null,
    mousePosition: I2DCoordinate | null
};