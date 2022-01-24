const navbar = document.querySelector('.navbar');
const navItems = navbar.querySelectorAll('.navbar__navlist-item');

function showOrHide(el, classShow, classHide) {
  if (!el.classList.contains(classShow)) {
    el.classList.add(classShow);
    el.classList.remove(classHide);
  } else {
    el.classList.remove(classShow);
    el.classList.add(classHide);
  }
}

function toggleNavlist() {
  const navlist = navbar.querySelector('.navbar__navlist');
  const classShow = 'navbar__navlist--show';
  const classHide = 'navbar__navlist--hide';

  if (!navlist.classList.contains(classShow)) {
    navlist.classList.add(classShow);
    navlist.classList.remove(classHide);
  } else if (navlist.classList.contains(classShow)) {
    setTimeout(() => {
      navlist.classList.remove(classShow);
      navlist.classList.add(classHide);
    }, 1000);
  }
}

function toggleAriaExpanded(el) {
  const attrAria = 'aria-expanded';
  if (el.getAttribute(attrAria) === 'false') {
    el.setAttribute(attrAria, 'true');
  } else {
    el.setAttribute(attrAria, 'false');
  }
}

function toggleAnimationItems() {
  navItems.forEach((item) => {
    showOrHide(item, 'navbar__navlist-item--show', 'navbar__navlist-item--hide');
  });
}

export function menuInit() {
  document.body.classList.toggle('scroll-disable');
  const navPhoneBlock = navbar.querySelector('.navbar__phone-block');
  const btnMenu = navbar.querySelector('.navbar__btn-menu-toggler');

  showOrHide(navbar, 'navbar--show-fullscreen', 'navbar--hide-fullscreen');
  showOrHide(btnMenu, 'btn-menu-toggler--show', 'btn-menu-toggler--hide');
  showOrHide(navPhoneBlock, 'navbar__phone-block--show', 'navbar__phone-block--hide');
  toggleNavlist();
  toggleAriaExpanded(btnMenu);
  toggleAnimationItems();
}

export function menuTogglerListener() {
  document.querySelector('.btn-menu-toggler').addEventListener('click', menuInit);
}
