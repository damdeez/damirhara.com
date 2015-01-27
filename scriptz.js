// scriptz.js by @damdeez ///

// Auto resize #top section to fit users browser 

var autoResizeSection = function() {
    document.getElementById("top").style.height = window.innerHeight + "px";
    }
    window.onresize = autoResizeSection;
autoResizeSection(); 

/* $(function() {
    $("#top").height(window.innerHeight + "px");
}); */

setInterval(function() {
        $("#arrowdown").toggleClass("animated bounce");
    }, 2000);

// jQuery goodness

$(function() {
    $(".click").click(function() {
        $("html, body").animate({
            scrollTop: $("#portfolio").offset().top}, 500);
    });
    $("#backtop").hide();

    $(this).scroll(function() {
        if ($(this).scrollTop() > 1200) {
            $("#backtop").css("display", "inline");
        } else {
            $("#backtop").css("display", "none");
        }
    });

    $("#backtop").click(function() {
        $("html, body").animate({scrollTop: 0}, 500);
    });

});