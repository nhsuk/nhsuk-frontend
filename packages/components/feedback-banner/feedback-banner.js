// Feedback banner

var banner = document.querySelector('#nhsuk-feedback-banner');
var bannerCloseButton = document.querySelector('#nhsuk-feedback-banner-close');

document.addEventListener("DOMContentLoaded", function(){
  setTimeout(function () {
    if (typeof(banner) != 'undefined' && banner != null) {
      banner.style.display = "block";
    }
  }, 3000);
});

bannerCloseButton.addEventListener("click", function(){
  banner.style.display = "none";
});
