// Select the correct location where the button will be inserted
const buttonLocation = document.querySelectorAll(".card--nanodegree__title");

// Listen for click events and toggle favorite status
function clickListener (event) {
    event.preventDefault();
    if (event.target.textContent.includes("Add")) {
        // Change button text and add indicator
        event.target.textContent = "Remove from Favourites";
        const star = document.createElement("div");
        star.textContent = "⭐️⭐️⭐️"
        event.target.parentElement.appendChild(star);
    } else {
        // Bring button back to original state
        event.target.textContent = "Add to Favourites";
        event.target.nextSibling.remove();
    }
}

for (let i = 0; i < buttonLocation.length; i++) {
    // Create a button, add text and styles to it
    const myButton = document.createElement("button");
    myButton.textContent = "Add to Favourites";
    myButton.classList.add("button", "button--primary");

    // Add event listener for click events and fire clickListener
    myButton.addEventListener("click", clickListener);

    // Append the button in all required locations
    buttonLocation[i].appendChild(myButton);
}