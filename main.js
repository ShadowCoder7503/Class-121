function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
classifier= ml5.imageClassifier("MobileNet",modelLoaded);
}
function modelLoaded(){
  console.log("Model Loaded");
}
function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotResult);
}
var previousResult = "";
function gotResult(error,results){
if(error){
  console.error(error);
}
else{
  if((results[0].confidence > 0.5) && (previousResult != results[0].label)){
    console.log(results);
    previousResult = results[0].label;
    document.getElementById("object").innerHTML = results[0].label;
    document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
}