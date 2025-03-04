//navbar responssive
let showMenu = document.querySelector("#show-menu");
let menu = document.querySelector(".nav-menu")

showMenu.addEventListener("click", () => {
    menu.classList.toggle("display-nav")
})

//sidebar ressponsive
let showSide = document.querySelector("#show-sideBar");
let aside = document.querySelector(".aside")

showSide.addEventListener("click", () => {
    aside.classList.toggle("display-aside")
})

//Show more btn 

const readMoreBtn = document.querySelector(".readMore")
const showText = document.querySelector(".text")

readMoreBtn.addEventListener("click", (e) => {
    showText.classList.toggle("show-more-text")
    if(readMoreBtn.innerHTML === "Read more") {
        readMoreBtn.innerHTML = "Read less";
    }else{
        readMoreBtn.innerHTML = "Read more";
    }
})