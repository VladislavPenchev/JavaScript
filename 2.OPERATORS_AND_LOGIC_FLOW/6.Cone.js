function ConeVolume(radius,height){
    let base = Math.PI*(radius**2);
    let volume = 1/3*(base*height);
    console.log("volume " + volume.toFixed(4));
}

function ConeSurface(radius,height){
    let hypotenuse = (radius**2) + (height**2);
    hypotenuse = Math.sqrt(hypotenuse);
    let surface = Math.PI*(radius**2) + Math.PI*radius*hypotenuse;
    console.log("surface " + surface.toFixed(4));
}

ConeVolume(3.3,7.8);
ConeSurface(3.3,7.8);