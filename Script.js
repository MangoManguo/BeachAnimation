// Beach Scene

var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
// variables
let waterGradient1 = 400;
let waterGradient2 = 300;
let waterGradient3 = 500;
let sunGradient1 = 200;
let sunGradient2 = 300;
let sunGradient3 = 500;
let color1 = 221;
let color2 = 250;
let color3 = 255;
let color4 = 1;
let Wcolor1 = 2;
let Wcolor2 = 154;
let Wcolor3 = 255;
let Scolor1 = 253;
let Scolor2 = 227;
let Scolor3 = 170;
let moon1 = 340;
let moon2 = -100;
let moon3 = 370;
let moon4 = -110;
let star1 = 221;
let star2 = 250;
let star3 = 255;
let star4 = 0;

// game variables
aPressed = false;
dPressed = false;
wPressed = false;
sPressed = false;
spacePressed = false;
let ySpeed = 500;
// Player object
crab = {
  x: cnv.width / 2 - 65, // start @ middle of width
  y: cnv.height - 30, // start @ bottom canvas
  xSpeed: 5,
  ySpeed: 0,
  w: 150,
  h: 100,
  onGround: true,
  gravity: 30,
};
let crabImg = document.getElementById("crab");
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  // console.log(event);
  if (event.code == "KeyA") {
    aPressed = true;
  }
  if (event.code == "KeyD") {
    dPressed = true;
  }
  if (event.code == "KeyW") {
    wPressed = true;
  }
  if (event.code == "KeyS") {
    sPressed = true;
  }
  if (event.code == "Space") {
    spacePressed = true;
  }
}

function keyupHandler(event) {
  if (event.code == "KeyD") {
    dPressed = false;
  }
  if (event.code == "KeyA") {
    aPressed = false;
  }
  // if (event.code == "Space") {
  //   if (player.x > cnv.height) {
  //     spacePressed = false;
  //   }
  // }
}

requestAnimationFrame(draw);
function draw() {
  // Sky
  var sky = ctx.createRadialGradient(
    sunGradient1,
    sunGradient2,
    100,
    150,
    500,
    sunGradient3
  );
  sky.addColorStop(0, `rgb(255, 248, 143)`);
  sky.addColorStop(1, `rgb(${color1}, ${color2}, ${color3})`);

  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, 800, 600);

  // Sand
  ctx.fillStyle = `rgb(${Scolor1}, ${Scolor2}, ${Scolor3})`;
  ctx.fillRect(0, 400, 800, 200);
  ctx.fillStyle = "#dbb671";
  ctx.beginPath();
  ctx.moveTo(180, 520);
  ctx.lineTo(250, 600);
  ctx.lineTo(730, 600);
  ctx.lineTo(640, 520);
  ctx.lineTo(400, 420);
  ctx.fill();

  // Water
  ctx.fillStyle = `rgb(${Wcolor1}, ${Wcolor2}, ${Wcolor3})`;
  ctx.fillRect(0, 300, 800, 100);
  var sky = ctx.createRadialGradient(
    waterGradient1,
    waterGradient2,
    10,
    150,
    waterGradient1,
    waterGradient3
  );
  sky.addColorStop(0, "#fff88f");
  sky.addColorStop(1, `rgb(${Wcolor1}, ${Wcolor2}, ${Wcolor3})`);
  ctx.fillStyle = sky;
  ctx.fillRect(0, 300, 800, 100);

  // Castle

  // Back pillar base
  ctx.fillStyle = "#fad993";
  ctx.fillRect(260, 160, 300, 200);
  ctx.fillRect(250, 115, 320, 25);
  // Back pillar window and lines
  ctx.fillStyle = "#ecc782";
  ctx.strokeStyle = "#ecc782";
  ctx.beginPath();
  ctx.arc(300, 200, 25, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(275, 200, 50, 40);
  ctx.beginPath();
  ctx.arc(375, 200, 25, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(350, 200, 50, 40);
  ctx.beginPath();
  ctx.arc(450, 200, 25, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(425, 200, 50, 40);
  ctx.beginPath();
  ctx.arc(520, 200, 25, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(495, 200, 50, 40);
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(300, 260);
  ctx.lineTo(550, 260);
  ctx.stroke();
  // Back pillar triangle
  ctx.fillStyle = "rgb(255, 229, 180)";
  ctx.beginPath();
  ctx.moveTo(250, 115);
  ctx.lineTo(410, 50);
  ctx.lineTo(570, 115);
  ctx.lineTo(250, 115);
  ctx.fill();
  // Back pillar square indents
  ctx.fillStyle = "#fad993";
  ctx.fillRect(250, 100, 25, 15);
  ctx.fillRect(299, 100, 25, 15);
  ctx.fillRect(348, 100, 25, 15);
  ctx.fillRect(397, 100, 25, 15);
  ctx.fillRect(446, 100, 25, 15);
  ctx.fillRect(495, 100, 25, 15);
  ctx.fillRect(545, 100, 25, 15);
  // Front side
  ctx.fillStyle = "#e7c272";
  ctx.fillRect(250, 300, 300, 200);
  ctx.fillRect(295, 280, 30, 20);
  ctx.fillRect(345, 280, 30, 20);
  ctx.fillRect(396, 280, 30, 20);
  ctx.fillRect(447, 280, 30, 20);
  ctx.fillRect(495, 280, 30, 20);
  // Left and right pillars
  ctx.fillStyle = "#f5cf7e";
  ctx.fillRect(180, 260, 120, 260);
  ctx.fillRect(520, 260, 120, 260);
  ctx.fillRect(160, 190, 160, 40);
  ctx.fillRect(500, 190, 160, 40);
  ctx.fillRect(160, 175, 20, 15);
  ctx.fillRect(195, 175, 20, 15);
  ctx.fillRect(230, 175, 20, 15);
  ctx.fillRect(265, 175, 20, 15);
  ctx.fillRect(300, 175, 20, 15);
  ctx.fillRect(500, 175, 20, 15);
  ctx.fillRect(535, 175, 20, 15);
  ctx.fillRect(570, 175, 20, 15);
  ctx.fillRect(605, 175, 20, 15);
  ctx.fillRect(640, 175, 20, 15);
  // Left right pillar shadows
  ctx.fillStyle = "#e7c272";
  ctx.beginPath();
  ctx.moveTo(180, 260);
  ctx.lineTo(160, 230);
  ctx.lineTo(320, 230);
  ctx.lineTo(300, 260);
  ctx.lineTo(180, 260);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(520, 260);
  ctx.lineTo(500, 230);
  ctx.lineTo(660, 230);
  ctx.lineTo(640, 260);
  ctx.lineTo(520, 260);
  ctx.fill();
  ctx.beginPath();
  // ctx.arc(215, 300, 15, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(200, 300, 30, 40);
  ctx.beginPath();
  // ctx.arc(605, 300, 15, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(590, 300, 30, 40);
  ctx.beginPath();
  // ctx.arc(215, 450, 15, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(200, 450, 30, 40);
  ctx.beginPath();
  // ctx.arc(605, 450, 15, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(590, 450, 30, 40);
  ctx.beginPath();
  // ctx.arc(555, 375, 15, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(540, 375, 30, 40);
  ctx.beginPath();
  // ctx.arc(265, 375, 15, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(250, 375, 30, 40);
  // Back pillar shadow
  ctx.fillStyle = "#ecc782";
  ctx.beginPath();
  ctx.moveTo(260, 160);
  ctx.lineTo(250, 140);
  ctx.lineTo(570, 140);
  ctx.lineTo(560, 160);
  ctx.lineTo(260, 160);
  ctx.fill();
  // Front door
  ctx.fillStyle = "rgb(209, 161, 88)";
  ctx.beginPath();
  ctx.arc(410, 400, 60, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillRect(350, 400, 120, 100);
  ctx.fillStyle = "rgb(172, 132, 72)";
  ctx.beginPath();
  ctx.arc(395, 430, 5, 0, 2 * Math.PI);
  ctx.arc(425, 430, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.strokeStyle = "rgb(172, 132, 72)";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(440, 350);
  ctx.lineTo(440, 500);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(380, 350);
  ctx.lineTo(380, 500);
  ctx.stroke();
  // Moon
  ctx.fillStyle = "rgb(255, 255, 186)";
  ctx.beginPath();
  ctx.arc(moon1, moon2, 50, 0, 2 * Math.PI); // 140, 100
  ctx.fill();
  ctx.fillStyle = "rgb(20, 50, 131)";
  ctx.beginPath();
  ctx.arc(moon3, moon4, 50, 0, 2 * Math.PI); // 170, 90
  ctx.fill();
  // Stars
  ctx.fillStyle = `rgba(${star1}, ${star2}, ${star3}, ${star4})`;
  ctx.beginPath();
  ctx.arc(50, 50, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(30, 30, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(100, 35, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(130, 20, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(20, 100, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(70, 120, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(60, 180, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(80, 150, 2.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(40, 220, 1, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(100, 250, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 200, 1, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(170, 50, 1, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(190, 70, 3.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(150, 120, 2.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(200, 140, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(240, 40, 1, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(260, 50, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(290, 30, 2.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(310, 70, 3.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(350, 20, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(370, 40, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(430, 15, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(450, 50, 1, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(470, 30, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(520, 60, 2.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(530, 65, 1, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(580, 35, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(590, 150, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(600, 100, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(620, 80, 1, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(670, 50, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(670, 270, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(680, 230, 1, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(685, 90, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(690, 60, 1, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(700, 150, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(720, 200, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(740, 70, 3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(750, 130, 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(760, 250, 1, 0, 2 * Math.PI);
  ctx.fill();
  // ctx.drawImage(crab, 335, 450, 150, 100);
  // ctx.fillStyle = document.getElementById("crab");
  ctx.drawImage(crabImg, crab.x, crab.y, crab.w, crab.h);

  if (waterGradient1 >= 65) {
    waterGradient1 -= 2;
  }
  if (waterGradient2 >= 200) {
    waterGradient2 -= 2;
  }
  if (waterGradient3 > 50) {
    waterGradient3 -= 0.9;
  }
  if (sunGradient3 > 200) {
    sunGradient3 -= 0.95;
  }
  if (sunGradient2 < 800) {
    sunGradient2++;
  }
  if (sunGradient1 >= 50) {
    sunGradient1 -= 0.95;
  }
  if (color1 > 20) {
    color1 -= 1;
  }
  if (color2 > 50) {
    color2 -= 1;
  }
  if (color3 > 131) {
    color3 -= 1;
  }
  if (Wcolor1 > 0) {
    Wcolor1 -= 0.5;
  }
  if (Wcolor2 > 33) {
    Wcolor2 -= 0.5;
  }
  if (Wcolor3 > 77) {
    Wcolor3 -= 0.5;
  }
  if (Scolor1 > 219) {
    Scolor1 -= 0.2;
  }
  if (Scolor2 > 182) {
    Scolor2 -= 0.2;
  }
  if (Scolor3 > 113) {
    Scolor3 -= 0.2;
  }
  if (color1 < 50 && moon1 > 140) {
    moon1--;
  }
  if (color1 < 50 && moon2 < 100) {
    moon2++;
  }
  if (color1 < 50 && moon3 > 170) {
    moon3--;
  }
  if (color1 < 50 && moon4 < 90) {
    moon4++;
  }
  if (star1 < 255) {
    star1 += 0.3;
  }
  if (star2 < 255) {
    star2 += 0.3;
  }
  if (color1 < 50 && star4 < 1) {
    star4 += 0.01;
  }

  // player control
  if (aPressed) {
    crab.x -= crab.xSpeed;
  }
  if (dPressed) {
    crab.x += crab.xSpeed;
  }
  if (wPressed && crab.y > 430) {
    crab.ySpeed = 5;
    crab.y -= crab.ySpeed;
    console.log(`crab.y: ${crab.y}`);
    crab.onGround = true;
    ySpeed -= crab.ySpeed;
    console.log(`ySpeed: ${ySpeed}`);
    if ((wPressed = false)) {
      crab.ySpeed = 0;
    }
  }
  if (sPressed && crab.y < 600) {
    crab.ySpeed = 5;
    crab.y += crab.ySpeed;
    console.log(`crab.y: ${crab.y}`);
    crab.onGround = true;
    ySpeed += crab.ySpeed;
    console.log(`ySpeed: ${ySpeed}`);
    if ((sPressed = false)) {
      crab.ySpeed = 0;
    }
  }

  // player blocked at edges
  if (crab.x <= 0) {
    crab.x = 0;
  }
  function jump() {
    if (crab.onGround) {
      crab.y = crab.y - crab.gravity;
      crab.onGround = false;
      crab.gravity -= 5;
    } else {
      // if (crab.y < cnv.height - (cnv.height - ySpeed)) {
      crab.y -= crab.gravity;
      crab.gravity--;
      // }
      if (crab.y + crab.h >= cnv.height) {
        crab.y = cnv.height - crab.h;
        console.log(`crab.y: ${crab.y}`);
        crab.onGround = true;
        crab.gravity = 20;
        spacePressed = false;
      }
    }
  }
  if (crab.x + crab.w >= cnv.width) {
    crab.x = cnv.width - crab.w;
  }
  if (crab.y + crab.h >= cnv.height) {
    crab.y = cnv.height - crab.h;
    crab.onGround = true;
    crab.gravity = 20;
    spacePress = false;
  }

  // player jump
  if (spacePressed) {
    jump();
  }
  requestAnimationFrame(draw);
}
