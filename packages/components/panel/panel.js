function nhsuk_panel () {
  document.querySelectorAll('.clickable-panel').forEach((panel) => { /* [1] */
    panel.classList.add('nhsuk-panel__link-wrapper'); /* [2] */
    panel.addEventListener('click', () => { /* [3] */
      panel.querySelector('a').click();
    });
  });
}

// export default nhsuk_panel;
module.exports = nhsuk_panel;
