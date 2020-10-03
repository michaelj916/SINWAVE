let w,
    dx,
    xSpace = 16,
    theta = 0,
    thetaSlider,
    amplitudeSlider,
    period = 500,
    yVal;

function windowResized() {
    // making it responsive
    resizeCanvas(window.innerWidth, window.innerHeight);
}

function setup() {
    // creating canvas
    createCanvas(window.innerWidth - 4, window.innerHeight - 4);
    
    thetaSlider = createSlider(-0.3, 0.3, 0.055, 0.001);
    thetaSlider.size(window.innerWidth / 2 - 20);
    thetaSlider.position(window.innerWidth / 60, window.innerHeight - 35);

    amplitudeSlider = createSlider(-250, 250, 75, 1);
    amplitudeSlider.size(window.innerWidth / 2 - 20);
    amplitudeSlider.position(window.innerWidth / 2, window.innerHeight - 35);

    w = width + 16;
    dx = (TWO_PI / period) * xSpace;
    yVal = new Array(floor(w / xSpace));
}

function calcWave() {

    theta += thetaSlider.value();


    // calculating y val sin 
    let x = theta;
    for(let i = 0; i < yVal.length; i++) {
        yVal[i] = sin(x) * amplitudeSlider.value();
        x += dx;
    }    
}

function renderWave() {
    
    fill(90);

    for(let x = 0; x < yVal.length; x++) {
        ellipse(x * xSpace, height / 2 + yVal[x], 6, 6);
    }
}

function draw() {
    background(0);
    // create & render the sin wave
    calcWave();
    renderWave();
}



