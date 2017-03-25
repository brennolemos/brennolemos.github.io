$(document).ready(function(){
  $('nav a').click(function(e){
      e.preventDefault();
      var id = $(this).attr('href'),
          targetOffset = $(id).offset().top,
          menuHeight = $('nav').innerHeight();
      $('html, body').animate({
          scrollTop: targetOffset - menuHeight
      }, 500)
  });

  $('.intro a').click(function(e){
      e.preventDefault();
      var id = $(this).attr('href'),
          targetOffset = $(id).offset().top,
          menuHeight = $('nav').innerHeight();
      $('html, body').animate({
          scrollTop: targetOffset - menuHeight
      }, 500)
  });
  $(window).scroll(function() {
      var topo = $(window).scrollTop();
      if (topo > 100) {
          $('.header').css({"background-color": "#00315a"});
      } else {
        $('.header').css({"background-color": "transparent"});
      }
  });
  
  // Mudar para active o menu de acordo com a área
 
});



