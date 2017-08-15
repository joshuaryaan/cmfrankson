var menuWidth = 450;

$(document).ready(function () {  
    
    $(".open").click(function(){
        $(".menu").animate({ 
            right:  "+=" + menuWidth,
            }, 500 );
        $(".blackout").fadeIn(400);
    });
    
    $(".close, .blackout").click(function(){
        $(".menu").animate({ 
            right:  "-=" + menuWidth,
            }, 500 );
        $(".blackout").fadeOut(400);
    });
    
    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
        gutter: '.gutter-sizer',
        horizontalOrder: true
    });
    
});