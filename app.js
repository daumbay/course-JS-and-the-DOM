const heading = document.querySelector("#contain-all");
document.addEventListener("keypress", function() {
    console.log("Removing a child element");
    heading.firstElementChild.remove();
});