// Get the circle element
let circle = document.getElementById("circle");

// Added mouseenter event listner to the circle element
circle.addEventListener("mouseenter", () => {
    if (!circle.classList.contains("hover")) {
        circle.classList.add("hover");
    }
});

// Added mouseleave event listner to the circle element
circle.addEventListener("mouseleave", () => {
    if (circle.classList.contains("hover")) {
        circle.classList.remove("hover");
    }
});