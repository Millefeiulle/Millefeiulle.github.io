// Hero Slider
$('.hero-slider').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 300,
    dots: true,
    arrows: true,
    fade: true,
    responsive: [{
        breakpoint: 600,
        settings: {
            arrows: false
        }
    }]
});
$('.hero-slider').slickAnimation();

// Item Slider
$('.items-container').slick({
    infinite: true,
    arrows: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            arrows: false
        }
    },
    {
        breakpoint: 525,
        settings: {
            slidesToShow: 1,
            arrows: false
        }
    }]
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
//scroll-up button//
$(window).on('scroll', function () {
    //.Scroll to a Specific Div
    if ($('#back-to-top').length) {
        var scrollToTop = $('#back-to-top'),
            scroll = $(window).scrollTop();
        if (scroll >= 200) {
            scrollToTop.fadeIn(200);
        } else {
            scrollToTop.fadeOut(100);
        }
    }
});
if ($('#back-to-top').length) {
    $('#back-to-top').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
}