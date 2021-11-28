var drawn_sketch;
var sketch;
var score=0;
var answer_holder;
var timer_counter=0;
var timer_check;
var answer_holder;
function preload(){

}
function setup(){
    canvas=createCanvas(280,280);
        canvas.center();
        background("white");
}   
    function updateCanvas(){
        background("white");
        var random_number= Math.floor((Math.random()*quick_draw_data_set.length)+1);
        console.log(quick_draw_data_set[random_number]);
        sketch=quick_draw_data_set[random_number];
        document.getElementById('sketch_to_be_drawn').innerHTML = 'Sketch to be Drawn: '+ sketch;
    }
    function draw(){
    check_sketch()
        if (drawn_sketch==sketch){
            answer_holder=set;
            score=score+1;
            document.getElementById("score").innerHTML='Score: '+score;
        }
    }
    function check_sketch(){
        timer_counter=timer_counter+1;
        document.getElementById('timer').innerHTML= 'Timer: '+timer_counter;
        if(timer_counter>400){
            timer_counter=0;
            timer_check="completed";
        }
        if(timer_check=="complete" || answer_holder=="set"){
            timer_check="";
            answer_holder="";
            updateCanvas()
        }
    }