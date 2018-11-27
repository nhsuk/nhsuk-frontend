// Feedback banner

const banner = document.querySelector('#nhsuk-feedback-banner');
const bannerCloseButton = document.querySelector('#nhsuk-feedback-banner-close');

function showBanner() {
  if (typeof(banner) != 'undefined' && banner != null) {
    setTimeout(function () {
      banner.style.display = "block";
    }, 3000);
  }
}

function hideBanner() {
  if (bannerCloseButton) {
    bannerCloseButton.addEventListener("click", function(){
      if (typeof(banner) != 'undefined' && banner != null) {
        banner.style.display = "none";
      }
    });
  }
}

export function init() {
  showBanner();
  hideBanner();
}
