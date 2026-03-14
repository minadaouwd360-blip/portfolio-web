// let btn = document.getElementById("modeBtn");

// btn.onclick = function(){
//     document.body.classList.toggle("light");
// }


// const toggle = document.getElementById("darkToggle");
// const html = document.documentElement;

// html.classList.remove("dark");

// if (localStorage.getItem("theme") === "dark") {
//   html.classList.add("dark");
//   toggle.checked = true;
// }

// toggle.addEventListener("change", () => {
//   if (toggle.checked) {
//     html.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     html.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   }
// });

// function darkMode(){

// document.body.classList.toggle("dark")

// }

// let btn = document.getElementById("topBtn")

// window.onscroll = function(){

// if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){

// btn.style.display="block"

// }else{

// btn.style.display="none"

// }

// }

// function topFunction(){

// document.body.scrollTop = 0
// document.documentElement.scrollTop = 0

// }

// const toggle = document.getElementById("darkToggle");
// const html = document.documentElement;
// html.classList.remove("dark");

// if (localStorage.getItem("theme") === "dark") {
//   html.classList.add("dark");
//   toggle.checked = true;
// }

// toggle.addEventListener("change", () => {
//   if (toggle.checked) {
//     html.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   } else {
//     html.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   }
// });

const toggle = document.getElementById("darkToggle");
const html = document.documentElement;

if (localStorage.getItem("theme") === "light") {
  html.classList.add("light-mode");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    html.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.remove("light-mode");
    localStorage.setItem("theme", "dark");
  }
});