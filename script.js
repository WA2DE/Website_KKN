document.addEventListener('DOMContentLoaded', function () {
  var carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators'), {
    interval: 5000,
  });
});

$(document).ready(function () {
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(document).ready(function () {
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

function showPopup() {
  var popup = document.getElementById('myPopup');
  popup.classList.toggle('show');
}
