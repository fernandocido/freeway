function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(roadImg);  
  showActor();
  actorMove();
  showCars();
  carMove();
  carInitPosition();
}