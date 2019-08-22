function nhsuk_card () {
  document.querySelectorAll('.clickable-card').forEach((promo) => { /* [1] */
    promo.classList.add('nhsuk-promo__link-wrapper'); /* [2] */
    promo.addEventListener('click', () => { /* [3] */
      promo.querySelector('a').click();
    });
  });
}

export default nhsuk_card;