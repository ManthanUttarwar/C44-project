var form , mainPlayer;
var gameState = 1;
var database;

function setup()
{
  createCanvas(400,500);
  
  form = new greeting();
  mainPlayer = new Player();
  database = firebase.database();
  for(var i =50; i < 500;i = i+50)
  {
    for(var j = 20;j<400;j = j+50)
       {
         stroke("red") 
          strokeWeight(4)
          line(j,i,j,i)
          line(j,i,j,i)
          line(j,i,j,i) 
          line(j,i,j,i)
          line(j,i,j,i)
          line(j,i,j,i)
          line(j,i,j,i)
          line(j,i,j,i)
       }    
  }

}

function draw()
{
       form.display();
}