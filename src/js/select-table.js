const containerQuantityPerson = document.querySelector(
  '#container-quantity-person'
);
const selectTable = document.querySelector('#select-table');
const inputTable = document.querySelector('#input-table');
const optionsPerson = document.querySelectorAll('.option-person');

selectTable.onclick = () => {
  containerQuantityPerson.classList.toggle('active');
};

optionsPerson.forEach(e => {
  e.addEventListener('click', () => {
    makeСhoice(containerQuantityPerson, inputTable, optionsPerson, e);
  });
});

const containerDateReservation = document.querySelector(
  '#container-date-reservation'
);
const selectDateReservation = document.querySelector(
  '#select-date-reservation'
);
const inputDateReservation = document.querySelector('#input-date-reservation');
const optionsDateReservation = document.querySelectorAll('.option-reservation');

selectDateReservation.onclick = () => {
  containerDateReservation.classList.toggle('active');
};

optionsDateReservation.forEach(e => {
  e.addEventListener('click', () => {
    makeСhoice(
      containerDateReservation,
      inputDateReservation,
      optionsDateReservation,
      e
    );
  });
});

function makeСhoice(container, input, options, e) {
  input.value = e.innerText;
  container.classList.remove('active');
  options.forEach(e => {
    e.classList.remove('selected');
  });
  e.classList.add('selected');
}
