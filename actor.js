//actor position
let xActor = 100;
let yActor = 366;

let hit = false;

let myPoints = 0;

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
        if (canMove()) {
            yActor +=3;
        }
    }
}

function crash() {
    yActor = 366;
}

function checkHit() {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < carsImg.length; i++) {
        hit = collideRectCircle(xCars[i], yCars[i], carWidth, carHeight, xActor, yActor, 20);
        if (hit) {
            hitSound.play();
            crash();
            if (myPoints > 0) {
                myPoints -= 1;
            }
        }
    }
}

function showPoints() {
    //text("what ypu want to show", xPosition, yPosition)
    textSize(25);
    textAlign(CENTER);
    //Text Color
    fill(255, 240, 60);
    text(myPoints, width / 5, 27);
}

function score() {
    if (yActor < 15) {
        myPoints +=1;
        scoreSound.play();
        crash();
    }    
}

function scoreGreaterThanZero() {
    if (myPoints > 0) {
        myPoints -= 1;
    }
}

function canMove() {
    return yActor < 366;
}