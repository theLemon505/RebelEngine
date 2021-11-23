class Ray{
    position = {x:0, y:0, z:0};
    direction = {x:0, y:0, z:0};
    length = 100;
    
    constructor(position, direction, length){
        this.position = position;
        this.direction = direction;
        if(length != 0){
            this.length = 100;
        }
        else{
            this.length = length;
        }
    }
}