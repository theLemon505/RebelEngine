const width = window.innerWidth;
const height = window.innerHeight;

const canvas = document.getElementById("canvas");
canvas.setAttribute("width", width);
canvas.setAttribute("height", height);
document.body.appendChild(canvas);

const context = canvas.getContext("2d");
context.rect(1080, 1920, 1080, 1920);
context.fill();

const tickRate = 60;


init();

let camera = new Camera((0,0,0), (0,0,0,0),75, 0.1, 100);

let scene = new Scene(camera, []);

scene.addGeometry(new Voxel((0,0,1), (0,0,0,0), 1, null))

let buffer = new FrameBuffer(context);

function init(){
    console.log("initializing engine");
}

function loop(){
    render(camera, scene, buffer);
}

function end(){
    console.log("ending engine runtime");
}
