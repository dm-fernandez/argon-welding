const accordion = document.getElementById('accordion-faq');

const items = accordion.querySelectorAll('.accordion__item');
const buttons = accordion.querySelectorAll('.accordion__button');
const bodies = accordion.querySelectorAll('.accordion__body');
const icons = accordion.querySelectorAll('.accodrion__icon');

const CLASS_ICON = 'icon-transform';
const CLASS_ARIA = 'collapsed';
const ATTR_ARIA = 'aria-expanded';

function disableAllAria(arr) {
  arr.forEach((item) => item.setAttribute(ATTR_ARIA, 'false'));
}

function hideAllBodies(arr) {
  arr.forEach((item) => item.classList.add(CLASS_ARIA));
}

function transformAllIcons(arr) {
  arr.forEach((item) => item.classList.remove(CLASS_ICON));
}

function accordionToggler(evt) {
  const currentElement = evt.currentTarget;
  const currentButton = currentElement.querySelector('.accordion__button');
  const currentBody = currentElement.querySelector('.accordion__body');
  const currentIcon = currentElement.querySelector('.accodrion__icon');
  const currentAria = currentButton.getAttribute(ATTR_ARIA);

  if (currentAria === 'false') {
    disableAllAria(buttons);
    hideAllBodies(bodies);
    transformAllIcons(icons);
    currentButton.setAttribute(ATTR_ARIA, 'true');
    currentBody.classList.remove(CLASS_ARIA);
    currentIcon.classList.add(CLASS_ICON);
  } else {
    currentButton.setAttribute(ATTR_ARIA, 'false');
    currentBody.classList.add(CLASS_ARIA);
    currentIcon.classList.remove(CLASS_ICON);
  }
}

function accordionListener() {
  items.forEach((item) => item.addEventListener('click', (evt) => {
    const currentClass = evt.target.parentNode.className.includes('accordion__body');
    if (!currentClass) {
      accordionToggler(evt);
    }
  }));
}

export default accordionListener;
