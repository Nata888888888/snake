var c = document.getElementById('gameCanvas');
var ctx = c.getContext("2d");

var canvas_width = 600,
    canvas_height = 600,
    ceil_width = 15,
    ceil_height = 15;
var count_row = canvas_width / ceil_width;
var count_col = canvas_height / ceil_width;
var defFillColor = "black";
var defStrokeColor = "grey";
var defFigure = "rect";
var frameTimer;

var snakeX = Math.floor(Math.random() * (count_row - 2) + 1);
var snakeY = Math.floor(Math.random() * (count_col - 2) + 1);
var direction = "up";
var snakeCoords = [
    [snakeX, snakeY],
    [snakeX, snakeY + 1],
    [snakeX, snakeY + 2]
];

function clearCanvas() {
    ctx.clearRect(0, 0, 600, 600);
}

function drawCell(x, y, figure = defFigure, fillColor = defFillColor, strokeColor = defStrokeColor) {
    if (figure == "rect") {
        ctx.fillStyle = fillColor;
        ctx.fillRect(x * ceil_width + 1, y * ceil_height + 1, ceil_width - 2, ceil_height - 2);
    } else if (figure == "circle") {
        ctx.beginPath();
        ctx.arc(x * ceil_width + ceil_width / 2, y * ceil_width + ceil_width / 2, ceil_height / 2 - 2, 0, 2 * Math.PI);
        ctx.strokeStyle = strokeColor;
        ctx.stroke();
        ctx.fillStyle = fillColor;
        ctx.fill();
    }
}

function grid() {
    for (var i = 1; i < count_col; i++) {
        ctx.moveTo(ceil_width * i, 0);
        ctx.lineTo(ceil_width * i, canvas_width);
        ctx.strokeStyle = "#eaebed";
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    for (var j = 1; j < count_row; j++) {
        ctx.moveTo(0, ceil_height * j);
        ctx.lineTo(canvas_width, ceil_height * j);
        ctx.strokeStyle = "#eaebed";
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}

function buildWall() {
    ctx.fillStyle = "#c95a06";
    for (var i = 0; i < count_row; i++) {
        drawCell(0, i, "rect", "#c95a06");
    }
    for (var i = 0; i < count_row; i++) {
        drawCell(count_col - 1, i, "rect", "#c95a06");
    }
    for (var j = 0; j < count_col; j++) {
        drawCell(j, 0, "rect", "#c95a06");
    }
    for (var j = 0; j < count_col; j++) {
        drawCell(j, count_row - 1, "rect", "#c95a06");
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var apples = [];

function appleFabric() {
    var x = Math.floor(Math.random() * (count_row - 2) + 1);
    var y = Math.floor(Math.random() * (count_col - 2) + 1);
    var colorR = Math.floor((Math.random() * 256));
    var colorG = Math.floor((Math.random() * 256));
    var colorB = Math.floor((Math.random() * 256));

    var apple = {
        x: x,
        y: y,
        color: "rgb(" + colorR + "," + colorG + "," + colorB + ")"
    };

    return apple;
}

function dropApples() {
    var count = randomIntFromInterval(10, 20);
    
    apples = [];
    for (var i = 1; i <= count; i++) {
        var apple = appleFabric();
        apples.push(apple);
    }
}

function drawApples() {
    apples.forEach(function (apple) {
        drawCell(apple.x, apple.y, "circle", apple.color);
    });
}

function snake() {
//    var x = snakeX;
//    var y = snakeY;
    for(var i in snakeCoords) {
        drawCell(snakeCoords[i][0], snakeCoords[i][1], "circle", "green", "red");
    }
    // eyes
//    var xc = x * ceil_width + ceil_width / 2;
//    var yc = y * ceil_height + ceil_height / 2;
//
//    ctx.beginPath();
//    ctx.arc(xc - 3, yc - 2, 2, 0, 2 * Math.PI, false);
//    ctx.arc(xc + 3, yc - 2, 2, 0, 2 * Math.PI, false);
//    ctx.fillStyle = "yellow";
//    ctx.fill();

//    drawCell(snakeCoords[1][0], snakeCoords[1][1], "circle", "green", "red");
//    drawCell(snakeCoords[2][0], snakeCoords[2][1], "circle", "green", "red");
}

////head return in left side
//function snakeL() {
//    var x = snakeX;
//    var y = snakeY;
//
//    drawCell(x, y, "circle", "green", "red");
//    // eyes
//    var xc = x * ceil_width + ceil_width / 2;
//    var yc = y * ceil_height + ceil_height / 2;
////head return in left side
//    ctx.beginPath();
//    ctx.arc(xc - 2, yc - 3, 2, 0, 2 * Math.PI, false);
//    ctx.arc(xc - 2, yc + 3, 2, 0, 2 * Math.PI, false);
//    ctx.fillStyle = "yellow";
//    ctx.fill();
//
//    drawCell(x + 1, y , "circle", "green", "red");
//    drawCell(x + 2, y , "circle", "green", "red");
//}
//
////head return in right side
//
//function snakeR() {
//    var x = snakeX;
//    var y = snakeY;
//
//    drawCell(x, y, "circle", "green", "red");
//    // eyes
//    var xc = x * ceil_width + ceil_width / 2;
//    var yc = y * ceil_height + ceil_height / 2;
//
//    ctx.beginPath();
//    ctx.arc(xc + 2, yc - 3, 2, 0, 2 * Math.PI, false);
//    ctx.arc(xc + 2, yc + 3, 2, 0, 2 * Math.PI, false);
//    ctx.fillStyle = "yellow";
//    ctx.fill();
//
//    drawCell(x - 1, y , "circle", "green", "red");
//    drawCell(x - 2, y , "circle", "green", "red");
//}
//
////return down
//function snakeD() {
//    var x = snakeX;
//    var y = snakeY;
//
//    drawCell(x, y, "circle", "green", "red");
//    // eyes
//    var xc = x * ceil_width + ceil_width / 2;
//    var yc = y * ceil_height + ceil_height / 2;
////head return down
//    ctx.beginPath();
//    ctx.arc(xc - 3, yc + 2, 2, 0, 2 * Math.PI, false);
//    ctx.arc(xc + 3, yc + 2, 2, 0, 2 * Math.PI, false);
//    ctx.fillStyle = "yellow";
//    ctx.fill();
//
//    drawCell(x , y - 1 , "circle", "green", "red");
//    drawCell(x , y - 2 , "circle", "green", "red");
//}

function eateApple(){
    var appleCount = apples.length;
    
    for (var i=0; i < appleCount; i++ ){
            if(snakeCoords[0][0] == apples[i].x && snakeCoords[0][1] == apples[i].y){
                apples.splice(i,1);
                var tail = snakeCoords[snakeCoords.length-1];
                var newTail=[tail[0], tail[1]];
                
                snakeCoords.push(newTail);
                
                var audio = new Audio('est_yabloko.mp3');
                audio.play();
                var pause = setTimeout(function () {
                    audio.pause();
                    delete audio;
                    audio = null;
                }, 2000);
                break;
            }
    }  
}
function renderFrame() {
    clearCanvas();
    grid();
    buildWall();
    drawApples();
    snake();
}

function isGameOver() {
    if (snakeY == 0) {
        return true;
    }
    
    return false;
}

function moveSnake() {
    var n = snakeCoords.length-1;
    snakeCoords[n][0] = snakeCoords[0][0];
    snakeCoords[n][1] = snakeCoords[0][1];
    
    switch(direction) {
        case 'up':
            snakeCoords[n][1]--;
        break;
        case 'left': 
            snakeCoords[n][0]--;
        break;
        case 'down':  
            snakeCoords[n][1]++;
        break;
        case 'right':  
            snakeCoords[n][0]++;
        break;
    }
    
    var last = snakeCoords.pop();
    snakeCoords.unshift(last);
}

function handlePhysics() {
    moveSnake();
    eateApple();
}

function frame() {
    renderFrame();
    handlePhysics();
    if (isGameOver()) {
        clearInterval(frameTimer);
    }
} 

function activateSnake(x, y) {
    dropApples();
    frameTimer = setInterval(frame, 500);
}

window.addEventListener("keydown", getChar);
function getChar(event) {
    if (event.keyCode == 37) {
        direction = "left";
    }

    if (event.keyCode == 38) {
        direction = "up";
    }

    if (event.keyCode == 39) {
        direction = "right";
    }

    if (event.keyCode == 40) {
        direction = "down";
    }
    
    frame();
    clearInterval(frameTimer);
    frameTimer = setInterval(frame, 500);
}

activateSnake();