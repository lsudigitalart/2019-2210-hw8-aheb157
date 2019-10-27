
var body1, body2, body3, body4, body5;
var eyes1, eyes2, eyes3, eyes4, eyes5;
var mouth1, mouth2, mouth3, mouth4, mouth5;
var bodys = 1;
var show = 0;
var eyes =1;
var show =0;
var mouths =1;
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
  background(0);

if (show ==1){
    creature (bodyChoice, eyeChoice, mouthChoice);
}
}  

function mousePressed(){
    bodyChoice = int(random(6));
    eyeChoice = int(random(6));
    mouthChoice = int(random(6));
   show = 1;
}

function creature( body, eye, mouth){
    image(bodys[body], width/2, height/2);
    image(eyess[eye], width/2, (height/2) + 100);
    image(mouths[mouth], width/2, (height/2) - 100);
}

