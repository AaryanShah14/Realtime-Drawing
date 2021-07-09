nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;


function setup(){
video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,500);
canvas.position(560,120);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
background('#b09405');
fill('#120001');
stroke('#004022');
square(nosex,nosey,difference);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);

    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex- " + nosex + " nosey- " + nosey);
    
    leftwristx=results[0].pose.leftWrist.x;
    rightwristx=results[0].pose.rightWrist.x;
    console.log("leftWristx- " + leftwristx +" rightWristx- " + rightwristx);

    difference=leftwristx - rightwristx;
    console.log("difference- " + difference);
}
}