//Created variables here
var dog, happyDog,dogImg,happyDogImg;
var database;
var stock = 0;
var foodStock;
var addFood,feed;
var milkImg,milk, objFood;
var fedTime, lastFed;
var imgCode = 1;

function preload(){

//loaded images here
  dogImg = loadImage("images/Dog.png");
  happyDogImg = loadImage("images/happydog.png");
  milkImg = loadImage("images/Milk.png");

}

function setup() {
  createCanvas(500, 500);

// called the firebase.database here 
  database = firebase.database();

// created the dog sprite 
  dog = createSprite(443,316,37,37);
  dog.addImage("dogImage",dogImg);
  dog.scale = 0.20;

// created the food object
  objFood = new Food;

// created the feed button
  feed = createButton("Feed the dog");
  feed.position(459,95);

// created the addFood button
  addFood = createButton("Add the Food");
  addFood.position(459,121);
  
}

function draw() {  

  background(46, 139, 87);

// if-else condition for imgCode
  if(imgCode === 2){
    dog.addImage("dogImage",happyDogImg);
  }else{
    dog.addImage("dogImage",dogImg);

  }

// displaying the objFood
  objFood.display();

// mousePressed function for feed & addFood
  feed.mousePressed(feedDog);
  addFood.mousePressed(addFoods);
  imgCode = 1;

  drawSprites();

//added styles and text 
  textSize(20);
  fill("green");
  stroke("red");
 
// displaying the text
  text("Food Remaining : " + stock,136,425)
  if(stock < 3){
    text("Food Stock is getting low. \n Please add the food. ",247,54);
  }
  text("Last Fed Time : " + lastFed,136,468);

}

function feedDog(){

// calling the deductFood()
  objFood.deductFood();

// created a FeedTime node using set() 
  database.ref('FeedTime').set({
    lastFed : hour()
  })

}

function addFoods(){

// calling the updateFoodStock()
  objFood.updateFoodStock(); 
}
