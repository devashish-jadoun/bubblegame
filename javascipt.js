function bubbleBro(){

    var clutter = "";

for(var i = 1; i <= 162; i++){

    var rn = Math.floor(Math.random() *10);
    clutter += ` <div class="bubble">${rn}</div>`;

}

document.querySelector("#pbtm").innerHTML = clutter;

}


var timer = 60;
function runtimer(){
    var timeInt = setInterval(function(){
        if(timer > 0)
        {
            timer --;
            document.querySelector("#tim").textContent = timer;
        }

        else{
            clearInterval(timeInt);
        }
    } , 1000);
}
var hitrn;
function makeHit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

var score = 0;
function increaseScore(){
     score += 10;
    document.querySelector("#scorebox").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click" , function(details){
    var chamber = Number(details.target.textContent);

    if(chamber === hitrn )
    {
        increaseScore();
        bubbleBro();
        makeHit();
    }
})



makeHit();
runtimer();
bubbleBro();



