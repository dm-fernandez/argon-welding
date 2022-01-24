const images = document.querySelectorAll('.gallery__image');
const imagesContainer = document.querySelector('.gallery__image-wrapper');
const breakpointMenu = window.matchMedia('(min-width: 960px)');

const hoverClass = 'hoverEffect';

function addImageHoverEffect(evt) {
  const currentEl = evt.target;
  if (currentEl.classList.contains('gallery__image')) {
    images.forEach((image) => {
      image.classList.add(hoverClass);
      currentEl.classList.remove(hoverClass);
    });
  }
}

function removeImageHoverEffect() {
  images.forEach((image) => {
    image.classList.remove(hoverClass);
  });
}

export default function imageHoverEffectListener() {
  if (breakpointMenu.matches) {
    imagesContainer.addEventListener('mouseover', addImageHoverEffect);
    imagesContainer.addEventListener('mouseout', removeImageHoverEffect);
  }
}
