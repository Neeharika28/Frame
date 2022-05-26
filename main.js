function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,45,45,220,220);
    fill(255,255,255);
    stroke(0,0,0);
    rect(20,30,10,250);
    fill(255,255,255);
    stroke(0,0,0);
    rect(20,30,260,10);
    fill(255,255,255);
    stroke(0,0,0);
    rect(280,30,10,250);
    fill(255,255,255);
    stroke(0,0,0);
    rect(20,280,270,10);
}
function take_snapshot(){
    save("my_image");
}