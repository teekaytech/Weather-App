import './assets/css/main.scss';
import './assets/css/loader.scss';
import Weather from './modules/weatherApi';
import Dom from './modules/dom';

const start = () => {
  let details = '';
  const checkWeather = document.getElementById('find');
  const celciusButton = document.getElementById('cel');
  const farenheitButton = document.getElementById('far');

  checkWeather.addEventListener('click', async () => {
    if (Dom.getInput()) {
      await Weather.fetchInfo(Dom.getInput());
      details = Weather.output;
      Dom.prepareData();
    } else {
      Dom.blankError();
      return;
    }
    setTimeout(() => {
      if (details.status) {
        Dom.displayData(details);
      } else {
        Dom.displayError();
      }
    }, 1000);
  });

  celciusButton.addEventListener('click', () => {
    Dom.displayData(details, celciusButton.dataset.value);
  });

  farenheitButton.addEventListener('click', () => {
    Dom.displayData(details, farenheitButton.dataset.value);
  });
};

start();