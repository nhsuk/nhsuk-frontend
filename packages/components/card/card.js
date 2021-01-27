export default () => {
  // Loops through dom and finds all elements with nhsuk-card--clickable class
  document.querySelectorAll('.nhsuk-card--clickable').forEach((card) => {
    // Check if card has a link within it
    if (card.querySelector('a') !== null) {
      // Clicks the link within the heading to navigate to desired page
      card.addEventListener('click', () => {
        card.querySelector('a').click();
      });
    }
  });
};
