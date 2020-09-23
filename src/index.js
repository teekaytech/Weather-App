import './assets/css/main.scss';
import './assets/css/loader.scss';
import Weather from './modules/fetch';
import Dom from './modules/dom';

let details = '';
const celciusButton = document.getElementById('cel');
const farenheitButton = document.getElementById('far');
const loader = document.querySelector('.loader');

Dom.input.addEventListener('keyup', async () => {
  await Weather.fetchInfo(Dom.input.value);
  details = Weather.output;
  loader.style.display = 'inline-block';
  setTimeout(() => {
    Dom.displayData(details);
    loader.style.display = 'none';
  }, 1500);
});

celciusButton.addEventListener('click', () => {
  Dom.displayData(details, celciusButton.dataset.value);
});

farenheitButton.addEventListener('click', () => {
  Dom.displayData(details, farenheitButton.dataset.value);
});
