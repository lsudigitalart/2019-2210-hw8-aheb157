
var body1, body2, body3, body4, body5;
var eyes1, eyes2, eyes3, eyes4, eyes5;
var mouth1, mouth2, mouth3, mouth4, mouth5;

var show = 0;
var bodyChoice;
var eyeChoice;
var mouthChoice;

function preload(){
    body1 = loadImage ("body/body1.png");
    body2 = loadImage ("body/body2.png");
    body3 = loadImage ("body/body3.png");
    body4 = loadImage ("body/body4.png");
    body5 = loadImage ("body/body5.png");

    eyes1 = loadImage ("eyes/eyes1.png");
    eyes2 = loadImage ("eyes/eyes2.png");
    eyes3 = loadImage ("eyes/eyes3.png");
    eyes4 = loadImage ("eyes/eyes4.png");
    eyes5 = loadImage ("eyes/eyes6.png");

    mouth1 = loadImage ("mouth/mouth1.png");
    mouth2 = loadImage ("mouth/mouth2.png");
    mouth3 = loadImage ("mouth/mouth3.png");
    mouth4 = loadImage ("mouth/mouth4.png");
    mouth5 = loadImage ("mouth/mouth5.png");
}


function setup(){
createCanvas(1000,800);
imageMode(CENTER);
}

function draw(){
  background(100);
if (show == 1){
    creature (bodyChoice, eyeChoice, mouthChoice);
}
}  

function mouseReleased(){
    bodyChoice = int(random(5));
    eyeChoice = int(random(5));
    mouthChoice = int(random(5));
   show = 1;
}

function creature(body, eye, mouth){
    print (body, eye, mouth);
    
    if(body == 0 ){
       
        image (body1, width/2, height/2); 
    }
    if(body == 1 ){
        
        image (body2, width/2, height/2);  
    }
    if(body == 2 ){
       
        image (body3, width/2, height/2);  
    }
    if(body == 3 ){
        
        image (body4, width/2, height/2);  
    }
    if(body == 4 ){
       
        image (body5, width/2, height/2);  
    }
    if(eye == 0 ){
        image (eyes1, width/2, height/2);  
    }
    if(eye == 1 ){
        image (eyes2, width/2, height/2);  
    }
    if(eye == 2 ){
        image (eyes3, width/2, height/2);  
    }
    if(eye == 3 ){
        image (eyes4, width/2, height/2);  
    }
    if(eye == 4 ){
        image (eyes5, width/2, height/2);  
}
if(mouth == 0 ){
    image (mouth1, width/2, height/2);  
}
if(mouth == 1 ){
    image (mouth2, width/2, height/2);  
}
if(mouth == 2 ){
    image (mouth3, width/2, (height/2)+20);  
}
if(mouth == 3 ){
    image (mouth4, width/2, (height/2) -20);  
}
if(mouth == 4) {
    image (mouth5, width/2, (height/2) + 20);  
}
}