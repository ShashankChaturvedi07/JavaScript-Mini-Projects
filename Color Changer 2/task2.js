let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText= inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value=""; // for reset/clearing input after adding tasks
});

// ul.addEventListener("click", function(event) {
//     console.dir(event.target); // ye show karega konsa which button is clicked 
//     console.log("button clicked"); // jaise hi delete btn click hoga ye console pe print karega button clicked
// })

// DELETE KARANE KE LIYE
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});
