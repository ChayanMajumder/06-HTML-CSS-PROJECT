let toggelBtn = document.querySelector(".toggle i");
let toggleMenuOffBtn = document.querySelector(".show-menu-off-btn");

toggelBtn.addEventListener("click", () => {
    document.querySelector(".menu").classList.add("show-menu");
});
toggleMenuOffBtn.addEventListener("click", ()=> {
    document.querySelector(".menu").classList.remove("show-menu");
})