function checkBackgroundAttachment() {
  const jumbotron = document.querySelector('.jumbotron');
  if (window.innerWidth <= 768) {
    jumbotron.style.backgroundAttachment = 'scroll';
  } else {
    jumbotron.style.backgroundAttachment = 'fixed';
  }
}

// Check on initial load
checkBackgroundAttachment();

// Check on window resize
window.addEventListener('resize', checkBackgroundAttachment);
