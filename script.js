// Flip cards no mobile
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('focused');
    });
  });
}

// Controle abas
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    // Remover active
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });

    contents.forEach(c => c.classList.remove('active'));

    // Ativar aba clicada e seção
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');
    contents[i].classList.add('active');
  });

  // Navegação por teclado entre abas
  tab.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      let newIndex;

      if (e.key === 'ArrowRight') {
        newIndex = (i + 1) % tabs.length;
      } else {
        newIndex = (i - 1 + tabs.length) % tabs.length;
      }

      tabs[newIndex].focus();
      tabs[newIndex].click();
    }
  });

});
if (isTouchDevice) {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault(); // pode ajudar a evitar conflito
      card.classList.toggle('focused');
    });
  });
}
