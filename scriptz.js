// scriptz.js by @damdeez //

/* var autoResizeSection = function() {
    document.getElementById("top").style.height = window.innerHeight + "px";
    }
    window.onresize = autoResizeSection;
autoResizeSection(); */

// Auto resize #top section to fit users browser

$(function() {
    $("#top").height(window.innerHeight + "px");
});

setInterval(function() {
    $("#arrowdown").toggleClass("animated shake");
    $("#next-example").toggleClass("animated pulse");
}, 2000);

$(document).ready(function() {
    //$("#profile_pic").addClass("animated lightSpeedIn");
    
    $(".click").click(function() {
        $("html, body").animate({
            scrollTop: $("#portfolio").offset().top}, 500);
    });
    $("#backtop").hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $("#backtop").css("display", "inline");
            $(".example-imgs").css("width", "55%");
        } else {
            $("#backtop").css("display", "none");
            $(".example-imgs").css("width", "50%");
        }
    });

    $("#backtop").click(function() {
        $("html, body").animate({scrollTop: 0}, 500);
    });

    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=damdeez&api_key=f7c1211d729a780a97b6b279b82aaea6&limit=2&format=json&callback=?", function(data) {
        var html = ""; // we declare the variable that we'll be using to store our information
        var counter = 1; // we declare a counter variable to use with the if statement in order to limit the result to 1
        $.each(data.recenttracks.track, function(i, item) {
            if(counter == 1) {
                html += "Currently listening to: <span><a href='" + item.url + "' target='_blank'>" + item.name + "</a> - " + item.artist["#text"] + "</span>";
            } // close the if statement
            counter++ // add 1 to the counter variable each time the each loop runs
        }); // close each loop
        $("#listening-to").append(html);
    });
    $("#typed").typed({
        strings: ["^1000Damdeez.", "Dado.", "Damir.^5000"],
        typeSpeed: 100
    });
});