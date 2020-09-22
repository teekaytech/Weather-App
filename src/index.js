import './assets/css/main.scss';
import './assets/css/loader.scss';
import Weather from './modules/fetch';
import Dom from './modules/dom';


Dom.render();

const city = document.getElementById('city');

city.addEventListener('keyup', async () => {
  await Weather.fetchInfo(city.value);
  Dom.displayData(Weather.output);
});
