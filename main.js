var savedWidth;

(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this; // for chaining...
    }
})(jQuery);

$(document).scroll(function(event) {
    $("#backgroundImage").css("background-position", "center " + "calc(50% + " + $(window).scrollTop() / 2 + "px)");
});

var changeNav = function() {
    if ($(window).width() < savedWidth) {
        $("#navbar ul li").css('display', "block");
    } else {
        $("#navbar ul li").css('display', "inline-block");
        $("#navbar ul li ul li").css('display', "block");
    }
}

$(window).resize(function() {
    changeNav();
});

$(document).ready(function () {
    $("#navBar").find(".nav").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        }, 1000);
    });
    
    $("#learnmore").click(function(e){
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        }, 1000);
    });
    
    savedWidth = $("#navBar img").width() + $("#navBar ul").width() + 200;
    
    changeNav();
});
