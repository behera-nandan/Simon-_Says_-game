let gameSequence = [];
let userSeque = [];
let game = false;
let level = 0;
let color = ["red", "yellow", "green", "purple"]  // actualy it use add the class
document.addEventListener("keypress", () => {
    if (game == false) {
        console.log("game started");
        game = true;
    }
    levelUp();
})

let GameflassUp = (Btn) => {
    Btn.classList.add("flashUp");
    setTimeout(() => {
        Btn.classList.remove("flashUp");
    }, 300);


}
function userFlassUp(btn) {
    btn.classList.add("UserFlashUp");
    setTimeout(() => {
        btn.classList.remove("UserFlashUp");
    }, 250);

}

let levelUp = () => {
    userSeque = [];
    level++;
    let h2 = document.querySelector("h2");
    h2.innerText = `level-${level}`;

    // flash the button randomly
    let randomin = Math.floor(Math.random() * 4);
    let colo = color[randomin];
    let btn = document.querySelector(`.${colo}`)

    gameSequence.push(colo)
    console.log("gemeseq: ", gameSequence)
    // console.log(colo);

    GameflassUp(btn);
}


function checkSequence(index) {

    if (userSeque[index] == gameSequence[index]) {
        if (userSeque.length === gameSequence.length) {
            levelUp();
        }
    }
    else {
        let h2 = document.querySelector("h2")

        h2.innerHTML = `Game over!your score was <b>${level}</b> <br></br> and press any key to start the game.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";

        }, 150)
        reset();
    }
}
function btnPress() {
    let btn = this;
    userFlassUp(btn);
    let usecolor = btn.getAttribute("id");

    userSeque.push(usecolor)
    console.log("user: ", userSeque)
    checkSequence(userSeque.length - 1);



}


let btn = document.querySelectorAll(".btn");
for (b of btn) {
    b.addEventListener("click", btnPress)
}

function reset() {
    level = 0;
    game = false;
    userSeque = [];
    gameSequence = [];
}
