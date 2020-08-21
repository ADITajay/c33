var hypnoticBall, database;
var position;
var gamestate=0,playercount=0;
var player ,form,game;
var allplayers;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game=new Game ()
game.getgamestate();
 game.start();


  //var hypnoticBallPosition = database.ref('ball/position');
 // hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("white");
  if(playercount===4){
    game.updateplayercount(1)
  }
  if(gamestate===1){
    game.play();
  }
}

function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
