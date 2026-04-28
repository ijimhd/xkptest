const dropContainer = document.getElementById('servicesDropdown');
const mainLink = dropContainer.querySelector('.nav-link');

// Toggle on click
mainLink.addEventListener('click', (e) => {
  e.preventDefault(); // Stop the link from following the URL
  dropContainer.classList.toggle('is-active');
});

// Close when clicking outside
window.addEventListener('click', (e) => {
  if (!dropContainer.contains(e.target)) {
    dropContainer.classList.remove('is-active');
  }
});