function setup(){
    camera = createCapture (VIDEO);
    camera.size (550,500);
    
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(camera,modelLoaded);
    poseNet.on('pose',gotPoses);
    
    }
    
    function modelLoaded(){
     console.log ("O modelo PoseNet foi inicializado");
    }
    function gotPoses(results){
    if (results.lenght>0) {
    console.log (results);
    }
    }