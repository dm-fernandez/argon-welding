const accordion = document.getElementById('accordion-faq');
const items = accordion.querySelectorAll('.accordion__item');
const buttons = accordion.querySelectorAll('.accordion__button');
const bodies = accordion.querySelectorAll('.accordion__body');
const icons = accordion.querySelectorAll('.accodrion__icon');

const classIcon = 'icon-transform';
const classAria = 'collapsed';
const attrAria = 'aria-expanded';

function accordionToggler(evt) {
  const currentElement = evt.currentTarget;
  const currentButton = currentElement.querySelector('.accordion__button');
  const currentBody = currentElement.querySelector('.accordion__body');
  const currentIcon = currentElement.querySelector('.accodrion__icon');
  const currentAria = currentButton.getAttribute(attrAria);

  if (currentAria === 'false') {
    buttons.forEach((item) => item.setAttribute(attrAria, 'false'));
    bodies.forEach((item) => item.classList.add(classAria));
    icons.forEach((item) => item.classList.remove(classIcon));
    currentButton.setAttribute(attrAria, 'true');
    currentBody.classList.remove(classAria);
    currentIcon.classList.add(classIcon);
  } else {
    currentButton.setAttribute(attrAria, 'false');
    currentBody.classList.add(classAria);
    currentIcon.classList.remove(classIcon);
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
