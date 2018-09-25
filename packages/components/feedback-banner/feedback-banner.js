var banner = document.getElementById("nhsuk-feedback-banner");

document.addEventListener("DOMContentLoaded", function(){
  setTimeout(function () {
    if (typeof(banner) != 'undefined' && banner != null) {
      banner.style.display = "block";
    }
  }, 3000);
});

function hideBanner() {
  banner.style.display = "none";
}
