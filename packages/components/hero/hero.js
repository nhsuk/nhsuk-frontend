function randomImage() {
  var images = [
      'https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-1.jpg',
      'https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-2.jpg',
      'https://www.nhs.uk/static/nhsuk_shared/img/homepage/hero-3.jpg',
      'https://assets.nhs.uk/prod/images/hero-4.original.jpg',
      'https://assets.nhs.uk/prod/images/hero-5.original.jpg',
  ];

  var size = images.length;
  var x = Math.floor(size * Math.random());
  var element = document.getElementsByClassName('nhsuk-hero--image');

  if (element.length > 0) {
      element[0].style["background-image"] = "url(" + images[x] + ")";
  }
}

document.addEventListener("DOMContentLoaded", randomImage);
