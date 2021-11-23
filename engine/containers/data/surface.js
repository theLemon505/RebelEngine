function surface(ray, scene, object, pointAtTime, normal, depth) {
    var b = object.color,
    c = Vector.ZERO,
    lambertAmount = 0;
    if (object.lambert) {
        for (var i = 0; i < scene.lights.length; i++) {
            var lightPoint = scene.lights[i];
            if (!isLightVisible(pointAtTime, scene, lightPoint)) continue;
            var contribution = Vector.dotProduct(
                Vector.unitVector(Vector.subtract(lightPoint, pointAtTime)),
                normal
            );
            if (contribution > 0) lambertAmount += contribution;
        }
    }
    if (object.specular) {
        var reflectedRay = {
            point: pointAtTime,
            vector: Vector.reflectThrough(ray.vector, normal),
        };
        var reflectedColor = trace(reflectedRay, scene, ++depth);
        if (reflectedColor) {
            c = Vector.add(c, Vector.scale(reflectedColor, object.specular));
        }
    }
    lambertAmount = Math.min(1, lambertAmount);
    return Vector.add(
        c, Vector.add(
            Vector.scale(b, lambertAmount * object.lambert),
            Vector.scale(b, object.ambient)
        )
    )
}

function isLightVisible(pt, scene, light) {
    var distObject = intersectScene(
        new Ray(
            pt,
            Vector.unitVector(Vector.subtract(pt, light)),
        ),
        scene
    );
    return distObject[0] > -0.005;
}