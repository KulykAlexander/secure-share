(() => {
  const refs = {
    openOptionsBtn: document.querySelector('[data-options-open]'),
    // closeMenuBtn: document.querySelector('[data-menu-close]'),
    otions: document.querySelector('[data-options]'),
  };

  refs.openOptionsBtn.addEventListener('click', toggleOptions);

  function toggleOptions() {
    refs.otions.classList.toggle('is-hidden');
    if (refs.otions.classList.contains('is-hidden')) {
      refs.otions.style.height = '0';
      refs.openOptionsBtn.firstElementChild.textContent = 'Show';
    } else {
      refs.otions.style.height = 'auto';
      refs.openOptionsBtn.firstElementChild.textContent = 'Disabled';
    }
  }
})();
