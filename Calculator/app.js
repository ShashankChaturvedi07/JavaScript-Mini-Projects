const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const clear = document.querySelector(".btn-clear");
const equal = document.querySelector(".btn-equal");

buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        let  value = e.target.textContent;
        screen.value += value;
        // You use screen.value to set or retrieve the content of the input element
    })
});

equal.addEventListener("click",function(e){
    if(screen.value === ""){
        screen.value = "";
    } else{
        let ans = eval(screen.value);
        screen.value = ans;
    }
});

clear.addEventListener("click", function(e){
    screen.value = "";
})