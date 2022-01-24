export default function callMeBack() {
  const links = document.querySelectorAll('.phone-block__callback');
  links.forEach((item) => {
    item.addEventListener('click', (evt) => evt.preventDefault());
  });
}
