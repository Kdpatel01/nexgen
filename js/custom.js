$(document).ready(function () {

  $("#slider").owlCarousel(
    {
      items: 1,
      loop: true,
      smartSpeed: 2000,
      dots: true,
      touchDrag: false,
    }
  );

  $("#newslider").owlCarousel(
    {
      items: 3,
      margin: 30,
      loop: true,
      smartSpeed: 2000,
      dots: false,
      touchDrag: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      },
    }
  );

  new WOW().init();

  var owl = $('.owl-carousel');
  owl.owlCarousel();
  owl.on('changed.owl.carousel', function (event) {
    new WOW().init();
  })


  // validation form start

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })

  // validation form end

  $(window).scroll(function () {
    var h = $(window).scrollTop();

    if (h > 100) {
      $('header').addClass('scroll-fixed');
      $('.sticky_icon').fadeIn(2000);
    } else {
      $('header').removeClass('scroll-fixed');
      $('.sticky_icon').hide();
    }
  })

  $('.sticky_icon').hide();
  $('.sticky_icon').click(function () {
    $('html,body').animate({ scrollTop: 0})
  })

  // page loader start

  setTimeout(() => {
    $('.loading').fadeOut(600);
  },1500)

 // page loader end
 AOS.init();

})
