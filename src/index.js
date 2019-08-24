const component = () => {
  const element = document.createElement('div');

  element.innerHTML = 'helloooo orange line';

  return element;
};

document.body.appendChild(component());
