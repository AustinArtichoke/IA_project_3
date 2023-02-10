//setting variables for y position and speed
var y = 5;  
var speed = 8;  

function setup() {
  //canvas size is set as a multiple of rgb value range 
  //setting tan color for background 
  let tan = color(245, 243, 230);
  createCanvas(893, 893);
  background(tan);
}

function draw() {
  //set color and size of stroke
  let tan = color(245, 243, 230);
  stroke(tan);
  strokeWeight(2);
  //RGB fill color adjusts based on coordinate position across the canvas y=R value, x=G value
  //B value is randomized for some slight variation in color
  fill( y/4, mouseX/4, random(100, 150));
  
  //function allows use of any mouse press to turn circle dark gray while held
  if (mouseIsPressed === true) {
    fill(50, 50, 50);
  } 
  
  //gives the circle the y starting point the same as the variable y and x-coordinate of the mouse position. 
  //Size of circle changes in relation to y position.
  circle(mouseX, y, (y+10)*.1);
 
  //gives the illusion that the ball bounces of the y-axis edges (top and bottom)
  //applies a conditional statement that if the y value is greater than 725 or the y value is less than 0, we speed is multiplied by -1 and assigned the new value
  if (y > 850 || y < 0) {
    speed = speed * -1;
  } 
  
  //clears drawings if any key is pressed
  if (keyIsPressed === true) {
    clear();
    background(tan);
  }
   
  // animates the ball to move on the y-axis
  // adds the speed value and the value of y and assigns the new value to y to create a new position for y starting point, which then gets fed back through
  y = y + speed;    
 
  
}