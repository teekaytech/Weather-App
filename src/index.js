import './assets/css/main.scss';
import './assets/css/loader.scss';
import FetchData from './modules/fetch';


window.onload = () => {
  console.log(FetchData.prepareData('ankara'));
};
