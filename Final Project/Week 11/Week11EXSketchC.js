// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// x and y for b shape
var shapebX = 100;
var shapebY = 100;
var shapebXSpeed;
var shapebYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500,600);
    createCharacter(50,50);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapebXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);
    shapebYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);
}

function draw()
{
    background(211,211,211);
    stroke(0);
    fill(0);

    createBorders(5);
    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)


     //createCharacter(150,350);
    drawCharacter();
    characterMovement();

    // potential enemy
    fill(255,0,0);
    // draw the shape
    circle(shapeX, shapeY, 10);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     // move the shape
     shapeX += shapeXSpeed;
     shapeY += shapeYSpeed;
     // check to see if the shape has gone out of bounds
     if(shapeX > width)
     {
         shapeX = 0;
     }
     if(shapeX < 0)
     {
         shapeX = width;
     }
     if(shapeY > height)
     {
         shapeY = 0;
     }
     if(shapeY < 0)
     {
         shapeY = height;
     }
     // potential b enemy
    fill(0,0,255);
    // draw the shape
    circle(shapebX, shapebY, 50);

     // get a random speed when the it first starts
     shapebXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);
    shapebYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 9)) + 1);
     // move the shape
     shapebX += shapebXSpeed;
     shapebY += shapebYSpeed;
     // check to see if the shape has gone out of bounds
     if(shapebX > width)
     {
         shapebX = 5;
     }
     if(shapebX < 5)
     {
         shapebX = width;
     }
     if(shapebY > height)
     {
         shapebY = 5;
     }
     if(shapebY < 5)
     {
         shapebY = height;
     }
      // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill(80,200,60);
    circle(mouseShapeX, mouseShapeY, 25);


}
function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right upper border
    rect(width-thickness,0,thickness,height-30);
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    //character
    
   // circle(characterX,characterY,25);
}

function drawCharacter()
{
    fill(239,204,0);
    circle(characterX,characterY,25);
}
function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
