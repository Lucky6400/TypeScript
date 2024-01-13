type Circle = string;
type Rectangle = string;
type CircleProps = {
    cx: number;
    cy: number;
    radius: number;
}

type RectangleProps = {
    x1: number;
    y1: number;
    width: number;
    height: number;
}
interface GraphicsFactory {
    drawCircle(props: CircleProps): Circle;
    drawRectangle(props: RectangleProps): Rectangle;
}


class FirstGraphics implements GraphicsFactory {
    // Implementation
    drawCircle(props: CircleProps): string {
        return `${props.cx},${props.cy},${props.radius}`
    }
    drawRectangle(props: RectangleProps): string {
        return `${props.x1},${props.y1},${props.width},${props.height}`
    }
}
class SecondGraphics implements GraphicsFactory {
    // Implementation
    drawCircle(props: CircleProps): string {
        return `${props.cx}|${props.cy}|${props.radius}`
    }
    drawRectangle(props: RectangleProps): string {
        return `${props.x1}|${props.y1}|${props.width},${props.height}`
    }
}

const fg: string = new FirstGraphics().drawCircle({
    cx: 20, cy: 20, radius: 12
})

console.log(fg)