var dog, dogImage, happyDog, db, food,foodObj,lastFed,dogNameInput,dogName
var feed, addFood;

function preload()
{
  dogImage=loadImage("images/dogImg.png")
  happyDog==loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);

  db=firebase.database();

  dog=createSprite(400,250,10,10)
  dog.addImage("dog",dogImage)
  dog.scale=0.1
  foodObj=new Food();

  db.ref("food").on("value",function(data){
    food=data.val()
  })
  
  db.ref("lastFed").on("value",function(data){
    lastFed=data.val()
  })

  feed=createButton("feed the dog")
  addFood=createButton("add food")
  feed.position(500,150)
  addFood.position(600,150)
  dogNameInput=createInput("name your dog!");
  dogNameInput.position(670,350)
  addName=createButton("add name")
  addName.position(670,380)
}


function draw() {  
  background(46, 139, 87)

  textSize(15)
  fill(255)
  if(lastFed && feed){
    text("FoodStock: "+ food, 300,50)

    if(lastFed>12){
      text("Last Fed: "+ lastFed%12 +" PM", 50,50)
    }else if(lastFed===0){
      text("Last Fed: "+ 12 +" AM", 50,50)
    }
    else{
      text("Last Fed: "+ lastFed+" AM", 50,50)
    }
  }
  
  addName.mousePressed(function(){
    dogName=dogNameInput.value()
    dogNameInput.hide()
    addName.hide()
  })

  if(dogName!==undefined)
    text("Good boy, "+ dogName +" !!", 330,320)

  feed.mousePressed(function(){
    db.ref("/").update({food:food-1})
    lastFed=hour()
    db.ref("/").update({lastFed:lastFed})
  })

  addFood.mousePressed(function(){
    db.ref("/").update({food:food+1})
    
  })

  foodObj.display()
  drawSprites();
  
}









