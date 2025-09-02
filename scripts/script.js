$(document).ready(function () {
  $(".hero-carousel").slick({
    slidesToShow: 1,
    dots: false,
    centerMode: true,
  });

  $(".project-carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    dots: false,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".service-carousel").slick({
    slidesToShow: 1,
    dots: false,
    centerMode: false,
    fade: true,
  });

  $(".service-carousel").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      if (nextSlide == 0) {
        $("#strauss-button").removeClass("active");
        $("#bore-button").addClass("active");
        $("#horizontal-button").removeClass("active");
      } else if (nextSlide == 1) {
        $("#strauss-button").addClass("active");
        $("#bore-button").removeClass("active");
        $("#horizontal-button").removeClass("active");
      } else {
        $("#strauss-button").removeClass("active");
        $("#bore-button").removeClass("active");
        $("#horizontal-button").addClass("active");
      }
    }
  );

  $(".tech-carousel").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2700,
    autoplaySpeed: 0,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    cssEase: "linear",
  });
});

function onServiceButtonClicked(buttonName) {
  if (buttonName === "strauss-button") {
    $(".service-carousel").slick("slickGoTo", 1);
  } else if (buttonName === "bore-button") {
    $(".service-carousel").slick("slickGoTo", 0);
  } else if (buttonName === "horizontal-button") {
    $(".service-carousel").slick("slickGoTo", 2);
  }
}
