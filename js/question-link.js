(() => {
  const refs = {
    openFaqBtn: document.querySelector('.question-btn'),

    faqLink: document.querySelector('.faq-note-link'),
  };

  refs.openFaqBtn.addEventListener('click', toggleFaqLink);

  function toggleFaqLink() {
    refs.faqLink.classList.toggle('visually-hidden');
  }
})();
