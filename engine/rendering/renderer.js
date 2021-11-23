
function render(camera, scene, buffer){
    for(let x = 0; x < camera.width; x++){
        for(let y = 0; y < camera.height; y++){
            var xcomp = Vector.scale(camera.vpRight, x * camera.pixelWidth - camera.halfWidth),
                ycomp = Vector.scale(camera.vpUp, y * camera.pixelHeight - camera.halfHeight);
            let ray = new Ray(camera.position, Vector.add(camera.eyeVector, Vector.add(xcomp, ycomp)));

            const color = trace(ray, scene, 0);

            let index = x * 4 + y * camera.width * 4;

            buffer.data[index + 0] = color.r;
            buffer.data[index + 1] = color.g;
            buffer.data[index + 2] = color.b;
            buffer.data[index + 3] = color.a;

            buffer.put();
        }
    }
}

function trace(ray, scene, depth){
    if(depth > 3){
        return;
    }

    let distObject = intersectScene(ray, scene);

    if(distObject[0] === Infinity){
        return new Color(1,1,1,1);
    }

    var dist = distObject[0],
    object = distObject[1];

    var pointAtTime = Vector.add(ray.position, Vector.scale(ray.direction, ray.length));

    return surface(
        ray,
        scene,
        object,
        pointAtTime,
        sphereNormal(object, pointAtTime),
        depth
      );
}