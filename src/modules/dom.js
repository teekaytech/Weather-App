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
  const timezone = document.getElementById('time');
  const celciusButton = document.getElementById('cel');
  const farenheitButton = document.getElementById('far');

  const displayData = (wdata) => {
    cityName.innerText = wdata.name;
    weather.innerText = wdata.main;
    temp.innerText = wdata.temp;
    sunrise.innerText = wdata.sunrise;
    sunset.innerText = wdata.sunset;
    minTemp.innerText = wdata.minTemp;
    maxTemp.innerText = wdata.maxTemp;
    humidity.innerText = wdata.humidity;
    timezone.innerText = wdata.timezone;
  };

  // const toggleLoader = (loader) => {
  //   if (loader.style.display === 'none') {
  //     loader.syle.display = 'block';
  //   } else {
  //     loader.syle.display = 'none';
  //   }
  // };

  const render = () => {};

  return {
    render,
    input,
    displayData,
  };
})();

export default Dom;
