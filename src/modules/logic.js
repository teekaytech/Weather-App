const Logic = (() => {
  const pNum = (num) => parseInt(num, 10);
  const celcius = (number) => Math.ceil(pNum(number) - 273.15);
  const faren = (number) => Math.ceil(celcius(number) * (9 / 5) - 32);
  const getDate = (data) => new Date(parseInt(data, 10) * 1000).toGMTString();

  const doValue = (currentUnit, data, celUnit, farUnit) => {
    const val = currentUnit === 'C'
      ? `${celcius(data)} ${celUnit}`
      : `${faren(data)} ${farUnit}`;
    return val;
  };

  const render = (context, value) => {
    context.style.display = value;
  };

  return {
    doValue, render, getDate,
  };
})();

export default Logic;