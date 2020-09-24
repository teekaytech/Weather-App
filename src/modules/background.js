const Background = (() => {
  const change = (weather) => {
    const context = weather.trim().toLowerCase();
    if (context.includes('rain') || context.includes('shower')) {
      document.body.classList = 'rain-bg';
    } else if (context.includes('cloud')) {
      document.body.classList = 'cloud-bg';
    } else if (context.includes('clear')) {
      document.body.classList = 'clear-bg';
    } else if (context.includes('snow') || context.includes('ice')) {
      document.body.classList = 'snow-bg';
    } else if (context.includes('storm')) {
      document.body.classList = 'storm-bg';
    } else if (context.includes('sun')) {
      document.body.classList = 'sun-bg';
    } else if (context.includes('fog')) {
      document.body.classList = 'fog-bg';
    } else { document.body.classList = 'others-bg'; }
  };

  return { change };
})();

export default Background;