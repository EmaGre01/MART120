function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(224,250,247);
    // triangle
    fill(0,255,0)
    triangle(150, 75, 240, 10, 350, 75);
    // head
    fill(253,228,200);
    circle(250,150,190);
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
    rect(200,245,120,145)
    rect(290,335,10,50);
    // right arm
    fill(10, 24, 120);
    rect(320,275,60,10);
    // left arm
    rect(140,275,60,10);
    // left leg
    rect(220,390,10,50);
    // right leg
    rect(290,390,10,50);
    // text
    fill(120);
    textSize(22);
    text("Emalie Greiner",250,500 );

}