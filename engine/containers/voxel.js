class Voxel{
    position = {x:0, y:0, z:0};
    rotation = {x:0, y:0, z:0};
    scale = 1;
    material = null;

    constructor(position, rotation, scale, material){
        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
        if(material != null){
            this.material = material;
        }
        else{
            this.material = new Material(new Color(1,0,0,1));
        }
    }

    calculateIntersection(ray){
        let tnear = -Infinity;
        let tfar = Infinity;

        let t1 = (scale - ray.position.x) / ray.direction.x;
        let t2 = ((scale * 2) - ray.position.x) / ray.direction.x;

        if(t1 > t2){
            this.swap(t1, t2);
        }

        if(t1 > tnear){
            tnear = t1;
        }

        if(t2 < tfar){
            tfar = t2;
        }

        if(tnear > tfar){
            return;
        }

        if(tfar < 0){
            return;
        }

        let t3 = (scale - ray.position.y) / ray.direction.y;
        let t4 = ((scale * 2) - ray.position.y) / ray.direction.y;

        if(t3 > t4){
            this.swap(t3, t4);
        }

        if(t3 > tnear){
            tnear = t3;
        }

        if(t4 < tfar){
            tfar = t4;
        }

        if(tnear > tfar){
            return;
        }

        if(tfar < 0){
            return;
        }

        let t5 = (scale - ray.position.z) / ray.direction.z;
        let t6 = ((scale * 2) - ray.position.z) / ray.direction.z;

        if(t5 > t6){
            this.swap(t5, t6);
        }

        if(t5 > tnear){
            tnear = t5;
        }

        if(t6 < tfar){
            tfar = t6;
        }

        if(tnear > tfar){
            return;
        }

        if(tfar < 0){
            return;
        }

        return Math.min([t1, t2, t3, t4, t5, t6]);
    }

    calculateNormal(point){
        let normal;
        let localPoint = Vector.subtract(point,this.position);
        let min = this.scale;
        let distance = Math.sign(scale - Math.abs(localPoint.x));
        if (distance < min) {
            min = distance;
            normal = {x:1, y:0, z:0};
            normal *= Math.sign(localPoint.x);
        }
        distance = Math.abs(scale - Math.abs(localPoint.y));
        if (distance < min) {
            min = distance;
            normal = {x:0, y:1, z:0};
            normal *= Math.sign(localPoint.y);
        }
        distance = Math.abs(scale - Math.abs(localPoint.z));
        if (distance < min) { 
            min = distance; 
            normal = {x:0, y:0, z:1};
            normal *= Math.sign(localPoint.z);
        } 
        return normal;
    }

    swap(one, two){
        let o = one;
        let t = two;
        one = t;
        two = o;
    }

}