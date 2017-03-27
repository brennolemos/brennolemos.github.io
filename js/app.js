$(document).ready(function(){
  /*$('nav a').click(function(e){
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
  });*/
  $(window).scroll(function() {
      var topo = $(window).scrollTop();
      if (topo > 100) {
          $('.header').css({"background-color": "#00315a"});
      } else {
        $('.header').css({"background-color": "transparent"});
      }
  });
  

  function filterPath(string) {
  return string
  .replace(/^\//,'')
  .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
  .replace(/\/$/,'');
  }
  $('a[href*=#]').each(function() {
  if ( filterPath(location.pathname) == filterPath(this.pathname)
  && location.hostname == this.hostname
  && this.hash.replace(/#/,'') ) {
  var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
  var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
  if ($target) {
  var targetOffset = $target.offset().top;
  $(this).click(function() {
  $('html, body').animate({scrollTop: targetOffset}, 400);
  return false;
  });
  }
  }
  });

  
  // Mudar para active o menu de acordo com a área
 
});



