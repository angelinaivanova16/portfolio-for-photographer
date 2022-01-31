// burger-menu
$(document).ready(function () {
 $(".hamburger").click(function () {
   $(this).toggleClass("is-active");
   $(".main-menu").toggleClass("open-menu");
   $("nav").toggleClass("close");
 });
 $(".link").click(function () {
  $(".main-menu").removeClass("open-menu");
  $("nav").toggleClass("close");
  $(".hamburger").toggleClass("is-active");
});
});

// Portfolio
const portfolioBtns = document.querySelector('.btns');
const portfolioBtn = document.querySelector('.btn-transparent');
const portfolioImages = document.querySelectorAll('.portfolio-image');

portfolioBtns.addEventListener('click', changeImage)

function changeImage(event) {
  if(event.target.classList.contains('btn-transparent')) {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);    
  }
}


// active button illumination

portfolioBtns.addEventListener('click', function(event) {
	let target = event.target;
  target.classList.add('active');
});

// portfolioBtns.addEventListener('click', changeClassActive)

function changeClassActive(portfolioBtn) {
   if(portfolioBtn = active) {
    target.classList.remove('active');
   }
   target.classList.add('active');
  }



console.log(`
    Оценка: 79 баллов.
    1. Вёрстка соответствует макету. Ширина экрана 768px +48
    - блок <header> +6
    - секция hero +6
    - секция skills +6
    - секция portfolio +6
    - секция video +6
    - секция price +6
    - секция contacts +6
    - блок <footer> +6
    2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
    - нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5
    - нет полосы прокрутки при ширине страницы от 768рх до 480рх +5
    - нет полосы прокрутки при ширине страницы от 480рх до 320рх +5
    3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22
    - при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2
    - при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4
    - высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, но когда экран становится уже, меню не занимает всю ширину экрана +2 (буду рада комментарию с подсказкой :))
    - при нажатии на крестик адаптивное меню не плавно скрывается. Но крестик превращается в бургер-иконку +2 (буду рада комментарию с подсказкой :))
    - бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2
    - ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2
    - при клике по ссылке в адаптивном меню адаптивное меню скрывается, но не плавно. Крестик превращается в бургер-иконку +2
Итого: 79 баллов.
    `)