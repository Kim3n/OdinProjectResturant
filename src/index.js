// index.js
import "./css/styles.css";
import "./css/stylesheet.css";

import Home from "./home";
import About from "./about";
import Menu from "./menu";

const homeBtn = document.querySelector("#home");
const homeimgs = document.querySelectorAll('.home-img');
const menuimgs = document.querySelectorAll('.menu-img');
const aboutimgs = document.querySelectorAll('.about-img');
const menuBtn = document.querySelector("#menu");
const AboutBtn = document.querySelector("#about");
const content = document.querySelector("#content");
Home()

homeBtn.addEventListener("click", () => {
  homeimgs.forEach(homeimgs=> {
        homeimgs.style.visibility = 'visible';
  });
  menuimgs.forEach(menuimgs=> {
    menuimgs.style.visibility = 'hidden';
  });
  aboutimgs.forEach(aboutimgs=> {
    aboutimgs.style.visibility = 'hidden';
  });

  content.innerHTML = "";
  Home();

});


menuBtn.addEventListener("click", () => {

  homeimgs.forEach(homeimgs=> {
    homeimgs.style.visibility = 'hidden';
  });
  menuimgs.forEach(menuimgs=> {
    menuimgs.style.visibility = 'visible';
  });
  aboutimgs.forEach(aboutimgs=> {
    aboutimgs.style.visibility = 'hidden';
  });

  content.innerHTML = "";
  Menu();
});


//ABOUT PAGE

AboutBtn.addEventListener("click", () => {
  homeimgs.forEach(homeimgs=> {
    homeimgs.style.visibility = 'hidden';
  });
  menuimgs.forEach(menuimgs=> {
    menuimgs.style.visibility = 'hidden';
  });
  aboutimgs.forEach(aboutimgs=> {
    aboutimgs.style.visibility = 'visible';
  });
  content.innerHTML = ``;
  About();
});