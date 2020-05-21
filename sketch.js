var rain,rainGroup;

function setup() {
  createCanvas(600,400);
  rainGroup = createGroup();
  
}

function draw() {
  background(26,222,211);
  spawnRain();
   
  drawSprites();
}
function spawnRain(){
  if (frameCount % 2 === 0){
    var rain = createSprite(350,0,4,100);
    rain.x = Math.round(random(0,600));
    rain.scale = 0.5;
    rain.velocityY = 15;

    rain.shapeColor = color(237,11,109);

    rain.lifetime = 200;

    rainGroup.add(rain);
  }
}



  
