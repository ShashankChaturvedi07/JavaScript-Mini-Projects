let  con = document.querySelector("#container");

let love = document.querySelector("i");

con.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%, -50%) scale(1)";
    love.style.opacity = 1;
    
    // isse love symbol instant invisible ho jayega na ki uski size small hoke invisible hogi

    setTimeout(function(){
        love.style.opacity = 0;
    }, 1000);
    
    setTimeout(function(){
        love.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000);
})

