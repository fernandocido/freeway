//xPosition of each car (car1, car2, car3)
let xCars = [600, 600, 600];

//yPosition of each car (car1, car2, car3)
let yCars = [40, 96, 150];

//car speed
let carSpeed = [2, 3, 4.2]

function showCars() {
    for (let i = 0; i < carsImg.length; i = i + 1) {
        //img, xPosition, yPositon, height, width
        image(carsImg[i], xCars[i], yCars[i], 50, 40);
    }
}

function carMove() {
    for (let i = 0; i < carsImg.length; i = i + 1) {
        xCars[i] -= carSpeed[i];
    }
}

function carInitPosition() {
    for (let i = 0; i < carsImg.length; i = i + 1) {
        if (carThroughScreen(xCars[i])) {
            xCars[i] = 600;
        }
    }
}

function carThroughScreen(xCars) {
    return xCars < -50;
}