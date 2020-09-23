/* eslint-disable no-unused-expressions */
const Dom = (() => {
  const input = document.getElementById('city');
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

  const pNum = (num) => parseInt(num, 10);
  const celcius = (number) => Math.ceil(pNum(number) - 273.15);
  const faren = (number) => Math.ceil(celcius(number) * (9 / 5) - 32);
  const getDate = (data) => new Date(parseInt(data, 10) * 1000).toGMTString();
  const getInput = () => input.value;

  function doValue(currentUnit, data) {
    const val = currentUnit === 'C'
      ? `${celcius(data)} ${celUnit}` : `${faren(data)} ${farUnit}`;
    return val;
  }

  const render = (context, value) => {
    context.style.display = value;
  };

  const prepareData = () => {
    render(details, 'none');
    render(errorCont, 'none');
    render(loader, 'inline-block');
  };

  const displayError = () => {
    errorCont.innerText = 'Hmn... city not found!';
    render(errorCont, 'block');
    render(loader, 'none');
  };

  const displayData = (wdata, unit = 'C') => {
    cityName.innerText = wdata.name;
    weather.innerText = wdata.main;
    sunrise.innerText = getDate(wdata.sunrise);
    sunset.innerText = getDate(wdata.sunset);
    humidity.innerText = wdata.humidity;
    temp.innerText = doValue(unit, wdata.temp);
    realFeel.innerText = doValue(unit, wdata.feel);
    minTemp.innerText = doValue(unit, wdata.minTemp);
    maxTemp.innerText = doValue(unit, wdata.maxTemp);
    render(details, 'block');
    render(errorCont, 'none');
    render(loader, 'none');
  };

  return {
    loader,
    getInput,
    displayData,
    displayError,
    prepareData,
  };
})();

export default Dom;
