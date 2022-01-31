const i18nObj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}

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
const portfolioImages = document.querySelectorAll('.portfolio-image');

portfolioBtns.addEventListener('click', changeImage)

function changeImage(event) {
  if(event.target.classList.contains('btn-transparent')) {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);    
  }
}


// active button illumination
const changeClassActive = document.querySelectorAll('.btns button')
changeClassActive.forEach(item =>{ 
  item.addEventListener('click', () => {
    changeClassActive.forEach(b => { b.classList.remove('active'); });
    item.classList.add('active')
    })
})


// Page translation
const langParent = document.querySelector('.lang')
const langElements = document.querySelectorAll("[data-language]")
langParent.addEventListener('click', changeLang)

function changeLang(event) {
  if (event.target.dataset.language){
    getTranslate(event.target.dataset.language) 
    langElements.forEach((el)=>{
      if (el == event.target){
        el.classList.add('active-language')
      } else {
        el.classList.remove('active-language')
      }
    })
  }
}

function getTranslate(language) {
  const i18n = document.querySelectorAll("[data-i18n]")
  console.log(i18n)
  i18n.forEach((el)=>{
    el.innerHTML=i18nObj[language][el.dataset.i18n]
  })
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