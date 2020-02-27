$(".slider").slick( {
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    // slidesToShow: 5
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
})

$(".content").slick( {

    // slidesToShow: 5
    responsive: [
        {
            breakpoint: 1920,
            settings: "unslick"
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
})


