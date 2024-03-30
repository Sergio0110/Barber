const addPreload = (elem) => {
  elem.classList.add('preload')
};

const removePreload = (elem) => {
  elem.classList.remove('preload')
};

const statrtSlider = (slider) => {
  removePreload(slider);
}

const initSlider = () => {
  const slider = document.querySelector('.slider');

  addPreload(slider);
  window.addEventListener('load', () => {
    statrtSlider(slider);
  });

};

initSlider();
