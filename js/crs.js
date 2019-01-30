var menu = document.querySelector('.main-nav');
var menuOpener = document.querySelector('.main-nav__opener');

menuOpener.addEventListener('click', function(){
  menu.classList.toggle('is-active');
})

