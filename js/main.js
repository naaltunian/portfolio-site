//  select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// initial menu state
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
  //  set menu's state
  if(!showMenu){
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(i => i.classList.add("show"));
    showMenu = true;
    // resets menu's state
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(i => i.classList.remove("show"));
    showMenu = false;
  }
}
