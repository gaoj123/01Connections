var clearButton=document.getElementById("clear")
var toggleButton=document.getElementById("toggle")

var canvas=document.getElementById("slate");
var ctx=canvas.getContext("2d");

ctx.beginPath();

var circle=function(e){
    mouseX=e.offsetX;
    mouseY=e.offsetY;
    ctx.arc(mouseX,mouseY,10,0,2*Math.PI);
    ctx.fillStyle="blue";
    ctx.fill();
    ctx.stroke();
};

var clear=function(e){
    ctx.clearRect(0,0,500,500);
}

    
canvas.addEventListener("click",circle);
clearButton.addEventListener("click", clear);



