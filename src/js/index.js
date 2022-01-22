import { menuTogglerListener } from './modules/menu-toggler';
import navbarObserver from './modules/navbarObserver';
import accordionListener from './modules/accordion';
import swiperInit from './modules/swiper';

menuTogglerListener();
navbarObserver();
accordionListener();
swiperInit('weld-features-slider');
swiperInit('reviews-slider');
