var player , enemy , playerBullet , enemyBullet
var back 
var enemy2 , bulletImg , enemyBulletImg
var playerImg , enemyImg, playerBImg, enemyBImg
var bgI1 , bgI2 , bgI3 
var gamestate = "stage1"
var score = 0
var flag = 1
var flag2 = 1 
var spaceShipImg
var enemySpaceShip , carImg
var backImg3
var people1 , people2 , people3 , people4 , gameOver , theEnd
var playerLife = 3
var life1 = 1 
var heart1 , heart2 , heart3
var heartImg
var Eheart1 , Eheart2 , Eheart3
var Eheart4 , Eheart5 , Eheart6
var eLife1 = 1 
var eLife2 = 1
var EnemyLife1 = 3
var EnemyLife2 = 3

function preload(){
bgI1 = loadImage("back 1.jpg")
bgI2 = loadImage("background.jpg")
bgI3 = loadImage("Back 3.jpg")
playerImg= loadAnimation("player1.png", "player2.png", "player3.png", "player4.png")
enemyImg = loadImage("enemy.png")
bulletImg = loadImage("image.png")
enemyBulletImg = loadImage("enemyBullet.png")
spaceShipImg = loadAnimation("spaceShip.png")
enemySpaceShip = loadImage("enemySpaceShip.png")
carImg = loadAnimation("car.png")
backImg3 = loadImage("track1.jpg")
petrolPumpImg = loadImage("petrolPump.png")
people1 = loadImage("people1.png")
people2 = loadImage("people5.png")
people3 = loadImage("people6.png")
people4 = loadImage("people4.png")
gameOver = loadAnimation("gameover.png")
theEnd = loadImage("theend.jpg")
heartImg = loadImage("heart.png")
}

function setup(){

createCanvas(500,700)
back = createSprite(250,450)
back.addImage(bgI2)

player = createSprite(200,650)
player.addAnimation("running", playerImg)
player.addAnimation("spaceShip" , spaceShipImg)
player.addAnimation("car", carImg)
player.addAnimation("over", gameOver)
player.addAnimation("end" , theEnd)

enemy = createSprite(70,100)
enemy.addImage(enemyImg)
enemy.scale = 0.2

heart1 = createSprite(200,50)  
heart1.addImage(heartImg)
heart1.scale = 0.4

heart2 = createSprite(250,50)  
heart2.addImage(heartImg)
heart2.scale = 0.4

Eheart1 = createSprite(50,150,30,20)
Eheart1.shapeColor = "green"

Eheart2 = createSprite(80,150,30,20)
Eheart2.shapeColor = "green"

Eheart3 = createSprite(110,150,30,20)
Eheart3.shapeColor = "green"

Eheart4 = createSprite(300,150,30,20)
Eheart4.shapeColor = "green"

Eheart5 = createSprite(330,150,30,20)
Eheart5.shapeColor = "green"

Eheart6 = createSprite(360,150,30,20)
Eheart6.shapeColor = "green"

heart3 = createSprite(300,50)  
heart3.addImage(heartImg)
heart3.scale = 0.4

enemy2 = createSprite(330,100)
enemy2.addImage(enemyImg)
enemy2.scale = 0.2
bulletGroup = new Group()
enemyGroup = new Group()
enemyGroup1 = new Group()
SpaceShipGroup = new Group()
PetrolPumpGroup = new Group()
PeoplesGroup = new Group()

}

function draw(){
 background(0)
 if(gamestate === "stage1"){
 
    player.x =mouseX
    back.velocityY = 5
 if(back.y > 700 ){
     back.y = 20
 }
    if(frameCount % 40 === 0){
 createBullets();
    }
 

  if(playerLife === 3){
      heart1.visible = true;
      heart2.visible = true;
      heart3.visible = true;
  }

  if(playerLife === 2){
     heart1.visible = true; 
     heart2.visible = true;
     heart3.visible = false;
  }

  if(playerLife === 1){
    heart1.visible = true;
    heart2.visible = false;
    heart3.visible = false;
  }

  if(EnemyLife1 === 3 ){
     Eheart1.visible = true;
     Eheart2.visible = true;
     Eheart3.visible = true;
  }

  if(EnemyLife1 === 2){
    Eheart1.visible = true;
    Eheart2.visible = true;
    Eheart3.visible = false;
  }

  if(EnemyLife1 === 1){
    Eheart1.visible = true;
    Eheart2.visible = false;
    Eheart3.visible = false;
  }

  if(EnemyLife2 === 3){
    Eheart4.visible = true;
    Eheart5.visible = true;
    Eheart6.visible = true;
  }

  if(EnemyLife2 === 2){
    Eheart4.visible = true;
    Eheart5.visible = true;
    Eheart6.visible = false;
  }

  if(EnemyLife2 === 1){
    Eheart4.visible = true;
    Eheart5.visible = false;
    Eheart6.visible = false;
  }

   
  
  if(enemyGroup.isTouching(player) || enemyGroup1.isTouching(player)){
      enemyGroup.destroyEach();
      enemyGroup1.destroyEach();
      bulletGroup.destroyEach();
      life1 = 0
      
  } 
  if (life1 === 0 ){
      playerLife = playerLife - 1 
      life1 = 1
  }
  if(playerLife === 0){
    gamestate = "over"
    heart1.visible = false;
      heart2.visible = false;
      heart3.visible = false;
  }

  for(var i =0;i<bulletGroup.length;i++){
  if(bulletGroup.get(i).isTouching(enemy)&& eLife1 === 1){
      score = score+1 ;
      bulletGroup.get(i).destroy();
   //  EnemyLife1  = EnemyLife1 -1 
     eLife1 = 0   
  }
}

  if(EnemyLife1 === 0){
      flag2 = 0
      enemy.destroy()
      enemyGroup.destroyEach()
      Eheart1.destroy()
      Eheart2.destroy()
      Eheart3.destroy()
  }

  for(var i=0;i<bulletGroup.length;i++){
  if(bulletGroup.get(i).isTouching(enemy2) && eLife2 === 1){
   bulletGroup.get(i).destroy();
    score = score+1
    // EnemyLife2 = EnemyLife2 - 1
      eLife2 = 0
  }
  }


  if(eLife1 === 0 && EnemyLife1 > 0){
    eLife1 = 1;
    EnemyLife1 = EnemyLife1 -1;
  }
  if(eLife2 === 0 && EnemyLife2 > 0){
      eLife2 = 1;
      EnemyLife2 = EnemyLife2 - 1;
  }


  if(EnemyLife2 === 0){
      flag2 = 0
      enemy2.destroy()
      enemyGroup1.destroyEach()
      Eheart4.destroy()
      Eheart5.destroy()
      Eheart6.destroy()
  }
  if(flag === 1){
    createEnemyBullet();
    }
    if(flag2 === 1){
    createEnemy1Bullet();
    }

   if(score === 6 ){
       score = 0
        enemy2.destroy();
        enemy.destroy();
       bulletGroup.destroyEach()
       Eheart1.destroy()
       Eheart4.destroy()
       gamestate = "stage2"
   }
  }
  if(gamestate === "stage2"){

    player.x =mouseX
    back.velocityY = 5
 if(back.y > 700 ){
     back.y = 20
 }
      back.addImage(bgI3)

      player.changeAnimation("spaceShip" , spaceShipImg)

      EnemySpaceShips()


      if(keyWentDown("space")){
        createBullets();
      }

      for( var i = 0 ; i < bulletGroup.length ; i++){
          for(var j = 0 ; j < SpaceShipGroup.length ; j++){
              if(bulletGroup.get(i).isTouching(SpaceShipGroup.get(j))){
                  bulletGroup.get(i).destroy()
                  SpaceShipGroup.get(j).destroy()
                  score = score + 1
              }
          }
      }
      
      if(score === 6){
          score = 0 
          enemy.destroy();
          enemy2.destroy();  
          enemyGroup.destroyEach()
          enemyGroup1.destroyEach()
          gamestate = "stage3"
          
           
      }
  }

  if(gamestate === "stage3"){

    back.velocityY = 5
 if(back.y > 700 ){
     back.y = 20
 }
 player.x =mouseX
     back.addImage(backImg3)
     back.scale = 2.2
           
     back.velocityY = 7

     player.changeAnimation("car", carImg)
     player.scale = 0.2

     PetrolPump()

     for( var i = 0 ; i < PetrolPumpGroup.length ; i++){
         if(PetrolPumpGroup.get(i).isTouching(player)){
             PetrolPumpGroup.get(i).destroy()
             score = score + 1
         }
     }

     for(var i = 0 ; i < PeoplesGroup.length ; i++){
         if(PeoplesGroup.get(i).isTouching(player)){
             PeoplesGroup.get(i).destroy()
             score = score - 1
         }
     }

    
   People()

   if(score === -1){
    player.x=250;
    player.y=350; 
    gamestate = "over"
   }


   if(score === 5){
  player.x=250;
  player.y=300;
    gamestate = "end"
   }
  }

 else  if(gamestate === "over"){
    player.changeAnimation("over" , gameOver)
    player.x = 250 
    player.y = 400
    player.scale = 1. 
    enemy.destroy()
    enemy2.destroy() 
    PeoplesGroup.destroyEach()
    PetrolPumpGroup.destroyEach()
    back.velocityY = 0   
   
    
}

 else if(gamestate === "end"){
    back.velocityY = 0
    player.x = 250 
    player.y = 400
    player.scale = 2
    player.changeAnimation("end", theEnd)
    PeoplesGroup.destroyEach()
    PetrolPumpGroup.destroyEach()

}
 if(gamestate!="end" || gamestate!="over"){
   
 }
  
drawSprites();

textSize(20)
fill("black")
text("score = "+ score , 400, 150)

}



function createBullets(){
    
    var bullet = createSprite(player.x,650,10,20)
    bullet.addImage(bulletImg)
    bullet.scale = 0.2
    bullet.velocityY = -5
    bullet.lifetime= 130
    bullet.shapeColor="red"
    bulletGroup.add(bullet)
    
}

function createEnemyBullet(){
    if(frameCount % 40 === 0){
        var eBullet = createSprite(enemy.x,120,10,10)
        eBullet.addImage(enemyBulletImg)
        eBullet.scale = 0.2
        eBullet.velocityY = 10
        var r = Math.round(random(2,6))
        eBullet.velocityX = r
        eBullet.lifetime = 130 
        eBullet.shapeColour = "red"
        enemyGroup.add(eBullet)
    }
}

function createEnemy1Bullet(){
    if(frameCount % 40 === 0){
        var Bullet1 = createSprite(enemy2.x,120,10,10)
        Bullet1.addImage(enemyBulletImg)
        Bullet1.scale = 0.2 
        Bullet1.velocityY = 10
        var ra = Math.round(random(-6,-2))
        Bullet1.velocityX = ra
        Bullet1.lifetime = 130
        Bullet1.shapeColor = "red"
        enemyGroup1.add(Bullet1)
    }
}

function EnemySpaceShips(){
    if(frameCount % 80 === 0){
        var spaceShip = createSprite(0,0)
        var r = Math.round(random(50,450))
        spaceShip.x = r
        spaceShip.addImage(enemySpaceShip)
        spaceShip.scale = 0.2
        spaceShip.velocityY = 10
        spaceShip.lifetime = 130
        spaceShip.shapeColor = "red"
        SpaceShipGroup.add(spaceShip)
    }
}

function PetrolPump(){
    if(frameCount % 200 === 0 ){
        var petrolPump = createSprite(0,0)
        var r =Math.round(random(50 , 450))
        var x = Math.round(random(50,450))
        petrolPump.velocityY = 7
        petrolPump.x = r
        petrolPump.y = x
        petrolPump.addImage(petrolPumpImg)
        petrolPump.scale = 0.5
        petrolPump.shapeColor = "red"
        PetrolPumpGroup.add(petrolPump)
    }
}

function People(){
    if (frameCount % 100 === 0){
        var people = createSprite(0,0);
         
         var r = Math.round(random(50,450))
         var ra = Math.round(random(50,450))
         people.velocityY = 7

          
         people.setCollider("rectangle",0,0,50,130)
        
         people.x = r
         people.y = ra
         
         var rand = Math.round(random(1,4));
         switch(rand) {
           case 1: people.addImage(people1);
                   break;
           case 2: people.addImage(people2);
                   break;
           case 3: people.addImage(people3);
                   break;
           case 4: people.addImage(people4);
                
            
                   
            ;
                   break;
           default: break;
         }
        
                   
         people.scale = 0.5;
         people.lifetime = 300;
        
        
       PeoplesGroup.add(people);
}
}