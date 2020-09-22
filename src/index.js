import './assets/css/main.scss';
import './assets/css/loader.scss';
import Weather from './modules/fetch';
import Dom from './modules/dom';


Dom.render();

Dom.input.addEventListener('keyup', async () => {
  await Weather.fetchInfo(Dom.input.value);
  setTimeout(() => {
    Dom.displayData(Weather.output, Dom.input.value);
  }, 1000);
});
