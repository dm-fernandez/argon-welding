function counter(el, counterDuration, counterFinalNumber) {
  const counterEl = document.querySelector(el);
  const counterStep = 1;
  let counterState = 0;
  const time = Math.round(counterDuration / (counterFinalNumber / counterStep));
  const counterInterval = setInterval(() => {
    counterState += counterStep;
    if (counterState === counterFinalNumber) {
      clearInterval(counterInterval);
    }
    counterEl.textContent = counterState;
  }, time);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      counter('#counter-projects', 1, 1192);
      counter('#counter-customers', 1, 862);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.7 });

export default function counterInit() {
  const about = document.querySelector('.about');
  observer.observe(about);
}
