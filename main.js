song1 = ""; 
song2 = ""; 
song1_status = ""; 
leftWristX = 0; 
leftWristY = 0; 
scoreleftWrist = 0; 
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
    
    fill("#FF0000"); 
    stroke("#FF0000");  
    song1_status = song1.isPlaying(); 

    if(song1_status == false){
        song1.play(); 
        document.getElementById("song_name").innerHTML = "playing Heart_Of_Glass_(getmp3.pro).mp3"; 
    }

    if(scoreleftWrist > 0.2){
        circle(leftWristX, leftWristY, 20); 
        InNumberleftWristY = Number(leftWristY); 
        remove_decimals = floor(InNumberleftWristY); 
        }


}

function modelLoaded() {
    console.log('PoseNet Is Initialized'); 
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results); 
        scoreleftWrist = results[0].pose.keypoints[9].score; 
        console.log("scoreleftWrist = " + scoreleftWrist); 

        leftWristX = results[0].pose.leftWrist.x; 
        leftWristY = results[0].pose.leftWrist.y; 
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY); 

        rightWristX = results[0].pose.rightWrist.x; 
        rightWristY = results[0].pose.rightWrist.y; 
        console.log("rightWristX = "+ rightWristX + " rightWristY = "+ rightWristY); 
    }
}
