class Raindrop{
    constructor(){
        function spawnDrop(){
            if (frameCount % 2 === 0){
              var drop = createSprite(300,0,2,80);
              drop.x = Math.round(random(0,600));
              drop.scale = 0.5;
              drop.velocityY = 15;
              drop.shapeColor = "green";
          
              drop.lifetime = 200;
          
              dropGroup.add(drop);
            }
        }
    }
}

