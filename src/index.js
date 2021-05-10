import './assets/css/main.scss';
import './assets/css/loader.scss';
import Weather from './modules/weatherApi';
import Dom from './modules/dom';
import trackData from './events/weather';

const start = async () => {
  let details = '';
  let loadTime = 0;
  const checkWeather = document.getElementById('find');
  const celciusButton = document.getElementById('cel');
  const farenheitButton = document.getElementById('far');

  window.snowplow('enableLinkClickTracking');
  window.snowplow('trackPageView');

  (() => {
    const success = async (position) => {
      await Weather.fetchWithCoord(
        position.coords.latitude,
        position.coords.longitude,
      );
      details = await Weather.output;
      Dom.displayData(details);
    };

    const failure = () => {
      Dom.displayError('Auto-location service blocked!');
    };

    Dom.prepareData();

    navigator.geolocation.getCurrentPosition(success, failure);
  })();

  checkWeather.addEventListener('click', async () => {
    if (Dom.getInput()) {
      Dom.prepareData();
      loadTime = Date.now();
      await Weather.fetchInfo(Dom.getInput());
      details = await Weather.output;
      if (details.status) {
        trackData.timer(Date.now() - loadTime);
        trackData.weather(details);
        Dom.displayData(details);
      } else {
        Dom.displayError();
      }
    } else {
      Dom.blankError();
    }
  });

  celciusButton.addEventListener('click', () => {
    Dom.displayData(details, celciusButton.dataset.value);
  });

  farenheitButton.addEventListener('click', () => {
    Dom.displayData(details, farenheitButton.dataset.value);
  });
};

start();