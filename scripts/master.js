/*
    Global Variables go here
*/

var total = window.innerHeight;
var swarm = [];
var speedModifier = 2;
var spSlider;



/*----------------------------------------------------------------------------*/


// Basic setup
function setup() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    createCanvas(w, h, P2D);
    frameRate(60);

    spSlider = createSlider(0.1, 2, 0.2, 0.1);
    spSlider.position(5, 5);


    for(var i=0; i<total; i++){
        var ranH = getRndFloat(0, h);
        var ranW = getRndFloat(0, w);
        swarm[i] = new Ball(ranW, ranH);
    }
}



// Draw loop below
function draw() {
    //-----------------------------  DO NOT TOUCH  -----------------------------
    clear();
    speedModifier = spSlider.value();
    //-------------------------------------------------------------------------

    /* DEBUG COMMANDS*/

    //console.log(frameRate());


    /*------------------------------------------------------------------------*/
    //background(240, 240, 240);



    for(var i=0; i<swarm.length; i++){
        swarm[i].move();
        swarm[i].draw(20);
    }
}


/*---------------   No other functions allowed in this file   ----------------*/
