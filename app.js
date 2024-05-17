const heading = document.querySelector("h1");
document.addEventListener('mouseover', function() {
    heading.textContent = "Build an AR App";
});
document.addEventListener('mouseout', function() {
    heading.textContent = "Learn ARKit";
})