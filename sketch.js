function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  // 将坐标原点移动到画布中心
  translate(width / 2, height / 2);

  // 绘制渐变色表盘
  drawGradient();

  // 绘制钟表刻度
  drawClockTicks();

  // 获取当前时间
  let h = hour();
  let m = minute();
  let s = second();

  // 计算角度
  let secondAngle = map(s, 0, 60, 0, TWO_PI) - HALF_PI;
  let minuteAngle = map(m + norm(s, 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let hourAngle = map(h % 12 + norm(m, 0, 60), 0, 12, 0, TWO_PI) - HALF_PI;

  // 绘制秒针
  stroke(255, 0, 0);
  strokeWeight(2);
  line(0, 0, cos(secondAngle) * 150, sin(secondAngle) * 150);

  // 绘制分针
  stroke(0);
  strokeWeight(4);
  line(0, 0, cos(minuteAngle) * 120, sin(minuteAngle) * 120);

  // 绘制时针
  strokeWeight(6);
  line(0, 0, cos(hourAngle) * 80, sin(hourAngle) * 80);

  // 绘制表盘中心
  fill(0);
  ellipse(0, 0, 10, 10);
}

function drawGradient() {
  let radius = 200;
  for (let r = radius; r > 0; r--) {
    let inter = map(r, 0, radius, 0, 1);
    let c = lerpColor(color(255, 204, 0), color(0, 102, 204), inter);
    stroke(c); // 使用 stroke 绘制外轮廓
    noFill(); // 确保填充透明
    ellipse(0, 0, r * 2, r * 2);
  }
}

function drawClockTicks() {
  stroke(0);
  strokeWeight(2);
  for (let a = 0; a < 360; a += 30) {
    let angle = radians(a);
    let x1 = cos(angle) * 160;
    let y1 = sin(angle) * 160;
    let x2 = cos(angle) * 180;
    let y2 = sin(angle) * 180;
    line(x1, y1, x2, y2);
  }
}

