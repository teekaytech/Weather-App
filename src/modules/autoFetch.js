import Weather from "./weatherApi";
import Dom from "./dom";

const AutoFetch = (() => {
  const success = async (position) => {
    await Weather.fetchWithCoord(
      position.coords.latitude,
      position.coords.longitude
    );
    await Weather.output
    Dom.displayData(await Weather.output);
  };
  const failure = () => {
    Dom.displayError('Auto-location service blocked!');
  };

  Dom.prepareData();
  navigator.geolocation.getCurrentPosition(success, failure);
})();

export default AutoFetch;