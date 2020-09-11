var puzzle1,puzzle2,puzzle3,puzzle4,puzzle5,puzzle6,puzzle7,puzzle8;
var puzzle1Img,puzzle2Img,puzzle3Img,puzzle4Img;
var puzzle5Img,puzzle6Img,puzzle7Img,puzzle8Img;
var edge1,edge2,edge3,edge4;
var movedPuzzle1 = false;
var movedPuzzle2 = false;
var movedPuzzle3 = false;
var movedPuzzle4 = false;

var shiftPuzzle1 = false;
var shiftPuzzle2 = false;
var shiftPuzzle3 = false;
var shiftPuzzle4 = false;

function preload(){
  puzzle1Img = loadImage("stories/sleepingBeauty/SBscene1.jpg")
  puzzle2Img = loadImage("stories/sleepingBeauty/SBscene2.jpg")
  puzzle3Img = loadImage("stories/sleepingBeauty/SBscene3.jpg")
  puzzle4Img = loadImage("stories/sleepingBeauty/SBscene4.jpg")
  puzzle5Img = loadImage("stories/sleepingBeauty/SBscene5.jpg")
  puzzle6Img = loadImage("stories/sleepingBeauty/SBscene6.jpg")
  puzzle7Img = loadImage("stories/sleepingBeauty/SBscene7.jpg")
 // puzzleImg = loadImage("stories/sleepingBeauty/SBscene(2).jpg")
}
function setup() {
  createCanvas(1200,700);
  puzzle1 = createSprite(100, 200, 50, 50);
  puzzle1.addImage("sb1",puzzle1Img)
  puzzle2 = createSprite(250, 200, 50, 50);
  puzzle2.addImage("sb2",puzzle2Img)
  puzzle3 = createSprite(400, 200, 50, 50);
  puzzle3.addImage("sb3",puzzle3Img)
  puzzle4 = createSprite(550, 200, 50, 50);
  puzzle4.addImage("sb4",puzzle4Img)
  puzzle5 = createSprite(175, 350, 50, 50);
  puzzle5.addImage("sb5",puzzle5Img)
  puzzle6 = createSprite(325, 350, 50, 50);
  puzzle6.addImage("sb6",puzzle6Img)
  puzzle7 = createSprite(500, 350, 50, 50);
  puzzle7.addImage("sb7",puzzle7Img)

edge1 = createSprite(850,100,400,10)
edge1.shapeColor = "black"
edge2 = createSprite(850,400,400,10)
edge2.shapeColor = "black"
edge3 = createSprite(650,250,10,300)
edge3.shapeColor= "black"
edge4 = createSprite(1050,250,10,300)
edge4.shapeColor = "black"
  
}

function draw() {
  background("pink");  
  if(shiftPuzzle1){
    puzzle1.x = mouseX
    puzzle1.y = mouseY
  }
  if(shiftPuzzle2){
    puzzle2.x = mouseX
    puzzle2.y = mouseY
  }
  if(shiftPuzzle3){
    puzzle3.x = mouseX
    puzzle3.y = mouseY
  }
  if(shiftPuzzle4){
    puzzle4.x = mouseX
    puzzle4.y = mouseY
    console.log("4")
  }

  drawSprites();
}

function mouseDragged(){

 
  if(!movedPuzzle1 && mouseX>=75 && mouseX<=125 && mouseY>=175 && mouseY<=225){
console.log("puzzle1")
shiftPuzzle1 = true
movedPuzzle1 = true
  }

 else if(!movedPuzzle2 && mouseX>=225 && mouseX<=275 && mouseY>=175 && mouseY<=225){
    console.log("puzzle2") 
    shiftPuzzle2 = true
    movedPuzzle2 = true
      }

  else if(!movedPuzzle3 && mouseX>=405 && mouseX<=425 && mouseY>=175 && mouseY<=225){
    console.log("puzzle3")
    shiftPuzzle3 = true
    movedPuzzle3 = true
          }    
  else if(!movedPuzzle4 && mouseX>=525 && mouseX<=575 && mouseY>=175 && mouseY<=225){
    console.log("puzzle4")
    shiftPuzzle4 = true
    movedPuzzle4 = true
              }     
}
function mouseReleased(){
shiftPuzzle1 = false
shiftPuzzle2 = false
shiftPuzzle3 = false
shiftPuzzle4 = false
if(puzzle1.x<=650 || puzzle1.x>=1050 || puzzle1.y<=100 || puzzle1.y>=400){
puzzle1.x = 100
puzzle1.y = 200
movedPuzzle1 = false
}
if(puzzle2.x<=650 || puzzle2.x>=1050 || puzzle2.y<=100 || puzzle2.y>=400){
  puzzle2.x = 250
  puzzle2.y = 200
  movedPuzzle2 = false
  }
if(puzzle3.x<=650 || puzzle3.x>=1050 || puzzle3.y<=100 || puzzle3.y>=400){
  puzzle3.x = 400
  puzzle3.y = 200
  movedPuzzle3 = false
    }
if(puzzle4.x<=650 || puzzle4.x>=1050 || puzzle4.y<=100 || puzzle4.y>=400){
    puzzle4.x = 550
    puzzle4.y = 200
    movedPuzzle4 = false
      }
//console.log(puzzle2.x)
//console.log(puzzle2.y)
}