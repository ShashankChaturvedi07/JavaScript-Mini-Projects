let btn = document.getElementById('btn');

// // function for random 
// function random(number){
//     return Math.floor(Math.random() * (number + 1));
// }

// // add event listener
// btn.addEventListener('click', () => {
//     let red = random(255);
//     let green = random(255);
//     let blue = random(255);
//     let color = `rgb(${red}, ${green}, ${blue})`;
//     document.body.style.backgroundColor = color;
// });


                            // OR 


function randomColor(){
    let red = Math.floor(Math.random() *255) + 1;
    let green = Math.floor(Math.random() *255) + 1;
    let blue = Math.floor(Math.random() *255) + 1;
    let color = `rgb(${red}, ${green}, ${blue})`;
    
    return color;
}

btn.addEventListener("click", function(){
    let bod = document.querySelector("body");
    bod.style.backgroundColor= randomColor();
   
});

