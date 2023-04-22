function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let h = hour()
  let m = minute()
  let s = second()
  if(h<10) a='0'
  else a=''
  if(m<10) b='0'
  else b=''
  if(s<10) c='0'
  else c=''
  strokeWeight(5)
  fill(200,200,200)
  ellipse(200,200,220,220)
  strokeWeight(0)
  fill(0,0,230)
  myrect2(width/2,height/2,100,5,s*6-90)
  fill(255,0,0)
  myrect2(width/2,height/2,70,5,(m+s*(1/60))*6-90)
  fill(0,255,0)
  myrect2(width/2,height/2,50,5,(h+m*(1/60)+s*(1/3600))*30-90)
  fill(0,0,0)
  ellipse(width/2,height/2,7,7)
  textSize(60)
  textStyle(BOLD)
  text(a+h+':'+b+m+':'+c+s,105,320,1000,1000)
}
function myrect2(x,y,w,h,d) {
  push()
  translate(x,y)
  rotate(radians(d))
  rect(0,-h/2,w,h)
  pop()
}