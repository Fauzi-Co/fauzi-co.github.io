const navDrop = document.querySelector(".navbar-drop");
// const navLinkDrop = navDrop.querySelector(".collapse");
// const btnLinkDrop = navDrop.querySelector("button.navbar-toggler");
const jumbotronImg = document.querySelector(".jumbotron .pic img");
const jumbotronTxt = document.querySelector(".jumbotron .text");

window.addEventListener("load", () => {
  jumbotronImg.classList.add("animate");
  jumbotronTxt.classList.add("animate");
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navDrop.classList.add("shadow");
  } else if (window.scrollY < 30) {
    navDrop.classList.remove("shadow");
  }
});
