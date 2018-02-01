jQuery.scrollSpeed(100, 800);

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $("header").addClass("scroll-down");
        } else {
            $("header").removeClass("scroll-down");
        }
    });
    $("#btn-chat-onl").click(function() {
        $("#chat-onl").toggleClass("open");
    });
});