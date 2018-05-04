
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
    $("#search").mouseenter(function(){
        $("#search form").stop().slideDown('fast');
    });
    $("#search").mouseleave(function(){
        $("#search form").stop().slideUp('fast');
    });
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    });
});