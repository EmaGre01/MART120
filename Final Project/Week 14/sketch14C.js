// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500,600);
    // get a random speed when the it first starts
    for (var i = 0; i < 5; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }
    createCharacter(50,50);
    
}

function draw()
{
    createBackground();

    createBorders(5);
    createExit();

    drawCharacter();
    characterMovement();

    // potential enemy
    for (var i = 0; i < shapeXs.length; i++) {
        // Set a random color
        fill(setRandomColor());
    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);




        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }

    Winnertext();
    
    mouseEnemy();}
    
}
function createBackground()
{
    background(211,211,211);
    stroke(0);
    fill(0);
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
function createExit()
{
    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)
}
function mouseEnemy()
{
    // create the shape based on the mouse click
    fill(80,200,60);
    circle(mouseShapeX, mouseShapeY, 25);
}
function Winnertext()
{
       // check to see if the character has left the exit
       if(characterX > width && characterY > width-50)
       {
           fill(0);
           stroke(5);
           textSize(26);
           text("You Win!", width/2-50, height/2-50);
       }
}
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
function setRandomColor()
{    // Generate random values for RGB
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Return the random color as a string
    return color(r, g, b);
}
