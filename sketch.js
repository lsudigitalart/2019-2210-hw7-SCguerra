var redbone;
var time;
var loadTime;
var level;
var bgcolor;
var mappedColor;
var cSize;

function preload(){
    redbone = loadSound ("redbone.mp3");
    neil = loadImage ("willchalmers.jpg")
}

function setup() {
    createCanvas(500, 500)
    if (redbone.isLoaded()){
        loadTime = millis();
        print(loadTime);
        redbone.play();
    }
    background(0);
}

function draw() {
    playTime = millis() - loadTime;
    print(playTime);
    //level = amp.getLevel();
    print(level);

    image(neil, 0, 0);
    
    
  
  image(neil, 0, height / 2, neil.width / 2, neil.height / 2);
    //mappedColor = map(level, 0, 1, 0, 255)
    if (playTime > 6000){
        
    }

    //circle(width / 2, height / 2, height / 2);
}

