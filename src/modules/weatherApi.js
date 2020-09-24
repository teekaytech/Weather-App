const Weather = (() => {
  const key = '96941ab728aca2fde601358e7f439b64';
  const output = {};

  const prepareData = (rawData) => {
    if (rawData.cod === '404') {
      output.status = false; return;
    }
    output.status = true;
    output.name = `${rawData.name}, ${rawData.sys.country}`;
    output.main = rawData.weather[0].main;
    output.temp = rawData.main.temp;
    output.minTemp = rawData.main.temp_min;
    output.maxTemp = rawData.main.temp_max;
    output.humidity = rawData.main.humidity;
    output.sunrise = rawData.sys.sunrise;
    output.sunset = rawData.sys.sunset;
    output.feel = rawData.main.feels_like;
  };

  const fetchInfo = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
        { mode: 'cors' },
      );
      const data = await response.json();
      prepareData(data);
    } catch (error) {
      prepareData(error);
    }
  };

  return { fetchInfo, output };
})();

export default Weather;