$(document).ready(function() {
        jQuery.scrollSpeed(100, 800);
        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $("header").addClass("scroll-down");
                $("header .row").removeClass("py-md-3");
            } else {
                $("header").removeClass("scroll-down");
                $("header .row").addClass("py-md-3");
            }
        });
        $("#btn-chat-onl").click(function() {
            $("#chat-onl").toggleClass("open");
        });
        $("#search").mouseenter(function(){
            $("#search form").stop().slideDown('fast');
        });
        $("#search").mouseleave(function(){
            $("#search form").stop().slideUp('fast');
        });
    });