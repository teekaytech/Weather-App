/* eslint-disable no-unused-expressions */
const Dom = (() => {
  const input = document.getElementById('city');
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

  const pNum = (num) => parseInt(num, 10);
  const celcius = (number) => Math.ceil(pNum(number) - 273.15);
  const faren = (number) => Math.ceil((celcius(number) * (9 / 5)) - 32);
  const getDate = (data) => new Date(parseInt(data, 10) * 1000).toGMTString();

  const displayData = (wdata, unit = 'C') => {
    cityName.innerText = wdata.name;
    weather.innerText = wdata.main;
    sunrise.innerText = getDate(wdata.sunrise);
    sunset.innerText = getDate(wdata.sunset);
    humidity.innerText = wdata.humidity;

    temp.innerText = unit === 'C'
      ? `${celcius(wdata.temp)} ${celUnit}`
      : `${faren(wdata.temp)} ${farUnit}`;

    realFeel.innerText = unit === 'C'
      ? `${celcius(wdata.feel)} ${celUnit}`
      : `${faren(wdata.feel)} ${farUnit}`;

    minTemp.innerText = unit === 'C'
      ? `${celcius(wdata.minTemp)} ${celUnit}`
      : `${faren(wdata.minTemp)} ${farUnit}`;

    maxTemp.innerText = unit === 'C'
      ? `${celcius(wdata.maxTemp)} ${celUnit}`
      : `${faren(wdata.maxTemp)} ${farUnit}`;
  };

  const toggleLoader = (l) => {
    l.style.display === 'none'
      ? (l.style.display = 'block') : (l.style.display = 'none');
  };

  return {
    input,
    displayData,
    toggleLoader,
  };
})();

export default Dom;
