var menuWidth = 450;

$(document).ready(function () {  
    
    $(".menuOpen").click(function(){
        $(".menu").animate({ 
            right:  "+=" + menuWidth,
            }, 500 );
        $(".blackout").fadeIn(400);
    });
    
    $(".close").click(function(){
        $(".menu").animate({ 
            right:  "-=" + menuWidth,
            }, 500 );
        $(".blackout").fadeOut(400);
    });
    
});