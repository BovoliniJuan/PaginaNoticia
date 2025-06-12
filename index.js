console.log("llegue");
console.log("llegue");
console.log("llegue");

var body = document.getElementById("body1");

body.addEventListener('mousemove',function(e){
    var xMove = e.offsetX;
    var yMove = e.offsetY

    body.style.backgroundColor = 'rgb('+xMove+','+yMove+','+yMove+')'
})