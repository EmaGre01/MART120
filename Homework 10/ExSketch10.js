var headX = 250;
var headY = 150;
var headDirection = 2;

var legLX = 200;
var legLY = 390;
var legLDirection = 3;

var legRX = 200;
var legRY = 390;
var legRDirection = 2;

var armLX = 140;
var armLY = 275;
var armLDirection = 1;

var armRX = 320;
var armRY = 275;
var armRDirection = 1;

var bodyX = 200;
var bodyY = 245;
var bodyDirectionX = 5;
var bodyDirectionY = 5;

var x = 100;
var y = 100;

var size = 30;
var count = 0;
var sizeDirection = 1;

function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(224,250,247);
    textSize(20);
    text("X: " + mouseX,100,200 );
    text("Y: " + mouseY,100,220 );
    fill(180);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Self Portrait",5,60);

    // triangle
    fill(0,255,0)
    triangle(150, 75, 240, 10, 350, 75);
    // head
    fill(253,228,200);
    circle(headX,headY,190);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
    // eyes
    strokeWeight(10)
    point(220,150)
    point(290,150)
    // nose
    point(255,180)
    // mouth
    fill(500)
    strokeWeight(3)
    ellipse(255,210,20,30)
    // hair
    line(140,200,175,50);
    line(325,50,360,200);
    // body
    fill(12,136,252)
    rect(bodyX, bodyY, 120,145);
     bodyX += bodyDirectionX;
     bodyY += bodyDirectionY;
     if (bodyX >= 400 || bodyX <= 0) {
        bodyDirectionX *= -1;
    }
    if (bodyY >= 599 || bodyY <= 0) {
        bodyDirectionY *= -1;
    }

    // right arm
    fill(10, 24, 120);
    rect(armRX,armRY,60,10);
    armRX+=armRDirection;
    if(armRX >= 418 || armRX <= 82)
    {
        armRDirection *= -1;
    }
    // left arm
    rect(armLX,armLY,60,10);
    armLX+=armLDirection;
    if(armLX >= 418 || armLX <= 82)
    {
        armLDirection *= -1;
    }
    // left leg
    rect(220,legLY,10,50);
    legLY += legLDirection;
    if(legLY <= 0 || legLY >= 450 )
    {
        legLDirection *= -1;
    }
    // right leg
    rect(290,legRY,10,50);
    legRY += legRDirection;
    if(legRY <= 0 || legRY >= 450 )
    {
        legRDirection *= -1;
    }
    // text
    fill(120);
    textSize(22);
    text("Emalie Greiner",250,500 );

}