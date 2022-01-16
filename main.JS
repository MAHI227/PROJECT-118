function setup() {
canvas = createCanvas(280,280);
canvas.center();
background("black");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}
function prelod(){
    classifer=ml5.imageClassifier('DoodleNet');
    }
    function draw(){
        strokeWeight(13);
        stroke("white");

        if(mouseIsPressed){
            line(pmouseY,pmouseX,pmouseY,pmouseX);
        }



