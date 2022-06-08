// "use strict"











// Код который помогает определить на каком устройстве открыта наша страница. С помощью этого кода пойму открыта страница на тачскрине или с помощью мыши ( ниже) //
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};
// Дальше мы делаем проверку. Если у нас одно из устройств, которое говорит нам о том, что это мобильное устройство, то есть тачскрин, тогда мы будем добавлять к нашему боди некий класс например '_touch', если же это обычный ПК то мы добавляем класс '_pc'.
// if (isMobile.any()) {
//    document.body.classList.add('_touch');
//    // показывает подменю при клике. Для этого первым делом собираем в переменную все стрелочки, в данном случае у нас одна
//    let menuArrows = document.querySelectorAll('.menu__arrow');
//    // Далее делаем условие где проверяем есть ли у нас вообще такие ребята в массиве (проверяем длинну массива этой переменной)
//    if (menuArrows.length > 0) {
//       // Далее если мы прошли проверку и такие стрелочки у нас есть, мы запускаем цикл чтобы по всем им пробежаться
//       for (let index = 0; index < menuArrows.length; index++) {
//          // создаем константу с каждой из этих стрелочек в данной ситуации одна
//          const menuArrow = menuArrows[index];
//          // Далее мы с на каждую из них будем навешивать событие клик
//          menuArrow.addEventListener("click", function(e) {
//             // Что нам нужно сделать при клике на стрелочку? Самый простой вариант это просто навешать какой то класс непосредственно родителю нажатой стрелочки.
//             menuArrow.parentElement.classList.toggle('_active');
//          });
//       }
//    }
// } else {
//    document.body.classList.add('_pc');
// }

const iconMenu = document.querySelector('.menu__icon');
const menuHeader = document.querySelector('.menu');
const menuLogo = document.querySelector('.menu__logo');
const shopBag = document.querySelector('.shop-bag');
const favorite = document.querySelector('.favorite');
const searchSvg = document.querySelector('.search-svg');
const headerSearch = document.querySelector('.header__search');
let cardIcons = document.querySelectorAll('.card__icon');
let itemTopIcons = document.querySelectorAll('.item-top__icon');
let linkMenus = document.querySelectorAll('.link-menu');
let menuItems = document.querySelectorAll('.menu__item');
const menuClose = document.querySelector('.menu__close');
const headerShopBag = document.querySelector('.header__shop-bag');
const shopBagClose = document.querySelector('.shop-bag__close');
const menuBag = document.querySelector('.menu__bag');
const contentPageTable = document.querySelector('.content-page__table');
const pageTable = document.querySelector('.page__table');
const tablePageCloseIcon = document.querySelector('.table-page__close-icon');
const closeIconItem2 = document.querySelector('.item-table-page__close-icon');
const tablePageItem2 = document.querySelector('.table-page__item_2');
const tablePageText = document.querySelector('.table-page__text');
const menuFilter = document.querySelector('.menu__filter');
const catalogFilter = document.querySelector('.catalog__filter');
const catalogFilterClose = document.querySelector('.catalog__filter-close');
const itemCatalogSubtitles = document.querySelectorAll('.item-catalog__subtitle');
const productsContainer = document.querySelector('.products__container');
const titleBlockSubtitleIcon = document.querySelector('.title-block__subtitle-icon');



if (window.matchMedia("(max-width: 769px)").matches) {
   if (linkMenus.length > 0) {
      for (let index = 0; index < linkMenus.length; index++) {
         // const cardIcona = cardIcons[index];
         let linkMenu = linkMenus[index];
         // Далее мы с на каждую из них будем навешивать событие клик
         linkMenu.addEventListener("click", function (e) {
            // Что нам нужно сделать при клике на стрелочку? Самый простой вариант это просто навешать какой то класс непосредственно родителю нажатой стрелочки.
            linkMenu.parentElement.classList.toggle('_active');
            menuClose.classList.toggle('_active')
            iconMenu.classList.toggle('_lock');
            menuHeader.classList.toggle('_lock');
         });
         menuClose.addEventListener("click", function (e) {
            menuClose.classList.remove('_active');
            iconMenu.classList.remove('_lock');
            menuHeader.classList.remove('_lock');
            linkMenu.parentElement.classList.remove('_active');
         });
      }
   }
}
// if (linkMenus.length > 0) {
//    // Далее если мы прошли проверку и такие стрелочки у нас есть, мы запускаем цикл чтобы по всем им пробежаться
//    // создаем константу с каждой из этих стрелочек в данной ситуации одна
//    for (let index = 0; index < linkMenus.length; index++) {
//       // const cardIcona = cardIcons[index];
//       let linkMenu = linkMenus[index];
//       // Далее мы с на каждую из них будем навешивать событие клик
//       linkMenu.addEventListener("click", function(e) {
//          // Что нам нужно сделать при клике на стрелочку? Самый простой вариант это просто навешать какой то класс непосредственно родителю нажатой стрелочки.
//          linkMenu.parentElement.classList.toggle('_active');
//          menuClose.classList.toggle('_active')
//          iconMenu.classList.toggle('_lock');
//          menuHeader.classList.toggle('_lock');
//          menuLogo.classList.toggle('_lock');
//          // document.body.classList.toggle('_lock');
//       });
//       menuClose.addEventListener("click", function (e) {
//          menuClose.classList.remove('_active');
//          iconMenu.classList.remove('_lock');
//          menuHeader.classList.remove('_lock');
//          linkMenu.parentElement.classList.remove('_active');
//       });
//    }
// }
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      searchSvg.parentElement.classList.remove('_active');
      headerSearch.classList.remove('_active');
      iconMenu.classList.toggle('_active');
      menuHeader.classList.toggle('_active');
      document.body.classList.toggle('_lock');
      menuLogo.classList.remove('_active');
   });
}
if (menuLogo) {
   menuLogo.addEventListener("click", function (e) {
      searchSvg.parentElement.classList.remove('_active');
      headerSearch.classList.remove('_active');
      menuLogo.classList.toggle('_active');
      iconMenu.classList.toggle('_active');
      menuHeader.classList.toggle('_active');
      menuClose.classList.remove('_active');
      menuHeader.classList.remove('_lock');
      iconMenu.classList.remove('_lock');
      shopBag.parentElement.classList.remove('_active');
      headerShopBag.classList.remove('_active');
      shopBagClose.classList.remove('_active');
      menuBag.classList.remove('_active');
      if (menuFilter) {
         menuFilter.classList.remove('_active');
         catalogFilter.classList.remove('_active');
      }
      if (contentPageTable) {
         contentPageTable.classList.remove('_active');
         pageTable.classList.remove('_active');
         tablePageCloseIcon.classList.remove('_active');
         closeIconItem2.classList.remove('_active');
         tablePageText.classList.remove('_active');
         tablePageItem2.classList.remove('_active');
         pageTable.classList.remove('_lock');
      }
      if (menuItems.length > 0) {
         for (let index = 0; index < menuItems.length; index++) {
            let menuItem = menuItems[index];
            menuItem.classList.remove('_active')
         }
      }
      if (menuLogo.classList.contains('_active')) {
         document.body.classList.add('_lock');
      } else {
         document.body.classList.remove('_lock');
      }
   });
}
// if (searchSvg) {
//    searchSvg.addEventListener("click", function (e) {
//       searchSvg.parentElement.classList.toggle('_active');
//       headerSearch.classList.toggle('_active');
//    });
// }
if (contentPageTable) {
   contentPageTable.addEventListener("click", function (e) {
      contentPageTable.classList.toggle('_active');
      pageTable.classList.toggle('_active');
      tablePageCloseIcon.classList.toggle('_active');
      if (contentPageTable.classList.contains('_active')) {
         document.body.classList.add('_lock');
      } else {
         document.body.classList.remove('_lock');
      }
   });
}
if (tablePageText) {
   tablePageText.addEventListener("click", function (e) {
      tablePageText.classList.add('_active');
      tablePageItem2.classList.toggle('_active');
      closeIconItem2.classList.toggle('_active');
      pageTable.classList.add('_lock');
      if (contentPageTable.classList.contains('_active')) {
         document.body.classList.add('_lock');
      } else {
         document.body.classList.remove('_lock');
      }
   });
}
if (closeIconItem2) {
   closeIconItem2.addEventListener("click", function (e) {
      tablePageText.classList.remove('_active');
      closeIconItem2.classList.remove('_active');
      tablePageItem2.classList.toggle('_active');
      pageTable.classList.remove('_lock');
   });
}
if (tablePageCloseIcon) {
   tablePageCloseIcon.addEventListener("click", function (e) {
      contentPageTable.classList.remove('_active');
      pageTable.classList.remove('_active');
      tablePageCloseIcon.classList.remove('_active');
      document.body.classList.remove('_lock');
   });
}
if (shopBag) {
   shopBag.addEventListener("click", function (e) {
      shopBag.parentElement.classList.toggle('_active');
      headerShopBag.classList.toggle('_active');
      iconMenu.classList.toggle('_lock');
      document.body.classList.toggle('_lock');
      shopBagClose.classList.toggle('_active')
      searchSvg.parentElement.classList.remove('_active');
      headerSearch.classList.remove('_active');
   });
}
if (menuBag) {
   menuBag.addEventListener("click", function (e) {
      menuHeader.classList.remove('_active');
      menuLogo.classList.remove('_active');
      iconMenu.classList.remove('_active');
      menuBag.classList.toggle('_active');
      headerShopBag.classList.toggle('_active');
      iconMenu.classList.toggle('_lock');
      shopBagClose.classList.toggle('_active')
      searchSvg.parentElement.classList.remove('_active');
      headerSearch.classList.remove('_active');
      if (menuFilter) {
         menuFilter.classList.remove('_active');
         catalogFilter.classList.remove('_active');
      }
      if (contentPageTable) {
         contentPageTable.classList.remove('_active');
         pageTable.classList.remove('_active');
         tablePageCloseIcon.classList.remove('_active');
         closeIconItem2.classList.remove('_active');
         pageTable.classList.remove('_lock');
         tablePageText.classList.remove('_active');
         tablePageItem2.classList.remove('_active');
      }
      if (menuItems.length > 0) {
         for (let index = 0; index < menuItems.length; index++) {
            let menuItem = menuItems[index];
            menuItem.classList.remove('_active')
         }
      }
      if (menuBag.classList.contains('_active')) {
         document.body.classList.add('_lock');
      } else {
         document.body.classList.remove('_lock');
      }
   });
}
if (menuFilter) {
   menuFilter.addEventListener("click", function (e) {
      menuHeader.classList.remove('_active');
      menuLogo.classList.remove('_active');
      iconMenu.classList.remove('_active');
      menuFilter.classList.toggle('_active');
      catalogFilter.classList.toggle('_active');
      iconMenu.classList.toggle('_lock');
      // catalogFilterClose.classList.toggle('_active')
      searchSvg.parentElement.classList.remove('_active');
      headerSearch.classList.remove('_active');
      menuBag.classList.remove('_active');
      headerShopBag.classList.remove('_active');
      shopBagClose.classList.remove('_active')
      menuClose.classList.remove('_active');
      if (contentPageTable) {
         contentPageTable.classList.remove('_active');
         pageTable.classList.remove('_active');
         tablePageCloseIcon.classList.remove('_active');
         closeIconItem2.classList.remove('_active');
         pageTable.classList.remove('_lock');
         tablePageText.classList.remove('_active');
         tablePageItem2.classList.remove('_active');
      }
      if (menuItems.length > 0) {
         for (let index = 0; index < menuItems.length; index++) {
            let menuItem = menuItems[index];
            menuItem.classList.remove('_active')
         }
      }
      if (menuFilter.classList.contains('_active')) {
         document.body.classList.add('_lock');
      } else {
         document.body.classList.remove('_lock');
      }
   });
}
if (shopBagClose) {
   shopBagClose.addEventListener("click", function (e) {
      shopBagClose.classList.remove('_active');
      headerShopBag.classList.remove('_active');
      menuBag.classList.remove('_active');
      menuClose.classList.remove('_active');
      iconMenu.classList.remove('_lock');
      menuHeader.classList.remove('_lock');
      document.body.classList.remove('_lock');
   });
}
if (catalogFilterClose) {
   catalogFilterClose.addEventListener("click", function (e) {
      menuFilter.classList.remove('_active');
      catalogFilter.classList.remove('_active');
      menuClose.classList.remove('_active');
      iconMenu.classList.remove('_lock');
      menuHeader.classList.remove('_lock');
      document.body.classList.remove('_lock');
   });
}
if (itemCatalogSubtitles.length > 0) {
   // Далее если мы прошли проверку и такие стрелочки у нас есть, мы запускаем цикл чтобы по всем им пробежаться
   // создаем константу с каждой из этих стрелочек в данной ситуации одна
   for (let index = 0; index < itemCatalogSubtitles.length; index++) {
      // const cardIcona = cardIcons[index];
      const itemCatalogSubtitle = itemCatalogSubtitles[index];
      // Далее мы с на каждую из них будем навешивать событие клик
      itemCatalogSubtitle.addEventListener("click", function (e) {
         // Что нам нужно сделать при клике на стрелочку? Самый простой вариант это просто навешать какой то класс непосредственно родителю нажатой стрелочки.
         itemCatalogSubtitle.parentElement.classList.toggle('_active');
      });
   }
}
if (cardIcons.length > 0) {
   // Далее если мы прошли проверку и такие стрелочки у нас есть, мы запускаем цикл чтобы по всем им пробежаться
   // создаем константу с каждой из этих стрелочек в данной ситуации одна
   for (let index = 0; index < cardIcons.length; index++) {
      // const cardIcona = cardIcons[index];
      const cardIcon = cardIcons[index];
      // Далее мы с на каждую из них будем навешивать событие клик
      cardIcon.addEventListener("click", function (e) {
         // Что нам нужно сделать при клике на стрелочку? Самый простой вариант это просто навешать какой то класс непосредственно родителю нажатой стрелочки.
         cardIcon.parentElement.classList.toggle('_active');
      });
   }
}
if (itemTopIcons.length > 0) {
   // Далее если мы прошли проверку и такие стрелочки у нас есть, мы запускаем цикл чтобы по всем им пробежаться
   // создаем константу с каждой из этих стрелочек в данной ситуации одна
   for (let index = 0; index < itemTopIcons.length; index++) {
      // const cardIcona = cardIcons[index];
      const itemTopIcon = itemTopIcons[index];
      // Далее мы с на каждую из них будем навешивать событие клик
      itemTopIcon.addEventListener("click", function (e) {
         // Что нам нужно сделать при клике на стрелочку? Самый простой вариант это просто навешать какой то класс непосредственно родителю нажатой стрелочки.
         itemTopIcon.parentElement.classList.toggle('_active');
      });
   }
}
if (titleBlockSubtitleIcon) {
   titleBlockSubtitleIcon.addEventListener("click", function (e) {
      titleBlockSubtitleIcon.classList.toggle('_active');
      productsContainer.classList.toggle('_active');
   });
}

const toggleMenu = function () {
   headerSearch.classList.toggle("_active");
   searchSvg.parentElement.classList.toggle('_active');
}
searchSvg.addEventListener("click", function (e) {
   // headerSearch.classList.toggle(".active");
   e.stopPropagation();
   toggleMenu();
});

document.addEventListener("click", function (e) {
   const target = e.target;
   const its_headerSearch = target == headerSearch || headerSearch.contains(target);
   const its_searchSvg = target == searchSvg;
   const headerSearch_is_active = headerSearch.classList.contains("_active");

   if (!its_headerSearch && !its_searchSvg && headerSearch_is_active) {
      toggleMenu();
   }
});




let imagesSlider = new Swiper('.images-slider', {
   // Стрелки
   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev'
   // },

   // // Навигация
   // // Буллеты, текущее положение, прогрессбар
   pagination: {
      el: '.swiper-pagination',
      // // Буллеты
      clickable: true,
      // Динамические буллеты
      // dynamicBullets: true,
      // Кастомные буллеты
      // renderBullet: function (index, className) {
      //    // return '<span class="' + className + '">' + (index + 1) + '</span>';
      // }
   },
   //    // Фракция
   /*
   type: 'fraction',
   // Кастомный вывод фракции
   renderFraction: function (currentClass, totalClass) {
      return 'Фото <span class="' + currentClass + '"></span>' +
      ' из ' +
      '<span class="' + totalClass + '"></span>';
   },
   */
   //    // // Прогрессбар
   // type: 'progressbar'
   // },

   // // Скролл
   // scrollbar: {
   //    el: '.swiper-scrollbar',
   //    // Возможность перетаскивать скролл
   //    draggable: true,
   // },

   // Включение/отключение
   // перетаскивания на ПК
   simulateTouch: true,
   // Чувствительность свайпа
   touchRatio: 1, // 0 отключит способность перетаскивать на всех устройствах, если хотим чтобы слайды переключались легче то есть меньше применяли усилий то увеличиваем число
   // Угол срабатывания свайпа/перетаскивания
   touchAngle: 45,
   // Курсор перетаскивания
   grabCursor: true,

   // // Управление клавиатурой 
   // keyboard: {
   //    // Включить/выключить
   //    enabled: true,
   //    // Включить/выключить только когда слайдер в пределах вьюпорта
   //    onlyInViewport: true,
   //    // Включить/выключить управление клавишами pageUp, pageDown
   //    // pageUpDown: true, // не работает
   // },

   // Управление колесом мыши
   mousewheel: {
      // Чувствительность колеса мыши
      sensitivity: 1,
      // Класс объекта на котором будет срабатывать прокрутка мышью
      eventsTarget: ".images-slider" // Если слайдеров много то будут прокручиваться все поэтому в таком случае лучше оставлять по умолчанию отключенным
   },

   // Автовысота
   // autoHeight: true,

   // Переключение при клике на слайд
   // slideToClickedSlide: true, // Работает с slidesPerView

   // Количество слайдов для показа
   slidesPerView: 1, // можно указывать не только целые числа например 2.5
   // slidesPerView: 'auto', // автоматическое количество слайдов для показа но для этого нужно добавить в css для слайда width: auto

   // Отключение функционала, если слайдов меньше чем нужно
   watchOverflow: false, // Теперь включен по умолчанию поэтому можно не писать

   // Отуступ между слайдами
   // spaceBetween: 30,

   // Количество пролистываемых слайдов
   slidesPerGroup: 1,

   // // Активный слайд по центру
   // centeredSlides: true,

   // Стартовый слайд
   // initialSlide: 1,

   // // Мультирядность
   // slidesPerColumn: 2, // Для корректной работы нужно отключить автовысоту также необходимо в css изменить стили

   // Бесконечный слайдер
   // Количество дублирующих слайдов

   // // Свободный режим
   // freeMode: true,

   // // Автопрокрутка
   // autoplay: {
   //    // Пауза между прокруткой
   //    delay: 1000,
   //    // Закончить на последнем слайде
   //    stopOnLastSlide: false,
   //    // Отключить после ручного переключения
   //    disabledOnInteraction: false,
   // },

   // Скорость
   speed: 800,
   // zoom: {
   //    maxRatio: 5,
   //    minRatio: 1,
   // },
   // // Вертикальный слайдер
   // direction: 'vertical', // Для корректной работы нужна высота всего слайдера

   // Эффекты переключения слайдов
   // // Листание
   // effect: 'slide',

   // // Смена прозрачности
   // effect: 'fade', // Подходит этот эффект для вывода одно слайда
   // // Дополнение к fade
   // fadeEffect: {
   //    // Параллельная смена прозрачности
   //    crossFade: true,
   // },

   // // Переворот
   // effect: 'flip',
   // // Дополнение к flip
   // flipEffect: {
   //    // Тень
   //    slideShadows: true,
   //    // Показ только активного слайда
   //    limitRotation: true
   // },

   // // Куб
   // effect: 'cube', // стоит ограничить ширину всего слайдера
   // // Дополнение к 
   // cubeEffect: {
   //    // Настройки тени
   //    slideShadow: true,
   //    shadow: true,
   //    shadowOffset: 20,
   //    shadowScale: 0.94
   // },

   // // Эффект потока
   // effect: 'coverflow',
   // // Дополнение к coverflow
   // coverflowEffect: {
   //    // Угол
   //    rotate: 20,
   //    // Наложение
   //    sctretch: 50,
   //    // Тень
   //    slideShadows: true,
   // },

   // // Брейк поинты (адаптив)
   // // Ширина экрана
   // breakpoints: {
   //    320: {
   //       slidesPerView: 1,
   //    },
   //    480: {
   //       slidesPerView: 2,
   //       // direction: 'horizontal',
   //    },
   //    992: {
   //       slidesPerView: 3,
   //       // direction: 'vertical',
   //    }
   // },

   // Миниатюры (превью)
   observer: true,
   observeParents: true,
   observeSlideChildren: true,
   breakpoints: {
      320: {
         loop: false,
         loopedSlides: 1,
      },
      481: {
      },
      531: {

      },
      769: {
         loop: true,
      },
      1002: {
      }
   },
   thumbs: {
      // Свайпер с миниатюрами и его настройки
      swiper: {
         el: '.images-mini-slider',
         // direction: 'vertical', // Для корректной работы нужна высота всего слайдера
            // freeMode: true,   
         
         // Бесконечный слайдер
         // loop: true,
         // Количество дублирующих слайдов
         // loopedSlides: 4,
         // Управление колесом мыши
         // slideToClickedSlide: true,
         mousewheel: {
            // Чувствительность колеса мыши
            sensitivity: 1,
            // Класс объекта на котором будет срабатывать прокрутка мышью
            eventsTarget: ".images-mini-slider" // Если слайдеров много то будут прокручиваться все поэтому в таком случае лучше оставлять по умолчанию отключенным
         },
         // Включение/отключение
         // перетаскивания на ПК
         simulateTouch: true,
         // Чувствительность свайпа
         touchRatio: 1, // 0 отключит способность перетаскивать на всех устройствах, если хотим чтобы слайды переключались легче то есть меньше применяли усилий то увеличиваем число
         // Угол срабатывания свайпа/перетаскивания
         touchAngle: 45,
         // Курсор перетаскивания
         grabCursor: true,
         // pagination: {
         //    el: '.swiper-pagination',
         //    // // Буллеты
         //    clickable: true,
            // Динамические буллеты
            // dynamicBullets: true,
            // // Кастомные буллеты
            // renderBullet: function (index, className) {
            //    return '<span class="' + className + '">' + (index + 1) + '</span>';
         // },
         breakpoints: {
            320: {
               observer: true,
               observeParents: true,
               observeSlideChildren: true,
               slidesPerView: 3,
               // spaceBetween: 60
            },
            481: {
            },
            531: {
               slidesPerView: 5,
               spaceBetween: 30
            },
            769: {
               slidesPerView: 4,
               spaceBetween: 25
            },
            1002: {
               slidesPerView: 5,
               spaceBetween: 50
            }
         },
      },
   }
});

// const topWrapper = document.querySelector('.top-wrapper')
let topSlider = new Swiper('.top-slider', {
   simulateTouch: false,
   touchRatio: 0,
   loop: true,
   // freeMode: true,
   spaceBetween: 130,
   autoplay: {
      delay: 0,
      // stopOnLastSlide: true,
      // disabledOnInteraction: true,
   },
   speed: 1500,
   breakpoints: {
      320: {
         slidesPerView: 1.6,
         loopedSlides: 1.6,
         observer: true,
         observeParents: true,
         observeSlideChildren: true,
         },
      482: {
         slidesPerView: 2.6,
         loopedSlides: 2.6,
      },
      1002: {
         slidesPerView: 3.6,
         loopedSlides: 3.6,
      }
   },
});

// const recommendation = document.querySelector('.recommendation')
let recommendationSlider = new Swiper('.recommendation-slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   grabCursor: true,
   mousewheel: {
      sensitivity: 1,
      eventsTarget: ".recommendation-slider"
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      481: {
         slidesPerView: 2,
      },
      769: {
         slidesPerView: 3,
      },
      1001: {
         slidesPerView: 4,
      }
   },
   observer: true,
   observeParents: true,
   observeSlideChildren: true,
});

let newSlider = new Swiper('.new-slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   grabCursor: true,
   mousewheel: {
      sensitivity: 1,
      eventsTarget: ".new-slider"
   },
   breakpoints: {
      320: {
         slidesPerView: 1
      },
      481: {
         slidesPerView: 2
      },
      769: {
         slidesPerView: 3
      },
      1001: {
         slidesPerView: 4
      }
   },
   observer: true,
   observeParents: true,
   observeSlideChildren: true
});
