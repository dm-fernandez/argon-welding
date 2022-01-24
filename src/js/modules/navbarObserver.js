import { menuInit } from './menu-toggler';

const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('.observer');
const listLinks = navbar.querySelector('.navbar__nav-wrapper');
const links = listLinks.querySelectorAll('.navbar__navlist-link');
const breakpointMenu = window.matchMedia('(max-width: 960px)');
const observerOptions = { threshold: 0.7 };

function getFormattedId(el) {
  return el.getAttribute('href').replace('#', '');
}

const observerNavbar = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  });
}, observerOptions);

const observerLinks = new IntersectionObserver((entries) => {
  entries.forEach((entryItem) => {
    if (entryItem.isIntersecting) {
      links.forEach((linkItem) => {
        const formatedLink = getFormattedId(linkItem);
        linkItem.classList.toggle('navbar__navlist-link--active', formatedLink === entryItem.target.id);
      });
    }
  });
}, observerOptions);

function clickHandler(evt) {
  const currentEl = evt.target;
  if (currentEl.classList.contains('navbar__navlist-link')) {
    evt.preventDefault();
    const id = getFormattedId(currentEl);
    window.scrollTo({
      top: document.getElementById(id).offsetTop,
      behavior: 'smooth',
    });

    if (breakpointMenu.matches) {
      menuInit();
    }
  }
}

export default function navbarObserverInit() {
  observerNavbar.observe(header);
  sections.forEach((item) => observerLinks.observe(item));
  listLinks.addEventListener('click', clickHandler);
}
