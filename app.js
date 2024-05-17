const hero = document.querySelector(".hero__module");
function listener() {
    hero.lastElementChild.remove();
    document.removeEventListener("click", listener);
};
document.addEventListener("click", listener);