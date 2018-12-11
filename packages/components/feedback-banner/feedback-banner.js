// Feedback banner

var banner = document.querySelector('#nhsuk-feedback-banner');
var bannerCloseButton = document.querySelector('#nhsuk-feedback-banner-close');
var footer = document.getElementById('nhsuk-footer');

// taken from https://stackoverflow.com/a/22480938
function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  // Only completely visible elements return true:
  // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

document.addEventListener("DOMContentLoaded", function(){

  setTimeout(function () {
    if (typeof(banner) != 'undefined' && banner != null) {
      banner.style.display = "block";
    }
  }, 3000);

  var didScroll = false,
      timer = false;

  // set a timer when scrolling, so as not to be constantly calling the
  // isScrolledIntoView function and spiking CPU, to check when the footer
  // comes in to view, to make the banner not sticky but position it in the
  // normal flow of the page below the footer
  $(window).scroll(function() {
    if (!didScroll) {
      timer = setInterval(function() {
        if (didScroll) {
          didScroll = false;
          clearTimeout(timer);

          if (isScrolledIntoView(footer)) {
            banner.classList.add("js-inview")
          } else {
            banner.classList.remove("js-inview")
          }
        }
      }, 500);
    }
    didScroll = true;
  });

});

if (bannerCloseButton) {
  bannerCloseButton.addEventListener("click", function(){
    banner.style.display = "none";
  });
}
