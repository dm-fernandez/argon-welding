const buttons = document.querySelectorAll('.anchor-btn');

function anchorButtonsClickHandler(evt) {
  const currentButton = evt.target;
  const id = currentButton.getAttribute('href').replace('#', '');
  evt.preventDefault();
  window.scrollTo({
    top: document.getElementById(id).offsetTop,
    behavior: 'smooth',
  });
}

export default function anchorButtonsInit() {
  buttons.forEach((button) => button.addEventListener('click', anchorButtonsClickHandler));
}
