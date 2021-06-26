// navbar e
const navDrop = document.querySelector(".navbar-drop");

// jumbotron e
const jumbotronImg = document.querySelector(".jumbotron .pic img");
const jumbotronTxt = document.querySelector(".jumbotron .text");

// galery e
const galeryH3 = document.querySelector(".galery h3");
const col_1_Img1 = document.querySelector(".col-1 .img-1");
const col_1_Img2 = document.querySelector(".col-1 .img-2");
const col_2_Img1 = document.querySelector(".col-2 .img-1");
const col_2_Img2 = document.querySelector(".col-2 .img-2");
const col_3_Img1 = document.querySelector(".col-3 .img-1");
const col_3_Img2 = document.querySelector(".col-3 .img-2");

// service e
const servicePic = document.querySelector("section.service .pic");
const service_1 = document.querySelector("section.service .service-1");
const service_2 = document.querySelector("section.service .service-2");
const service_3 = document.querySelector("section.service .service-3");

window.addEventListener("load", () => {
  jumbotronImg.classList.add("animate");
  jumbotronTxt.classList.add("animate");
});

document.addEventListener("scroll", () => {
  // desktop
  if (window.innerHeight >= 553 && window.scrollY > 20) {
    navDrop.classList.add("shadow");
  } else if (window.scrollY < 20) {
    navDrop.classList.remove("shadow");
  }

  if (window.innerHeight >= 553 && window.scrollY > 400) {
    galeryH3.classList.add("animate");
    col_1_Img1.classList.add("animate");
    col_2_Img1.classList.add("animate");
    col_3_Img1.classList.add("animate");
    col_3_Img2.classList.add("animate");
    col_2_Img2.classList.add("animate");
    col_1_Img2.classList.add("animate");
  }

  if (window.innerHeight >= 553 && window.scrollY > 940) {
    servicePic.classList.add("animate");
    service_1.classList.add("animate");
    service_2.classList.add("animate");
    service_3.classList.add("animate");
  }

  // mobile
  if (window.innerHeight <= 553 && window.scrollY > 20) {
    navDrop.classList.add("shadow");
  } else if (window.scrollY < 20) {
    navDrop.classList.remove("shadow");
  }

  if (window.innerHeight <= 553 && window.scrollY > 400) {
    galeryH3.classList.add("animate");
    col_1_Img1.classList.add("animate");
    col_2_Img1.classList.add("animate");
    col_3_Img1.classList.add("animate");
    col_3_Img2.classList.add("animate");
    col_2_Img2.classList.add("animate");
    col_1_Img2.classList.add("animate");
  }

  if (window.innerHeight <= 553 && window.scrollY > 940) {
    servicePic.classList.add("animate");
    service_1.classList.add("animate");
    service_2.classList.add("animate");
    service_3.classList.add("animate");
  }
});
