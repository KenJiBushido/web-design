// slick slide
$(document).ready(function () {
  $(".banner-slick").slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    fade: true,
    cssEase: "linear",
  });
});

// sticky menu
window.onscroll = function () {
  isStick();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function isStick() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// scroll to animated count
$(window).scroll(whenScroll);
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function whenScroll() {
  if (isScrolledIntoView($("#numbers")) && !viewed) {
    viewed = true;
    $(".numb").each(function () {
      $(this).animate(
        {
          Counter: $(this).attr("data-value"),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
    });
  }
}
