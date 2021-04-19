const rabbit = document.querySelector(".rabbit");
const container = document.querySelector(".container");
const score = document.querySelector(".score");
let currentScore = 0;

function moveRabbit(disctance){
    const currentDist = Number(rabbit.style.left.slice(0, -2));
    const newDist = currentDist + disctance;
    rabbit.style.left = newDist + "px";
}

function moveEgg(egg, disctance){
    const currentDist = Number(egg.style.top.slice(0, -2));
    const newDist = currentDist + disctance;
    egg.style.top = newDist + "px";
}

function keyDownHandler(e){
    if(e.key == "ArrowRight" && rabbit.getClientRects()[0].right < container.getClientRects()[0].right - 10){
        moveRabbit(10);
    }
    if(e.key == "ArrowLeft" && rabbit.getClientRects()[0].left > 10){
        moveRabbit(-10);
    }
}

function generateEgg(){
    const egg = document.createElement('img');
    egg.classList.add("egg");
    egg.alt = "egg";
    egg.src = "/img/egg.png";
    container.appendChild(egg);
    const widthOfContainer = container.getClientRects()[0].width;
    const widthOfEgg = egg.getClientRects()[0].width;
    const maxValue = widthOfContainer - widthOfEgg;
    egg.style.left = maxValue * Math.random() + "px";
    egg.style.top = "0px";
    const intervalID = setInterval(function(){   
        if(egg.getClientRects()[0] != undefined){
            if(egg.getClientRects()[0].bottom < container.getClientRects()[0].bottom){
                moveEgg(egg, 4)
            }
            else{
                const overlay = document.querySelector(".overlay");
                const popup = document.querySelector(".pop-up");
                const endScore = document.querySelector(".end-score");
                endScore.innerText = currentScore;
                popup.classList.remove("hide");
                overlay.classList.remove("hide");
                egg.remove();
                clearInterval(intervalID);
            }
        }
        else{
            clearInterval(intervalID);
        }
    }, 40);
};

function checkColistions(){
    const eggs = document.querySelectorAll(".egg");
    eggs.forEach(function(egg){
        if(rabbit.getClientRects()[0].top < egg.getClientRects()[0].bottom){
            if(rabbit.getClientRects()[0].left < egg.getClientRects()[0].left && egg.getClientRects()[0].left < rabbit.getClientRects()[0].right){
                currentScore += 1;
                score.innerText = currentScore;
                egg.remove();
            }
            else if(rabbit.getClientRects()[0].left < egg.getClientRects()[0].right && egg.getClientRects()[0].right < rabbit.getClientRects()[0].right){
                currentScore += 1;
                score.innerText = currentScore;
                egg.remove();
            }
        }
    })
}

window.addEventListener('keydown', keyDownHandler);
setInterval(function(){generateEgg();}, 3000);
setInterval(function(){checkColistions()}, 40);