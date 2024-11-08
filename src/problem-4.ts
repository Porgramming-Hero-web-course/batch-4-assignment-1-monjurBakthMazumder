{
    //
    type Circle = {
        shape: "circle",
        radius: number
    }
    type Rectangle = {
        shape: "rectangle",
        width: number,
        height: number,
    }
    function calculateShapeArea (obj: Circle | Rectangle) {
        if (obj.shape === "rectangle") {
            return (obj.height * obj.width)
        }
        if (obj.shape === "circle") {
            return (2 * Math.PI * obj.radius)
        }
    }
    //
}