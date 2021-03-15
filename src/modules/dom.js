import Background from './background';
import Logic from './logic';

const Dom = (() => {
  const input = document.getElementById('city');
  const inputErr = document.getElementById('blank');
  const details = document.getElementById('wDetails');
  const errorCont = document.getElementById('error');
  const cityName = document.getElementById('city-name');
  const weather = document.getElementById('main');
  const temp = document.getElementById('tmp');
  const sunrise = document.getElementById('rise');
  const sunset = document.getElementById('set');
  const minTemp = document.getElementById('min');
  const maxTemp = document.getElementById('max');
  const humidity = document.getElementById('hum');
  const realFeel = document.getElementById('real');
  const celUnit = document.getElementById('C').innerText;
  const farUnit = document.getElementById('F').innerText;
  const loader = document.querySelector('.loader');

  const getInput = () => {
    if (input.value === '') {
      return false;
    }
    return input.value;
  };

  const prepareData = () => {
    Logic.render(details, 'none');
    Logic.render(errorCont, 'none');
    Logic.render(loader, 'inline-block');
  };

  const displayError = (message = 'Hmn... city not found!') => {
    errorCont.innerText = message;
    Logic.render(errorCont, 'block');
    Logic.render(loader, 'none');
    Logic.render(inputErr, 'none');
    document.body.classList = 'others-bg';
  };

  const blankError = () => {
    inputErr.style.display = 'block';
    Logic.render(errorCont, 'none');
    Logic.render(details, 'none');
  };

  const displayData = (wdata, unit = 'C') => {
    Background.change(wdata.main);
    cityName.innerText = wdata.name;
    weather.innerText = wdata.main;
    sunrise.innerText = Logic.getDate(wdata.sunrise);
    sunset.innerText = Logic.getDate(wdata.sunset);
    humidity.innerText = wdata.humidity;
    temp.innerText = Logic.doValue(unit, wdata.temp, celUnit, farUnit);
    realFeel.innerText = Logic.doValue(unit, wdata.feel, celUnit, farUnit);
    minTemp.innerText = Logic.doValue(unit, wdata.minTemp, celUnit, farUnit);
    maxTemp.innerText = Logic.doValue(unit, wdata.maxTemp, celUnit, farUnit);
    Logic.render(details, 'block');
    Logic.render(errorCont, 'none');
    Logic.render(loader, 'none');
    Logic.render(inputErr, 'none');
  };

  return {
    loader,
    displayData,
    displayError,
    prepareData,
    getInput,
    blankError,
  };
})();

export default Dom;
