noseX= 0;
noseY= 0;
function preload()
{
  clown_nose = loadImage('https://i.postimg.cc/66RwZND5/clown-nose-png.png');
}
function setUp()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelloded);
    poseNet.on('pose', gotPoses);
}
function modelloded()
{
    console.log('poseNet is Initialized');
}
function gotPoses(results)
{ if(results.label > 0)
{
   console.log(results);
   noseX = results[0].pose.nose.x;
   noseY = results[0].pose.nose.y;
   console.log("nose = x" + noseX);
   console.log("nose = y" + noseY);
}
}
function draw()
{
     fill(255,0,0);
     storke(255,0,0);
     circle(noseX, noseY, 20);
     image( clown_nose, noseX, noseY, 30, 30);
}
 function take_snapshot()
{
    save('myfilterimage.png');
}