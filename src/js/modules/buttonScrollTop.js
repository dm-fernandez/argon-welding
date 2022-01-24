const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const buttonScrollTop = document.querySelector('.btn-scroll-top');
const observerOptions = { threshold: 0.7 };

function buttonScrollTopClickHandler(evt) {
  evt.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const observerStart = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      buttonScrollTop.classList.add('btn-scroll-top--show');
    } else {
      buttonScrollTop.classList.remove('btn-scroll-top--show');
    }
  });
}, observerOptions);

const observerEnd = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      buttonScrollTop.classList.remove('btn-scroll-top--show');
    } else {
      buttonScrollTop.classList.add('btn-scroll-top--show');
    }
  });
}, observerOptions);

export default function buttonScrollTopInit() {
  buttonScrollTop.addEventListener('click', buttonScrollTopClickHandler);
  observerStart.observe(header);
  observerEnd.observe(footer);
}
