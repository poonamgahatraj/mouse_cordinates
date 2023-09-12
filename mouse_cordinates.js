console.log("hello")


window.addEventListener("mousemove",function(event)
{
    var x=event.clientX;
    var y=event.clientY;
    document.getElementById("X").value=x
    document.getElementById("Y").value=y
})

let box=document.getElementById("box");
window.addEventListener("mousemove",function(event){
    box.style.position = "absolute";
    box.style.left = event.clientX+'px';
    box.style.top = event.clientY+'px';

})

