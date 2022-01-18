import Swiper, {
  Navigation,
  Pagination,
  Thumbs,
  Controller,
  EffectFade,
  EffectCoverflow,
} from 'swiper';

Swiper.use([
  Navigation,
  Pagination,
  Thumbs,
  Controller,
  EffectFade,
  EffectCoverflow,
]);

export default function swiperInit(selectorId) {
  const rootSelector = document.getElementById(selectorId);

  const swiperSecondary = new Swiper(rootSelector.querySelector('.slider-secondary'), {
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      slideShadows: false,
      scale: 0.7,
    },
    autoHeight: true,
    loop: true,
  });

  const swiperPrimary = new Swiper(rootSelector.querySelector('.slider-primary'), {
    speed: 600,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      el: swiperSecondary,
    },
  });

  swiperPrimary.controller.control = swiperSecondary;
  swiperSecondary.controller.control = swiperPrimary;

  swiperPrimary.init();
  swiperSecondary.init();
}
