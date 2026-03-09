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

