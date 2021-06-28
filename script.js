
var burger = document.getElementById("burger");
var sideMenu = document.getElementById("side-menu");

function burgerClick(){
  sideMenu.classList.toggle("translate");
  burger.classList.toggle("rotate");
  transform: translateY(0);
  console.log("burger");
}

document.addEventListener("scroll", burgerClick);
function scrolled(){
otherPosition = window.scrollY;
if (otherPosition > 0){
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}
}


// Features button effect and function
var currentButton = document.getElementsByClassName('features-button-active');
var buttons = document.getElementsByClassName('features-button');

// Susiranda mygtukus
for (var i = 0; i < buttons.length; i++){
buttons[i].addEventListener("click", function(){
// Uždeda klasę mygtukams
for (var ii = 0; ii < buttons.length; ii++){
buttons[ii].classList.remove("features-button-active");
}
this.classList.add("features-button-active");

//changes Slides

var currentIndex = document.querySelector(".features-button-active").getAttribute("index");
swiper2.slideTo(index,300);

});
}
