
const details_btn = document.querySelector('#js-btn-details');
const enquiry_btn = document.querySelector('#js-btn-query');
const description = document.querySelector('#js-btn-info');
const form = document.querySelector('#js-btn-form');


enquiry_btn.addEventListener('click', () => {
  description.classList.add('js-hidden');
  description.classList.remove('js-visible');
  form.classList.remove('js-hidden');
  form.classList.add('js-visible');
});

details_btn.addEventListener('click', () => {
  description.classList.remove('js-hidden');
  description.classList.add('js-visible');
  form.classList.remove('js-visible');
  form.classList.add('js-hidden');
});