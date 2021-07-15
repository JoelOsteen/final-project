var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11;
var canvas;
var spikes, spikes2,spikes3,spikes4,spikes5, spikes6,spikes7,spikes8,spikes9,spikes10;
var player;
var spikesImage,spikes2Image,spikes3Imagespikes,spikes4Imagespikes,spikes5Image,spikes6Image,spikes7Image;
var spikes11,spikes12,spikes13,spikes14,spikes15,spikes16,spikes17,spikes18,spikes19,spikes20,spikes21,spikes22,spikes23,spikes24,spikes25,spikes26,spikes27,spikes28,spikes29,spikes30,spikes31,spikes32,spikes33,spikes34,spikes35;
var spikes8Image,spikes9Image,spikes10Image,spikes11Image,spikes12Image,spikes13Image,spikes14Image, spikes16Image,spikes17Image, spikes18ImAGE;
var gameState= "play";
var playerRight,playerLeft,playerLeftIdle,playerRightIdle;
var spikesGroup;
var wallGroup;
var flag,flagImage;
var obstacle1Image,obstacle2Image,obstacle3Image;
var button;
var playerHealthCount=100;
var jumpSound, winSound,loseSound;

function preload(){

    spikesImage=loadImage("spikes.png");
    spikes2Image=loadImage("spikes.png");
    spikes3Image=loadImage("spikes.png");
    spikes4Image=loadImage("spikes.png");
    spikes5Image=loadImage("spikes.png");
    spikes6Image=loadImage("spikes.png");
    spikes7Image=loadImage("spikes.png");
    spikes8Image=loadImage("spikes.png");
    spikes9Image=loadImage("spikes.png");
    spikes10Image=loadImage("spikes.png");
    spikes11Image=loadImage("spikes.png");
    spikes12Image=loadImage("spikes.png");
    spikes13Image=loadImage("spikes.png");
    spikes14Image=loadImage("spikes.png");
    spikes15Image= loadImage("spikes.png");
    spikes16Image= loadImage("spikes.png");
    spikes17Image= loadImage("spikes.png");
    spikes18Image= loadImage("spikes.png");
    spikes19Image= loadImage("spikes.png");

    jumpSound= loadSound("jump.wav");
    loseSound= loadSound("lose.wav");
    winSound= loadSound("win.wav");

    flagImage= loadImage("Flag.PNG");

    playerLeft=loadAnimation("playerleft1.png","playerleft2.png","playerleft3.png");
    playerRight= loadAnimation("playerright1.png","playerright2.png", "playerright3.png");
    playerLeftIdle=loadAnimation("playerleft1.png");
    playerRightIdle= loadAnimation("playerright1.png");



    obstacle1Image= loadImage("meteor.png");
    obstacle2Image= loadImage("fridge.png");
    obstacle3Image= loadImage("anchor.png");



}
function setup() {
  canvas=createCanvas(displayWidth,800);

  
  
    spikes= createSprite(468,280,30,30);
    spikes.debug= true;
    spikes.shapeColor="red";
    spikes.addImage("spikes",spikesImage)
    spikes.scale=0.08;
    spikes2= createSprite(500,280,30,30);
    spikes2.shapeColor="red";
    spikes2.addImage("spikes2",spikes2Image)
    spikes2.scale=0.08;
    spikes3= createSprite(532,280,30,30);
    spikes3.shapeColor="red";
    spikes3.addImage("spikes3",spikes3Image)
    spikes3.scale=0.08;
    spikes4= createSprite(669,280,30,30);
    spikes4.addImage("spikes4",spikes4Image);
    spikes4.scale=0.08;
    spikes5=createSprite(710,280,30,30);
    spikes5.addImage("spikes5",spikes5Image);
    spikes5.scale=0.08;
    spikes5.shapeColor="red";
    spikes6= createSprite(752,280,30,30);
    spikes6.addImage("spikes6",spikes6Image);
    spikes6.scale=0.08;
    spikes6.shapeColor="red";
    spikes7= createSprite(918,225,30,30);
    spikes7.addImage("spikes7",spikes7Image);
    spikes7.scale=0.08;


    spikes8= createSprite(954,478,30,30);
    spikes8.addImage("spikes8",spikes8Image);
    spikes8.scale=0.08;
    spikes9= createSprite(922,478,30,30);
    spikes9.addImage("spikes9",spikes9Image);
    spikes9.scale=0.08;
    spikes10= createSprite(890,478,30,30);
    spikes10.addImage("spikes10",spikes10Image);
    spikes10.scale=0.08;
    spikes11= createSprite(759,478,30,30);
    spikes11.addImage("spikes11", spikes11Image);
    spikes11.scale=0.08;
    spikes12= createSprite(727,478,30,30);
    spikes12.addImage("spikes12",spikes12Image);
    spikes12.scale=0.08;
    spikes13= createSprite(695,478,30,30);
    spikes13.addImage("spikes13",spikes13Image);
    spikes13.scale=0.08;
    spikes14= createSprite(596,478,30,30);
    spikes14.addImage("spikes14",spikes14Image);
    spikes14.scale=0.08;
    spikes15= createSprite(564,478,30,30);
    spikes15.addImage("spikes15",spikes15Image);
    spikes15.scale=0.08;
    spikes16= createSprite(532,478,30,30);
    spikes16.addImage("spikes16",spikes16Image);
    spikes16.scale=0.08;
    spikes17= createSprite(433,478,30,30);
    spikes17.addImage("spikes17",spikes17Image);
    spikes17.scale=0.08;
    spikes18= createSprite(401,478,30,30);
    spikes18.addImage("spikes18",spikes18Image);
    spikes18.scale=0.08;
    spikes19= createSprite(369,478,30,30);
    spikes19.addImage("spikes19",spikes19Image);
    spikes19.scale=0.08;
    spikes20= createSprite(266,478,30,30);
    spikes20.addImage("spikes20",spikes19Image);
    spikes20.scale= 0.08;
    spikes21= createSprite(238,478,30,30);
    spikes21.addImage("spikes21",spikes19Image);
    spikes21.scale=0.08;
    spikes22= createSprite(210,478,30,30);
    spikes22.addImage("spikes22",spikes19Image);
    spikes22.scale=0.08;
    

    spikes23= createSprite(1258,675,30,30);
    spikes23.addImage("spikes23",spikes19Image);
    spikes23.scale=0.08;
    spikes24= createSprite(1300,675,30,30);
    spikes24.addImage("spikes24",spikes19Image);
    spikes24.scale=0.08;
    spikes25= createSprite(1216,675,30,30);
    spikes25.addImage("spikes25",spikes19Image);
    spikes25.scale=0.08;
    spikes26= createSprite(1125,675,30,30);
    spikes26.addImage("spikes26",spikes19Image);
    spikes26.scale=0.08;
    spikes27= createSprite(1083,675,30,30);
    spikes27.addImage("spikes27",spikes19Image);
    spikes27.scale=0.08;
    spikes28= createSprite(1041,675,30,30);
    spikes28.addImage("spikes28",spikes19Image);
    spikes28.scale=0.08;
    spikes29= createSprite(911,675,30,30);
    spikes29.addImage("spikes29",spikes19Image);
    spikes29.scale=0.08;
    spikes30= createSprite(876,675,30,30);
    spikes30.addImage("spikes30",spikes19Image);
    spikes30.scale=0.08;
    spikes31= createSprite(841,675,30,30);
    spikes31.addImage("spikes31",spikes19Image);
    spikes31.scale=0.08;
    spikes32= createSprite(750,675,30,30);
    spikes32.addImage("spikes32",spikes19Image);
    spikes32.scale=0.08;
    spikes32= createSprite(710.675,30,30);
    spikes32.addImage("spikes32",spikes19Image);
    spikes32.scale=0.08;
    spikes33= createSprite(670,675,30,30);
    spikes33.addImage("spikes32",spikes19Image);
    spikes33.scale=0.08;
    spikes34= createSprite(510,675,30,30);
    spikes34.addImage("spikes34",spikes19Image);
    spikes34.scale=0.08;
    spikes35= createSprite(345,675,30,30);
    spikes35.addImage("spikes35",spikes19Image);
    spikes35.scale=0.08;


    flag= createSprite(118,670,30,30);
    flag.addImage("flag",flagImage)
    flag.scale=0.10;



    spikesGroup= new Group();
    spikesGroup.add(spikes);
    spikesGroup.add(spikes2);
    spikesGroup.add(spikes3);
    spikesGroup.add(spikes4);
    spikesGroup.add(spikes5);
    spikesGroup.add(spikes6);
    spikesGroup.add(spikes7);
    spikesGroup.add(spikes8);
    spikesGroup.add(spikes9);
    spikesGroup.add(spikes10);
    spikesGroup.add(spikes11);
    spikesGroup.add(spikes12);
    spikesGroup.add(spikes13);
    spikesGroup.add(spikes14);
    spikesGroup.add(spikes15);
    spikesGroup.add(spikes16);
    spikesGroup.add(spikes17);
    spikesGroup.add(spikes18);
    spikesGroup.add(spikes19);
    spikesGroup.add(spikes20);
    spikesGroup.add(spikes21);
    spikesGroup.add(spikes22);
    spikesGroup.add(spikes23);
    spikesGroup.add(spikes24);
    spikesGroup.add(spikes25);
    spikesGroup.add(spikes26);
    spikesGroup.add(spikes27);
    spikesGroup.add(spikes28);
    spikesGroup.add(spikes29);
    spikesGroup.add(spikes30);
    spikesGroup.add(spikes31);
    spikesGroup.add(spikes32);
    spikesGroup.add(spikes33);
    spikesGroup.add(spikes34);
    spikesGroup.add(spikes35);

    obstaclesGroup= new Group();
    

    player= createSprite(130,122,25,25);
    player.addAnimation("playerrightidle",playerRightIdle);
    player.addAnimation("playerleftidle",playerLeftIdle);
    player.addAnimation("playerleft",playerLeft);
    player.addAnimation("playerright",playerRight);

    player.shapeColor="blue";

    player.debug=true;
    player.setCollider("rectangle",0,0,45,45);
    

 
  wall1= createSprite(150, 150, 350, 5);
     wall1.shapeColor="white";
  wall2= createSprite(323,225,5,150);
     wall2.shapeColor="white";
  wall3= createSprite(595.5,300,550,5);
      wall3.shapeColor="white";
  wall4= createSprite(873,277.5,5,50);
  wall4.setCollider("rectangle", 0,0,20,75);
  wall4.debug=true;
      wall4.shapeColor="white";

  invisibleWall4= createSprite(875,277.5,5,50);
  invisibleWall4.visible=false;
  wall5= createSprite(920.5,250,100,5);
      wall5.shapeColor="white";
  wall6= createSprite(973,177.5,5,150);
      wall6.setCollider("rectangle", 0,0,10,200);
      wall6.debug=true;
      wall6.shapeColor="white";
  invisibleWall6= createSprite(975,177.5,5,150);
  invisibleWall6.visible=false;

  wall7= createSprite(1120.5,100,300,5);
      wall7.shapeColor="white";
  wall8= createSprite(1273,202.5,5,210);
      wall8.shapeColor="white";
  wall9= createSprite(620,500,1250,5);
      wall9.shapeColor="white";
  wall10= createSprite(620,700,1700,5);
      wall10.shapeColor="white";
  wall11= createSprite(1246,500,400,5);
      wall11.shapeColor="white";
      
      wallGroup= new Group();
      wallGroup.add(wall1);
      wallGroup.add(wall2);
      wallGroup.add(wall3);
      wallGroup.add(wall4);
      wallGroup.add(wall5);
      wallGroup.add(wall6);
      wallGroup.add(wall7);
      wallGroup.add(wall8);
      wallGroup.add(wall9);
      wallGroup.add(wall10);
      wallGroup.add(wall11);
      

    
    button = createSprite(88,482,30,30);
    button.shapeColor=(rgb(250,128,114));
}

function draw() {
  background(45.82, 79.92, 143.51);  
  edges= createEdgeSprites();



  player.collide(wall1);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(invisibleWall4);
  player.collide(wall5);
  player.collide(invisibleWall6);
  player.collide(wall7);
  player.collide(wall8);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);
  

  if(player.isTouching(spikesGroup)){
     playerHealthCount=playerHealthCount-1;
     //add sound effect
     loseSound.play();
      
  }


 


 drawSprites();
  if(player.isTouching(flag)){
     // player.clear();
     // spikes.clear();
      textSize(30);
      fill("black");
      text("Game completed", 400,400);
      winSound.play();

      console.log("gameOver");
  }

  if(player.isTouching(button)){
    wall11.destroy();
}


    if(playerHealthCount===1){
        //add the sound effect
        gameState="end";
    }
    else{
        barStatus("player health", 400,50,playerHealthCount,"orange");
    }





  if(gameState==="end"){
      background(0,0,0);
      textSize(50);
      text("game over", 400,400);

  }

  

//console.log(World.mouseX+"-"+World.mouseY);
    destroyObstacles();
    spawnObstacles();
    playerGravity();
    playerMovement();
 
}

function playerMovement(){

if(gameState==="play"){
    if(keyDown("RIGHT_ARROW")){
        player.velocityX=20;
        player.velocityY=0
        player.changeAnimation("playerright",playerRight);
    } 
    if(keyWentUp("RIGHT_ARROW")){
        player.velocityX=0;
        player.velocityY=0;
        player.changeAnimation("playerrightidle",playerRightIdle);
    }
   

    if(keyDown("LEFT_ARROW")){
        player.velocityX=-20;
        player.velocityY=0;
        player.changeAnimation("playerleft",playerLeft);
    }

    if(keyWentUp("LEFT_ARROW")){
        player.velocityX=0;
        player.velocityY=0;
        player.changeAnimation("playerleftidle",playerLeftIdle);
    }

    if(keyDown("UP_ARROW")&& (player.isTouching(wall6)|| player.isTouching(wall4))){
        player.velocityX=0;
        player.velocityY=-3;
    }

    if(keyWentUp("UP_ARROW")){
        player.velocityX=0;
        player.velocityY=0;
    }

    if(keyDown("DOWN_ARROW")){
        player.velocityX=0;
        player.velocityY=3;
    }

    if(keyWentUp("DOWN_ARROW")){
        player.velocityX=0;
        player.velocityY=0;
    }

    if (keyDown("SPACE")) {
        player.velocityY = -10;
        player.velocityX=0;

        jumpSound.play();
      }
}
}

function playerGravity(){
    player.velocityY=player.velocityY+0.8; 
}

function spawnObstacles() {
    var randX = Math.round(random(200, 800));
    //var randY = Math.round(random(200,800));
     var rand= Math.round(random(1,2));
     if (frameCount % 50 === 0) {
        if(rand===1){
            //top to bottom
            var obstacle = createSprite(randX, 0, 10, 40);
            obstacle.velocityY = 8;
            obstacle.scale = 0.08;
            obstacle.lifetime = 300;

            var randomObstacle = Math.round(random(1, 3));
            switch (randomObstacle) {
            case 1:
                obstacle.addImage(obstacle1Image);
                break;
            case 2:
                obstacle.addImage(obstacle2Image);
                break;
            case 3:
                obstacle.addImage(obstacle3Image);
                break;
            default:
                break;
            }

            obstaclesGroup.add(obstacle);

        }

        else{
            //bottom to top
            var obstacle = createSprite(randX, 800, 10, 40);
            obstacle.velocityY = -8;
            obstacle.scale = 0.08;
            obstacle.lifetime = 300;

            var randomObstacle = Math.round(random(1, 3));
            switch (randomObstacle) {
            case 1:
                obstacle.addImage(obstacle1Image);
                break;
            case 2:
                obstacle.addImage(obstacle2Image);
                break;
            case 3:
                obstacle.addImage(obstacle3Image);
                break;
            default:
                break;
            }

            obstaclesGroup.add(obstacle);

        }


        
      

      
  
     }

     
     
      
  
      //assign scale and lifetime to the obstacle           
      
      //add each obstacle to the group
      
    }
  
    function barStatus(type,x,y,width,color){
        stroke(color);
        fill(color);
        textSize(15);
        text(type,x,y-10);
        fill("white");
        rect(x,y,100,20);
        fill(color);
        rect(x,y,width,20);
    }

    function destroyObstacles(){
        for(var i=0; i<obstaclesGroup.length; i=i+1){
            if(player.isTouching(obstaclesGroup.get(i))){
                playerHealthCount=playerHealthCount-15;
                console.log("obstacle has hit the player");
                obstaclesGroup.get(i).lifetime=0;
                obstaclesGroup.remove(obstaclesGroup.get(i))
            }
        }

        
    }