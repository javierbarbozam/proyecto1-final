
const info_btn = document.querySelector('#js-btn-info');
const card_btn = document.querySelector('#js-btn-card');
const description = document.querySelector('#js-info-container');
const cards = document.querySelector('#js-card-container');


card_btn.addEventListener('click', () => {
  description.classList.add('js-hidden');
  description.classList.remove('js-visible');
  cards.classList.remove('js-hidden');
  cards.classList.add('js-visible');
});

info_btn.addEventListener('click', () => {
  description.classList.remove('js-hidden');
  description.classList.add('js-visible');
  cards.classList.remove('js-visible');
  cards.classList.add('js-hidden');
});