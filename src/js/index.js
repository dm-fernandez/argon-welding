import AOS from 'aos';
import { menuTogglerListener } from './modules/menu-toggler';
import anchorButtonsInit from './modules/buttonsAnchor';
import buttonScrollTopInit from './modules/buttonScrollTop';
import navbarObserver from './modules/navbarObserver';
import counterInit from './modules/counter';
import accordionListener from './modules/accordion';
import phoneInputMask from './modules/phoneInputMask';
import imageHoverEffectListener from './modules/imageHoverEffect';
import swiperInit from './modules/swiper';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    easing: 'ease-in',
    duration: 600,
    once: true,
  });
  menuTogglerListener();
  anchorButtonsInit();
  buttonScrollTopInit();
  navbarObserver();
  counterInit();
  accordionListener();
  phoneInputMask();
  imageHoverEffectListener();
  swiperInit('weld-features-slider');
  swiperInit('reviews-slider');
});
