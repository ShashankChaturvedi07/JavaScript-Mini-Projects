

const cursor = document.querySelector(".cursor");

// cursor movement
document.addEventListener("mousemove", function(e) {
    let x = e.pageX;
    let y = e.pageY;
    // pageX and pageY properties of the event object e are used to obtain the X and Y coordinates of the mouse pointer on the page. These properties represent the horizontal and vertical positions of the mouse pointer relative to the whole document, including any scrolling.

    cursor.style.left = x + "px"; 
    cursor.style.top = y + "px";

// cursor.style.top = y + "px"; sets the top CSS property of the cursor element to the value of y, effectively moving the cursor vertically to the current Y coordinate of the mouse pointer.
// cursor.style.left = x + "px"; sets the left CSS property of the cursor element to the value of x, effectively moving the cursor horizontally to the current X coordinate of the mouse pointer.

    cursor.style.display = "block";
    

    // stop animation
    function mouseStopped() {
        cursor.style.display = "none";
    }

    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});
