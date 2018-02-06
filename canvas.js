var clearButton=document.getElementById("clear")
var canvas=document.getElementById("slate");
var ctx=canvas.getContext("2d");

var started=false;

var circle=function(e){
    mouseX=e.offsetX;
    mouseY=e.offsetY;
    started=true;
    ctx.beginPath();
    ctx.arc(mouseX,mouseY,10,0,2*Math.PI);
    ctx.fillStyle="blue";
    ctx.fill();
    ctx.stroke();
    ctx.moveTo(mouseX,mouseY);
};

var clear=function(e){
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
}

var draw=function(e){
    if (started){
	mouseX=e.offsetX;
	mouseY=e.offsetY;
	ctx.lineTo(mouseX,mouseY);
	ctx.stroke();
	circle(e);
    }
    else{
	circle(e);
    }
};
    
canvas.addEventListener("click",draw);
clearButton.addEventListener("click", clear);



