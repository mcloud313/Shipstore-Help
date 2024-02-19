const toggleButton = document.querySelector('.js-toggle');
const navContent = document.querySelector('.nav-content');

toggleButton.addEventListener('click', () => {
  navContent.classList.toggle('active');
});