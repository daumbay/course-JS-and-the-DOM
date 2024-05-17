const myDiv = document.createElement("div");

function listener (e) {
    if (e.target.nodeName.toLowerCase() === "p")
    console.log("A paragraph was clicked: " + e.target.textContent);
}

for (let i = 1; i <= 200; i++) {
    const newEl = document.createElement("p");
    newEl.textContent = `This is paragraph number ${i}`;
    myDiv.appendChild(newEl);
}

myDiv.addEventListener("click", listener);
document.body.appendChild(myDiv);