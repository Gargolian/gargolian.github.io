
(function () {
  const fixed = document.querySelector('.fixed');
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      fixed.classList.add('fixed__active');
    } else {
      fixed.classList.remove('fixed__active');
    }
  };
}());

// Burger menu

(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuCloseItem = document.querySelector('.header__nav-close');
  const links = document.querySelectorAll('.header__item');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav-active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav-active');
  });
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('header__nav-active');
    });
  });

}());

// Meme glasses

window.addEventListener('load', vestir, false);

function vestir() {

  var imagen = document.getElementById('imagen');

  imagen.addEventListener('mouseover', soleado, false);
  imagen.addEventListener('mouseout', restaurar, false);
}

function restaurar() {
  var imagen = document.getElementById('imagen').src = "img/profilePic.png";
}

function soleado() {
  var imagen = document.getElementById('imagen').src = "img/profilePicMeme.png";
}



