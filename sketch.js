//Create variables here
var dog, happyDog;
var foodS, foodStock;
var database;
var readStock;
var writeStock;

class preload {
    //load images here

}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,10,10);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {
  background(46, 139, 87); 
  
 if(keyDown(UP_ARROW)){}
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here
        noStroke();
        textSize(21);
        fill("white");
        text("Food Remaining: 20 " + foodS, width-390, 230);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
    if(x<=0){
      x = 0;
    }else{
      x = x-1;
    }

    database.ref('/').update({
      Food:x
    })

}



