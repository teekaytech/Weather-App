const WeatherData = (() => {
  const key = '96941ab728aca2fde601358e7f439b64';
  const fetchData = async (city) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
        { mode: 'cors' },
      );
      return response.json().then((data) => data);
    } catch (error) { return false; }
  };

  const prepareData = (city) => {
    const output = {};
    fetchData(city).then((data) => {
      output.main = data.weather[0].main;
      output.temp = data.main.temp;
      output.minTemp = data.main.temp_min;
      output.maxTemp = data.main.temp_max;
      output.humidity = data.main.humidity;
      output.sunrise = data.sys.sunrise;
      output.sunset = data.sys.sunset;
      output.timezone = data.timezone;
    });
    console.log('preparing');
    return output;
  };

  return { prepareData };
})();

export default WeatherData;