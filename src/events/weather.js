const trackData = (() => {
  const weather = (data) => window.snowplow('trackStructEvent', 'weather', 'fetched-data', data.name, 'temperature', data.temp);

  const timer = (time) => window.snowplow('trackTiming', 'Time', 'Loading Time', time, '');

  return { weather, timer };
})();

export default trackData;