const body = document.body;
const toggleSwitch = document.querySelector('.toggle-switch');
const circle = document.querySelector('.circle');

toggleSwitch.addEventListener('click', () => {
  toggleSwitch.classList.toggle('active');
  circle.classList.toggle('active');
  body.classList.toggle('light-theme');
  body.classList.toggle('dark-theme');
})