$('nav a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500)
});

$('.introducao a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500)
});

Visibility.onVisible(function(){
    setTimeout(function() {
        $(".introducao h1").addClass("animated fadeInDown")
    }, 400);
    
     setTimeout(function() {
        $("blockquote").addClass("animated fadeInDown")
    }, 800);
    
     setTimeout(function() {
        $(".introducao .btn").addClass("animated fadeInDown")
    }, 1200);
    
    setTimeout(function() {
        $(".animar").addClass("animated fadeInDown")
    }, 1600);
});