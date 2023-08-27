const istatus = document.querySelector("h5");

const addFriend = document.querySelector("#add");

var flag=0;

// const remove = document.querySelector("#remove");


addFriend.addEventListener("click", function(){
    if(flag == 0){
        istatus.innerHTML = "Friends";
        istatus.style.color = "#00FF00";
        add.innerHTML = "Remove Friend";
        add.style.backgroundColor = "rgb(174, 178, 235)";
        add.style.opacity = "2";
        flag=1;
    }
    else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        add.innerHTML = "Add Friend";
        add.style.backgroundColor = "";
        flag=0;
    }

})

// remove.addEventListener("click", function(){
//     istatus.innerHTML = "Stranger";
//     istatus.style.color = "red";
// })