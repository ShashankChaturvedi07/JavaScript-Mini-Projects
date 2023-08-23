// step1 -->> keypress -> gamestart
//step2 -->> btnflash and level is updated
//step3 -->> btn press -> we check user == game
        // -->> btn press -> we check user == same the levelup(or level2) else gameover





 let gameSeq = [];
 let userSeq = [];

 let started = false;
 let level = 0;


          //STEP-1
 // isse game ek bar hi start hoga either we press multiple times key 
 document.addEventListener("keypress", function(){
    if(started == false){
    console.log("game is started");
    started = true;
    }
    
 });
 
