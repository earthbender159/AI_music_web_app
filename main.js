song1 = ""; 
song2 = ""; 
leftWristX = 0; 
leftWristY = 0; 
rightWristX = 0; 
rightWristY = 0;

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

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses); 
}

function draw(){
    image(video, 0, 0, 600, 500); 
}

function modelLoaded() {
    console.log('PoseNet Is Initialized'); 
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results); 
        leftWristX = results[0].pose.leftWrist.x; 
        leftWristY = results[0].pose.leftWrist.y; 
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY); 

        rightWristX = results[0].pose.rightWrist.x; 
        rightWristY = results[0].pose.rightWrist.y; 
        console.log("rightWristX = "+ rightWristX + " rightWristY = "+ rightWristY); 
    }
}
