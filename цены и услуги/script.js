const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

function myFunction() {
    popUp.classList.add('active');
  }
closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
} )