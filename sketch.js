var bg,bgimage;
var boy,boyimage;
var boss,bossimage,bossgroup
var money,moneyimage,moneygroup
var ground
function preload(){
bgimage=loadImage("background.jpg")
boyimage=loadAnimation("1.png","3.png","4.png","5.png","6.png","7.png","8.png")
bossimage=loadImage("boss.png")
moneyimage=loadImage("money.png")








}


















function setup(){
    createCanvas(800,500);
bg=createSprite(400,250,800,500)
bg.addImage(bgimage)
boy=createSprite(90,370,50,80)
boy.addAnimation("running",boyimage)
bossgroup=new Group()
moneygroup=new Group()
ground=createSprite(400,250,800,10)
ground.visible=false
}

function draw(){
background(180);
 bg.velocityX=-6   
if(bg.x<200){
    bg.x=bg.width/2



}
if(keyDown("UP_ARROW")){
    boy.velocityY=-15

}
boy.velocityY+=0.8
boy.collide(ground)




 cash()
obstacles()
    drawSprites();
}
function obstacles(){
if(frameCount%80===0){
boss=createSprite(550,375,10,10)
boss.addImage(bossimage)
boss.velocityX=-10
boss.scale=0.25


}
  

}
function cash(){
if(frameCount%200===0){
money=createSprite(700,390,10,10)
money.addImage(moneyimage)
money.velocityX=-6
money.scale=0.3

}





}













