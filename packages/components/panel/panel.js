export default () => {
  document.querySelectorAll('.clickable-panel').forEach((card) => { /* [1] */
    if (card.querySelector('a') !== null) {
      card.classList.add('nhsuk-panel__link-wrapper'); /* [2] */
      card.addEventListener('click', () => { /* [3] */
        card.querySelector('a').click();
      });
    }
  });
};
