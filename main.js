var drawn_sketch="";
var sketch;
var score=0;
var answer_holder="";
var timer_counter=0;
var timer_check="";
function preload(){
classifier=ml5.imageClassifier('DoodleNet')
}
function setup(){
    canvas=createCanvas(280,280);
        canvas.center();
        background("white");
        canvas.mouseReleased(classifyCanvas);
}   
    function updateCanvas(){
        background("white");
        var random_number= Math.floor((Math.random()*quick_draw_data_set.length)+1);
        console.log(quick_draw_data_set[random_number]);
        sketch=quick_draw_data_set[random_number];
        document.getElementById('sketch_to_be_drawn').innerHTML = 'Sketch to be Drawn: '+ sketch;
    }
    function draw(){
        strokeWeight(10);
        stroke(0);
        if(mouseIsPressed){
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    check_sketch()
        if (drawn_sketch==sketch){
            answer_holder="set";
            score=score+1;
            document.getElementById("score").innerHTML='Score: '+score;
        }
    }
    function classifyCanvas(){
        classifier.classify(canvas, gotResult);
    }

    function gotResult(error, results){
        if (error){
            console.error();
        }
        console.log(results);
        drawn_sketch=results[0].label;
        document.getElementById("label").innerHTML="label"+drawn_sketch;
        document.getElementById("confidence").innerHTML="confidence"+Math.round(result[0].confidence*100)+'%';
        }

    function check_sketch(){
        timer_counter=timer_counter+1;
        document.getElementById('timer').innerHTML= 'Timer: '+timer_counter;
        if(timer_counter>400){
            timer_counter=0;
            timer_check="completed";
        }
        if(timer_check=="completed" || answer_holder=="set"){
            timer_check="";
            answer_holder="";
            updateCanvas()
        }
    }