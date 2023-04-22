function setup() {
  createCanvas(400, 400);
  fsButton = createButton("전체화면")
  fsButton.mousePressed(goFullScreen)
}
function draw() {
  background(255)
  fsButton.position(width/2,height/2)
}
function goFullScreen(){
  let fs = fullscreen()
  fullscreen(!fs)
  if(!fs){
    resizeCanvas(displayWidth,displayHeight)
    fsButton.html("되돌아가기")
  }
  else{
    resizeCanvas(600,600)
    fsButton.html('전체화면')
  }
}