leftwrist = 0;
rightwrist = 0;
difference = 0;

nosex = 0;
nosey = 0;

function preload()
{

}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.position(600, 225);

    video = createCapture(VIDEO);
    video.size(350, 350);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Model is Loaded!');
}

function draw()
{
    background('white');
    fill('blue');
    stroke('white');
    square(nosex, nosey, difference);

    document.getElementById('square_sides').innerHTML = "width and height of a square will be - " + difference + "px";
}

function gotPoses(results)
{
  if(results.length>0)
  {
     console.log(results);
  }

  nosex = results[0].pose.nose.x;
  nosey = results[0].pose.nose.y;
  leftwristx = results[0].pose.leftWrist.x;
  rightwristx = results[0].pose.rightWrist.x;
  difference = floor(leftwristx - rightwristx);
}