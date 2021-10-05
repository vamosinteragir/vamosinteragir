
  $('.parceiros').slick({
  	infinite: true,
  	speed: 600,
  	slidesToShow: 6,
  	slidesToScroll: 3,
  	variableWidth: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
    ]
  });

  $('.obras').slick({
  	infinite: true,
  	speed: 900,
  	slidesToShow: 3,
  	slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
    ]
  });
