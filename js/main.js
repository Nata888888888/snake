var c = document.getElementById('gameCanvas');
var ctx = c.getContext("2d");

ctx.clearRect(0, 0, 600, 600);
ctx.strokeStyle = "green";
ctx.strokeRect(250, 250, 100, 100);

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.arc(300,300,50,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();

ctx.moveTo(250,300);
ctx.lineTo(350,300);
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.stroke();