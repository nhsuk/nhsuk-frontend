export default () => {
  // Loops through dom and finds all elements with nhsuk-card--clickable class
  document.querySelectorAll('.nhsuk-card--clickable').forEach((panel) => {
    // Check if panel has a link within it
    if (panel.querySelector('a') !== null) {
      // Clicks the link within the heading to navigate to desired page
      panel.addEventListener('click', () => {
        panel.querySelector('a').click();
      });
    }
  });
};
