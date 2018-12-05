/**
 * Feedback banner
 *
 * Javascript to show and hide the feedback banner, showing
 * the banner can be delayed by a number of seconds.
 *
 * The default delay before showing the feedback banner is
 * 3000ms (3 seconds), this can be changed.
 *
 * Usage:
 * feedbackBanner.init(3000);
 */

const banner = document.querySelector('#nhsuk-feedback-banner');
const bannerCloseButton = document.querySelector('#nhsuk-feedback-banner-close');

function showBanner() {
  if (banner) {
    banner.style.display = 'block';
  }
}

function hideBanner() {
  if (banner) {
    banner.style.display = 'none';
  }
}

function handleBannerDisplay(delay) {
  setTimeout(() => {
    showBanner();
  }, delay);
}

function handleBannerClose() {
  if (bannerCloseButton) {
    bannerCloseButton.addEventListener('click', hideBanner);
  }
}

function feedbackBanner(delay) {
  handleBannerDisplay(delay);
  handleBannerClose();
}

export default feedbackBanner;
