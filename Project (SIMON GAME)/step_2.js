       // step1 -->> keypress -> gamestart

       //step2 -->> btnflash and level is updated

       //step3 -->> btn press -> we check user == game
            // -->> btn press -> we check user == same the levelup(or level2) else gameover

let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


                //STEP-1
// isse game ek bar hi start hoga either we press multiple times key
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
  }

  levelUp(); // game start ho chuka hai isiliye level up or level ko increment karna hai
});

                //STEP-2
// random btn flash karega aur level update ho jayega

function btnFlash(btn){

    btn.classList.add("flash");
    setTimeout(function (){  // btn flash hone ke bad instant remove ho jyega
        btn.classList.remove("flash");
    }, 250);

}

function levelUp() {
  level++;
  h2.innerText = `Level ${level}`;

    //random index choose karenge 0 se lekar 3 tak
  let randIdx = Math.floor(Math.random() *3);
  let randColor = btns[randIdx];  // random color choose karenge
  let randBtn = document.querySelector(`.${randColor}`);

  //random button choose
  btnFlash(randBtn);
}


