$(window).scroll(function() {
      var topo = $(window).scrollTop();
      if (topo > 30) {
          $('.header').css({"background-color": "#131e28"});
          $('.header').css({"border-bottom": "1px solid #999"});
          $('.nav.mobile-menu.active').css({"background-color": "#131e28"});
           $('.nav.mobile-menu.active').css({"border-bottom": "1px solid #999"});
      } else {
        $('.header').css({"background-color": "transparent"});
        // $('.menu-nav.mobile-menu.active').css({"background-color": "transparent"});

         $('.header').css({"border": "none"});
        //  $('.menu-nav.mobile-menu.active').css({"box-shadow": "none"});
      }
  });

$('.mobile-btn').click(function(){
  $(this).toggleClass('active');
  $('.mobile-menu').toggleClass('active');
});



$('.counter').each(function () {
              $(this).prop('Counter',0).animate({
                  Counter: $(this).text()
              }, {
                  duration: 9000,
                  easing: 'swing',
                  step: function (now) {
                      $(this).text(Math.ceil(now));
                  }
              });
});

// $(window).scroll(function() {
//       var topo = $(window).scrollTop();
//       if (topo > 720) {
//       $('about span').addClass('ativo');
//       } else {
//        $('.counter').removeClass('ativo');
//       }
//   });



