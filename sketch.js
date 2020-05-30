var ball,ball_img,paddle,paddle_img,gameState;

function preload() {
ball_img=loadImage("ball.png")
  paddle_img=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
 
  ball=createSprite(200,200);
  ball.addImage("ball_img",ball_img);
  
  paddle=createSprite(380,200);
  paddle.addImage("paddle_img",paddle_img);
  
ball.velocityX=9;
  
  gameState="playing";
  


}

function draw() {
  background(205,153,0);
  
 edges=createEdgeSprites();
  
  
  
  if(gameState==="playing"){
    ball.bounceOff(paddle,Velocity);
  ball.bounceOff(edges[0],Velocity);
  ball.bounceOff(edges[3],Velocity);
  ball.bounceOff(edges[2],Velocity);
  
  if(paddle.y<0||paddle.y>400) {
    paddle.y=200;
  }
  
  if(keyDown("up")){
  
    paddle.y=paddle.y-20;
  }
  
  if(keyDown("down")){
  
   paddle.y=paddle.y+20;
  }
  }
  drawSprites();
  if(ball.isTouching(edges[1])){
    gameState="restart";
}
  if(gameState==="restart"){
    textSize(28);
    fill("Red");
    text("You lose",150,200);
    text("Press R to restart",150,250);
    if(keyDown("R")){
       gameState="playing";
      ball.x=200;
      ball.y=200;
    }
  }
  
}
  function Velocity(){
    ball.velocityY=random(-5,5);
  }

