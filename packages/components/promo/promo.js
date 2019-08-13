/* ==========================================================================
   COMPONENTS / #PROMO
   ========================================================================== */

/**
 * 1. Loops through all promos on the page
 * 2. Adds class to all promos for focus/hover styling 
 * 3. When Promo div is clicked JavaScript clicks the <a>
 */

function nhsuk_promo() {
  document.querySelectorAll('.nhsuk-promo').forEach((promo) => { /* [1] */
    promo.classList.add('nhsuk-promo__link-wrapper'); /* [2] */
    promo.addEventListener('click', () => { /* [3] */
      promo.querySelector('a').click();
    });
  });
}

export default nhsuk_promo;