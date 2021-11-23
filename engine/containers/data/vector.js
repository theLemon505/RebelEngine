class Vector{

    static up = {x:0,y:1,z:0};
    static forward = {x:0, y:0, z:1};

    static add(one, two){
        return {x = one.x + two.x, y = one.y + two.y, z = one.z + two.z};
    }

    static subtract(one, two){
        return {x = one.x - two.x, y = one.y - two.y, z = one.z - two.z};
    }

    static unitVector(vector){
        let x = vector.x / Math.abs(vector.x);
        let y = vector.y / Math.abs(vector.y);
        let z = vector.z / Math.abs(vector.z);
        return {x, y, z};
    }

    static crossProduction(one, two){
        x = one.y * two.z - one.z * two.y;
        y = one.z * two.x - one.x * two.z;
        z = one.z * two.y - one.y * two.x;
        return {x, y, z}
    }

    static scale(vector, t){
        return {x: vector.x * t, y: vector.y * t, z: vector.z * t}
    }
}

