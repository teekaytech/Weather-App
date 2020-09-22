import Elements from './elements';

const Dom = (() => {
  const mainCont = document.getElementById('content');
  const myLoader = Elements.tag('div', '', 'loader', 'loader');
  const { tag, formTag } = Elements;

  const simpleForm = () => {
    const fDiv = tag('div', '', 'simpleForm');
    fDiv.appendChild(tag('form'));
    fDiv.appendChild(formTag('input', '', 'city', 'city', 'text', 'Your location:'));
    return fDiv;
  };

  const weatherSection = () => {
    const wSection = tag('section', '', 'weather', 'weather');
    wSection.appendChild(myLoader);
    wSection.appendChild(tag('div', 'live', 'report', 'report'));
    return wSection;
  };

  // const toggleLoader = (loader) => {
  //   if (loader.style.display === 'none') {
  //     loader.syle.display = 'block';
  //   } else {
  //     loader.syle.display = 'none';
  //   }
  // };
  const displayData = wdata => {
    const dContainer = document.getElementById('report');
    dContainer.appendChild(tag('span', wdata.temp));
    console.log(dContainer);
  };


  const render = () => {
    mainCont.appendChild(tag('h1', "Let's check your weather today", 'head', 'head'));
    mainCont.appendChild(simpleForm());
    mainCont.appendChild(weatherSection());
  };

  return {
    render,
    mainCont,
    weatherSection,
    displayData,
  };
})();

export default Dom;
