class Scene{
    geometry = [];
    canvas = null;

    constructor(canvas, geometry){
        this.geometry = geometry;
        this.canvas = canvas;
    }
    
    addGeometry(geometry){
        if(Array.isArray(geometry)){
            for(let i = 0; i < geometry.length; i++){
                this.geometry.push(geometry[i]);
            }
        }
        else{
            this.geometry.push(geometry);
        }
    }

    removeGeometry(index){
        this.geometry[index].pop();
    }
}

function intersectScene(ray, scene) {
    var closest = [Infinity, null];

    for (var i = 0; i < scene.geometry.length; i++) {
        var object = scene.geometry[i],
            dist = object.calculateIntersect(ray);
        if (dist !== undefined && dist < closest[0]) {
            closest = [dist, object];
        }
    }
    return closest;
}
