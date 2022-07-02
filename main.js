song1 = ""; 
song2 = ""; 

function preload(){
    song1 = loadSound("Heart_Of_Glass_(getmp3.pro).mp3"); 
    song2 = loadSound("Sugar_(getmp3.pro).mp3"); 
}

function play(){
    song1.play(); 
    song2.play(); 
}

function setup(){
    canvas = createCanvas(600, 500); 
    canvas.center(); 

    video = createCapture(VIDEO); 
    video.hide(); 
}

function draw(){
    image(video, 0, 0, 600, 500); 
}
