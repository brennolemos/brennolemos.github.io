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

// Formulario

$('.formphp').on('submit', function() {
	var emailContato = "contato@delfosim.com"; // Escreva aqui o seu e-mail

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
		
			if( $('[name="leaveblank"]').val().length != 0 ) {
				$('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
			} else {
			
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Em breve eu entro em contato com você. Abraços.</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			};
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});

