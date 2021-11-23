class FrameBuffer{
    width = 0;
    height = 0;
    data = {};
    context = null;
    constructor(context){
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.context = context;
        this.data = context.getImageData(0, 0, this.width, this.height);
    }

    setPixel(row, col, color){
    }

    put(){
        this.context.putImageData(data, 0, 0);
    }
}