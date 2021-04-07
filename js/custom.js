$(function(){
  $(window).on('scroll', function(){

    var scrolling = $(this).scrollTop();      
    if(scrolling > 500){
      $('.uppish').fadeIn(500)
    }
    else{
        $('.uppish').fadeOut(500)
    }
    });

    $('.uppish').click(function(){
      $('html,body').animate({scrollTop:0},600)
    });

    
$('.service-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    arrows:false,
    asNavFor: '.service-counter-content-slide',
    speed:2000,
    responsive: [

      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          pauseOnHover:false,

        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          pauseOnHover:false,

        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          pauseOnHover:false,

        }
      },
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          pauseOnHover:false,

        }
      },
      {
        breakpoint: 1399.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          pauseOnHover:false,

        }
      },


    ]
  });
  $('.service-counter-content-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.service-slide',
    dots:false,
    arrows:false,
    fade:true,
    autoplay:true,
    pauseOnHover:false,
  });


  $('.department-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots:false,
    arrows:false,
    pauseOnHover:false,
    speed:2000,
    responsive: [

      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          pauseOnHover:false,

        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          pauseOnHover:false,

        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          pauseOnHover:false,

        }
      },
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          pauseOnHover:false,

        }
      },


    ]
  });


  $('.doctors-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots:false,
    arrows:false,
    pauseOnHover:false,
    speed:3000,
    responsive: [

      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          autoplay: true,
          pauseOnHover:false,

        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          pauseOnHover:false,
          speed:3000,
          autoplaySpeed: 2500,

        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          pauseOnHover:false,

        }
      },


    ]
  });
  $('.counter-item').counterUp({
    delay: 10,
    time: 1000
  });
  $('.testimonial-slide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots:false,
    arrows:false,
    pauseOnHover:false,
    speed:2000,
    responsive: [

      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          autoplay: true,
          pauseOnHover:false,

        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          pauseOnHover:false,
          speed:3000,
          vertical:true,
          
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          pauseOnHover:false,

        }
      },
    ]   
  });
  var containerEl = document.querySelector('.rokibul');

  var mixer = mixitup(containerEl);
})