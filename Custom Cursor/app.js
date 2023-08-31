let main = document.querySelector("#main");

let crsr = document.querySelector(".cursor");

// mouse ko move karna hai main div par

main.addEventListener("mousemove", function(abc){
    //console.log("hi"); 
    // console.log(e.x);  // jab app mouse move karenge x axis ke along check krne ke liye console window dekhe
    // console.log(e.y);  // jab app mouse move karenge y axis k along check krne ke liye console window dekhe

    crsr.style.left = abc.x + "px";   // note cursor ko position absolute dena hoga
    crsr.style.top = abc.y + "px";
    
})