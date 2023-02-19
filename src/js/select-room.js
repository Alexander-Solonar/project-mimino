const containerGuestArrive = document.querySelector('#container-guest-arrive');
const selectArrive = document.querySelector('#select-arrive');
const inputDateArrive = document.querySelector('#input-date-arrive');
const optionsDateArrive = document.querySelectorAll('.option-date-arrive');

selectArrive.onclick = () => {
  containerGuestArrive.classList.toggle('active');
};

optionsDateArrive.forEach(e => {
  e.addEventListener('click', () => {
    inputDateArrive.value = e.innerText;
    containerGuestArrive.classList.remove('active');
    optionsDateArrive.forEach(e => {
      e.classList.remove('selected');
    });
    e.classList.add('selected');
  });
});
/////////////////////////////////////////////////////////
const containerTypeRoom = document.querySelector('#container-type-room');
const selectRoom = document.querySelector('#select-room');
const inputRoom = document.querySelector('#input-room');
const optionsRoom = document.querySelectorAll('.option-room');

selectRoom.onclick = () => {
  containerTypeRoom.classList.toggle('active');
};

optionsRoom.forEach(e => {
  e.addEventListener('click', () => {
    inputRoom.value = e.innerText;
    containerTypeRoom.classList.remove('active');
    optionsRoom.forEach(e => {
      e.classList.remove('selected');
    });
    e.classList.add('selected');
  });
});
// |||||||||||||||||||||||||||||||||||||||||||||||||||||
const containerGuestExit = document.querySelector('#container-guest-exit');
const selectDateExit = document.querySelector('#select-exit');
const inputDateExit = document.querySelector('#input-date-exit');
const optionsDateExit = document.querySelectorAll('.option-date-exit');

selectDateExit.onclick = () => {
  containerGuestExit.classList.toggle('active');
};

optionsDateExit.forEach(e => {
  e.addEventListener('click', () => {
    inputDateExit.value = e.innerText;
    containerGuestExit.classList.remove('active');
    optionsDateExit.forEach(e => {
      e.classList.remove('selected');
    });
    e.classList.add('selected');
  });
});
