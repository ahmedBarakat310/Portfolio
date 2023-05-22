// let links=document.querySelectorAll('.tab-links')
// let tabs=document.querySelectorAll('.tab-contents')
// links.forEach(link => {

//     link.addEventListener('click',function(e){
//        links.forEach(link => {
//         link.classList.remove('active-link')
//        });
//         e.currentTarget.classList.add('active-link')
//         let getAttribute=e.currentTarget.getAttribute("id");

//         tabs.forEach(tab => {
//             tabId=tab.getAttribute('id')

//         });

//     })
// });
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
function openTab(tabname) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
let menuIcon = document.querySelector(".menuIcon");
let closeIcon = document.querySelector(".closeIcon");
let navBar = document.querySelector("nav ul");
menuIcon.addEventListener("click", function () {
  navBar.classList.add("show");
});
closeIcon.addEventListener("click", function () {
  navBar.classList.remove("show");
});
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwiOR3UlzGIOj2d1D6kppn9ZO1YTjUtKJul0DztCvcEnNC5Pfu4cIe2SSa7PKx_00U6/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
let form1 = document.getElementById("form1");
let emp = document.querySelectorAll(".emp");
let msg = document.getElementById("msg");
form1.addEventListener("submit", function () {
  emp.forEach((emp1) => {
    emp1.value = "";
  });
  let x = setTimeout(function () {
    msg.textContent = `message set successfuly`;
  }, 100);
  setTimeout(function () {
    msg.textContent = ``;
  }, 1000);
});

setInterval(function(){
    let p1 = document.querySelector(".tab-contents ul li .p1");
if (window.scrollY >= 300) {
  p1.classList.add("full-width");
} else {
  p1.classList.remove("full-width");
}

let p2=document.querySelector('.tab-contents ul li .p2')
if (window.scrollY >= 400) {
    p2.classList.add('full-width')

}else{
    p2.classList.remove('full-width')

}

let p3=document.querySelector('.tab-contents ul li .p3')

if (window.scrollY >= 465) {
    p3.classList.add('full-width')

}else{
    p3.classList.remove('full-width')

}
let p4=document.querySelector('.tab-contents ul li .p4')

if (window.scrollY >= 533) {
    p4.classList.add('full-width')

}else{
    p4.classList.remove('full-width')

}
let p5=document.querySelector('.tab-contents ul li .p5')

if (window.scrollY >= 578) {
    p5.classList.add('full-width')

}else{
    p5.classList.remove('full-width')

}

},1000)
