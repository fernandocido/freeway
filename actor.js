//actor position
let xActor = 100;
let yActor = 366;

function showActor() {
    //cow
    //img, xPosition, yPosition, height, width
    image(actorImg, xActor, yActor, 30, 30);
}

function actorMove() {
    if (keyIsDown(UP_ARROW)){
        yActor -= 3;
    }

    if (keyIsDown(DOWN_ARROW)){
        yActor += 3;
    }
}