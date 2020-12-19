//SLIDERS
if ($(".main__slider").length > 0) {
  $(".main__slider").slick({
    fade: true,
    speed: 1300,
    infinite: true,
    dots: true,
    arrows: false,
    accessibility: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  });
}

if ($(".slider-certificates").length > 0) {
  $(".slider-certificates").slick({
    speed: 1300,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    arrows: true,
    accessibility: false,
    autoplay: false,
    autoplaySpeed: 3000,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: false,
        },
      },
    ],
  });
}

if ($(".content-reviews__slider").length > 0) {
  $(".content-reviews__slider").slick({
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    dots: false,
    arrows: true,
    vertical: false,
    accessibility: false,
    autoplay: false,
    autoplaySpeed: 3000,
    touchMove: false,
  });

  var $status = $(".slider__counter");
  var $slickElement = $(".content-reviews__slider");

  $slickElement.on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + "/" + slick.slideCount);
    }
  );
}

let videos = document.querySelectorAll(".content-reviews__slider video");
$(".content-reviews__slider").on(
  "afterChange",
  function (event, slick, currentSlide) {
    videos.forEach((el) => {
      el.pause();
    });
  }
);
