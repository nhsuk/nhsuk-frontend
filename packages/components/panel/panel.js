export default () => {
  // Loops through dom and finds all elements with clickable-panel class
  document.querySelectorAll('.clickable-panel').forEach((panel) => {
    // Check if panel has a link within it
    if (panel.querySelector('a') !== null) {
      // Adds the class to provide cursor styling on hover
      panel.classList.add('nhsuk-panel__link-wrapper');
      // Clicks the link within the heading to navigate to desired page
      panel.addEventListener('click', () => {
        panel.querySelector('a').click();
      });
    }
  });
};
