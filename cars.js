//xPosition of each car (car1, car2, car3, car4(1), car5(2), car6(2))
let xCars = [600, 600, 600, 600, 600, 600];

//yPosition of each car (car1, car2, car3, car4(1), car5(2), car6(2))
let yCars = [40, 96, 150, 210, 265, 318];

//car speed
let carSpeed = [2, 3, 4.2, 5, 3, 2.5];

//car size
let carWidth = 40;
let carHeight = 50;

function showCars() {
    for (let i = 0; i < carsImg.length; i++) {
        //img, xPosition, yPositon, height, width
        image(carsImg[i], xCars[i], yCars[i], carHeight, carWidth);
    }
}

function carMove() {
    for (let i = 0; i < carsImg.length; i++) {
        xCars[i] -= carSpeed[i];
    }
}

function carInitPosition() {
    for (let i = 0; i < carsImg.length; i++) {
        if (carThroughScreen(xCars[i])) {
            xCars[i] = 600;
        }
    }
}

function carThroughScreen(xCars) {
    return xCars < -50;
}