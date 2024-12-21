const header = document.querySelector("header");
const closeBtn = document.querySelector("#close-btn");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
    header.classList.add("show-mobile-menu");
});

closeBtn.addEventListener("click", () => {
    header.classList.remove("show-mobile-menu");
});
