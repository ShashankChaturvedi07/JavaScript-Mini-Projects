 // because there is 2 class of same name
const buttons = document.querySelectorAll(".counterBtn");
let count =0;

buttons.forEach(function (button) {

    button.addEventListener("click", function() {

        if(button.classList.contains("sub")) {
            count--;
        }

        else if(button.classList.contains("add")){
            count++;
        }

        const counter =document.querySelector("#counter");
        counter.textContent = count;;

        if(count < 0) {
            counter.style.color = "red";
        }
        else if(count > 0) {
            counter.style.color = "blue";
        }
        else {
            counter.style.color = "black";
        } 
    })
});
    

