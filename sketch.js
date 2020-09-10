var hr = hour();
var min = minute();
var sec = second();
var rotateHr;


function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
 
  //hands
  stroke(255,0,0)
  strokeWeight(7)
  line(width/2,height/2,min,min)

  push();
  //rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(width/2,height/2,min,min)


  arc(50,55,60,60,HALF_PI,PI)
  noFill()
  arc(50,55,50,50,0,HALF_PI)
  arc(50,55,70,70,PI,PI+QUARTER_PI)
  arc(50,55,80,80,PI+QUARTER_PI,TWO_PI)

  drawSprites();
}

function map(){
  let hr = map(mouseX,0,width,0,175)
  let min = map(mouseX,0,width,40,300)
  fill(255,hr,0)
  ellipse(width/2,height/2,min,min)
  scAngle = map(sec,0,60,0,360)
  angleMode(DEGREES)

 rotate(scAngle%12)
/*if(lastFed>=12){
  text("last fed : " + lastFed%12 + "PM",350,30)

}else if(lastFed===0){
  text("last fed : 12AM", 350,30)
}else{
  text("last fed : " + lastFed + "AM",350,30)
}*/
}