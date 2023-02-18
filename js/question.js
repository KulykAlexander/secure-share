(() => {
  const refs = {
    openFaqBtn: document.querySelector('.question-btn'),

    faq: document.querySelector('.faq'),
  };

  refs.openFaqBtn.addEventListener('click', toggleFaq);

  function toggleFaq() {
    refs.faq.classList.toggle('visually-hidden');
  }
})();
