class Camera{
    position = {x:0, y:0, z:0};
    vector = {x:0, y:0, z:1};
    rotation = {x:0, y:0, z:0, w:0};
    fov = 75;
    near = 0.1;
    far = 75;
    eyeVector = {x:0, y:0, z:1};
    vpRight = {x:0, y:0, z:0}
    vpUp = {x:0, y:0, z:0}
    aspectRacio = 0;
    fovr = 0;
    halfWidth = 0;
    halfHeight = 0;
    cameraWidth = 0;
    cameraHeight = 0;
    pixelWidth = 0;
    pixelHeight = 0;
    xcomp = {x:0, y:0, z:0};
    ycomp = {x:0, y:0, z:0};
    constructor(position, rotation, fov, near, far){
        this.position = position;
        this.rotation = rotation;
        this.fov = fov;
        this.near = near;
        this.far = far;
        this.eyeVector = Vector.add(this.vector, this.position);
        this.vpRight = Vector.unitVector(Vector.crossProduct(this.eyeVector, Vector.up));
        this.vpUp = Vector.unitVector(Vector.crossProduct(this.vpRight, this.eyeVector));
        this.fovr = (Math.PI * (this.fov / 2)) / 180;
        this.aspectRacio = window.innerHeight / window.innerWidth;
        this.halfWidth = Math.tan(this.fovr);
        this.halfHeight = this.aspectRacio * this.halfWidth;
        this.cameraHeight = this.halfHeight * 2;
        this.cameraWidth = this.halfWidth * 2;
        this.pixelWidth = this.cameraWidth / (window.innerWidth - 1);
        this.pixelHeight = this.cameraHeight / (window.innerHeight - 1);
    }
}