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

//scroll up button//
const btn = document.querySelector(".scroll-up-btn");

btn.addEventListener("click",  () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
