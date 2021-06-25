const navDrop = document.querySelector(".navbar-drop");

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 30) {
    navDrop.classList.add("shadow");
  } else if (window.scrollY < 30) {
    navDrop.classList.remove("shadow");
  }
});
