// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

var lastMinute;

// draw() is called 60 times per second
function draw() {
    
    let hr = hour();
    let min = minute();
    let sec = second();

    if(lastMinute == undefined){
        lastMinute = min
    }
  
    if(lastMinute != minute()){
      lastMinute = minute();
      console.log(hr + ":" + min + ":" + sec)
    }
  
    background(50);
    
    fill('#DABDD5');
    arc(400, 300, 600, 600, 0, TWO_PI);
    fill('#CBA2C4');
    arc(400, 300, 600, 600, 0, (sec/60) * TWO_PI);
    fill('#B77DAC');
    arc(400, 300, 450, 450, 0, TWO_PI);
    fill('#A05993');
    arc(400, 300, 450, 450, 0, (min/60) * TWO_PI);
    fill('#824877');
    arc(400, 300, 300, 300, 0, TWO_PI);
    fill('#613659');
    arc(400, 300, 300, 300, 0, (hr/24) * TWO_PI); 
    fill('#462741');
    arc(400, 300, 150, 150, 0, TWO_PI);
    
}