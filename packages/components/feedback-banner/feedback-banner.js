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
const footer = document.querySelector('#nhsuk-footer');

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

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;
  // Only completely visible elements return true:
  // const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

function unstickBanner() {
  let didScroll = false;
  let timer = false;
  // set a timer when scrolling, so as not to be constantly calling the
  // isScrolledIntoView function and spiking CPU, to check when the footer
  // comes in to view, to make the banner not sticky but position it in the
  // normal flow of the page below the footer
  if (!didScroll) {
    timer = setInterval(function () { // eslint-disable-line
      if (didScroll) {
        didScroll = false;
        clearTimeout(timer);
        if (isScrolledIntoView(footer)) {
          banner.classList.add('js-inview');
        } else {
          banner.classList.remove('js-inview');
        }
      }
    }, 500);
  }
  didScroll = true;
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

function handleBannerSticky() {
  window.addEventListener('scroll', unstickBanner);
}

function feedbackBanner(delay) {
  handleBannerDisplay(delay);
  handleBannerClose();
  handleBannerSticky();
}

export default feedbackBanner;
