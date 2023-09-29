const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.taggle('bx-x');
  navlist.classList.taggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('active');
}

const st = scrollReveal ({
  distance: '45px',
  duration: 2700,
  reset: true 
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-image',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service.cta,.contact',{delay:200, origin:'bottom'})