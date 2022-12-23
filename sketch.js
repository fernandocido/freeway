function setup() {
  createCanvas(500, 400);
  backgroundSound.loop();
}

function draw() {
  background(roadImg);  
  showActor();
  actorMove();
  showCars();
  carMove();
  carInitPosition();
  checkHit();
  showPoints();
  score();
}