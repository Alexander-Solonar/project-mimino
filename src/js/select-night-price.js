const containerQuantityNight = document.querySelector(
  '#container-quantity-night'
);
const selectNight = document.querySelector('#select-night');
const inputNight = document.querySelector('#input-night');
const optionsNight = document.querySelectorAll('.option-night');

selectNight.onclick = () => {
  containerQuantityNight.classList.toggle('active');
};

optionsNight.forEach(e => {
  e.addEventListener('click', () => {
    inputNight.value = e.innerText;
    containerQuantityNight.classList.remove('active');
    optionsNight.forEach(e => {
      e.classList.remove('selected');
    });
    e.classList.add('selected');
  });
});
