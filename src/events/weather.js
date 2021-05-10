const trackData = (() => {
  const weather = (data) => window.snowplow('trackStructEvent', 'weather', 'fetched-data', data.name, 'temperature', data.temp);

  return { weather };
})();

export default trackData;