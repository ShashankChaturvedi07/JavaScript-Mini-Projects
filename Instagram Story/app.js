let arr = [
    {dp:"./assests/mypic3.jpg",story:"./assests/mypic5.jpg"},
    // {dp:"https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",story:"https://images.unsplash.com/photo-1611042553365-9b101441c135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBnaXJsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"},

    {dp:"./assests/chandu1.jpg",story:"./assests/chandu2.jpg"},
    // {dp:"https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWwlMjBnaXJsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",story:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"},

    {dp:"./assests/rashi.jpg",story:"./assests/rashi2.jpg"},
    // {dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBnaXJsfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",story:"https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsJTIwZ2lybHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"},

    {dp:"./assests/mrunal.jpg",story:"./assests/mrunal2.jpg"},
    // {dp:"https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsJTIwZ2lybHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",story:"https://images.unsplash.com/photo-1621786030484-4c855eed6974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsJTIwZ2lybHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"},

    {dp:"https://images.unsplash.com/photo-1611042553484-d61f84d22784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsJTIwZ2lybHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",story:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsJTIwZ2lybHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"},

    {dp:"https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",story:"https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=300&q=60"},
];


let stories = document.querySelector("#stories");
let clutter = "";
arr.forEach(function(elem,idx){  //idx for index of array
    clutter += ` <div class="story">
                    <img id="${idx}" src="${elem.dp}" alt="">
                    <span class="name">${elem.name}</span>
                </div>`
});

stories.innerHTML = clutter;

stories.addEventListener("click",function(dets){  // dets means details
    
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"; 
    },1200)
})
