var cat,mouse,bg;
var catImg,mouseImg,bgImg;
var catImg1,catImg2;

function preload() {
    //load the images here
    catImg=loadImage("images/cat1.png");
    mouseImg=loadImage("images/mouse1.png");
    bgImg=loadImage("images/garden.png");
    catImg1=loadImage("images/cat2.png");
    catImg2=loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    bg=createSprite(200,50,30,30);
    bg.addImage("bg",bgImg);
    

    cat=createSprite(390,300,20,20);
    cat.addImage("cat",catImg);
    cat.scale=0.1;

    mouse=createSprite(200,260,30,30);
    mouse.addImage("mouse",mouseImg);
    mouse.scale=0.1;

    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

   // text(mouseX + ',' + mouseY,10,45 );

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){

        cat.addImage("toRun",catImg2);
        cat.changeImage("toRun");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5;
     cat.addImage("running",catImg1);
     cat.changeImage("running");
  }
}
