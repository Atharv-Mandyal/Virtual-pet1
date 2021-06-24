//Create variables here
var dog,happyDog,database,foodS,foodStock,dogimg,happyDogImg

function preload()
{
	//load images here
  dog = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(500,500);
  dog1 = createSprite(200,200,50,50)
  dog1.addImage(dog)
  dog1.scale = 0.2
  
  database = firebase.database()
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46, 139, 87)
  
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
console.log("happyDog")
dog1.addImage(happyDog)
}

drawSprites()
  //add styles here
  textSize(24)
  fill("green")
  strokeWeight(3)
  text("Food remaining : "+foodS,50,50);
}


function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  if(x<=0){ x=0; }
  else{ x=x-1; }
database.ref('/').update({
Food:x
}
)

}


