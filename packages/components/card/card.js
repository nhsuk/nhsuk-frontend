function nhsuk_card () {
  document.querySelectorAll('.clickable-card').forEach((card) => { /* [1] */
    card.classList.add('nhsuk-card__link-wrapper'); /* [2] */
    card.addEventListener('click', () => { /* [3] */
      card.querySelector('a').click();
    });
  });
}

export default nhsuk_card;