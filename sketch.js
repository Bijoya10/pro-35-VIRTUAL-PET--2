var dog, dogImage, happyDog, database, food

function preload()
{
  dogImage=loadImage("images/dogImg.png")
  happyDog==loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);

  db=firebase.database();

  dog=createSprite(250,250,10,10)
  dog.addImage("dog",dogImage)
  dog.scale=0.4
 // dog.addImage("happyDog",happyDog)

  db.ref("food").on("value",readFood)
  
}


function draw() {  
  background(46, 139, 87)
  textSize(15)
  fill(255)
  text("FoodStock: "+ food, 300,50)
  drawSprites();
  //add styles here

}

function keyPressed(){
  if(keyCode=UP_ARROW){
    writeFood()
  }
}

function readFood(data){
  food=data.val()
}
function writeFood(){
  db.ref("/").set({food:food-1})
}




