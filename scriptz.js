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

$(document).ready(function() {
    setInterval(function() {
        $("#arrowdown").toggleClass("animated shake");
        $("#next-example").toggleClass("animated pulse");
    }, 2000);

    setTimeout(function() {
        $("#typed").typed({
            strings: ["Damdeez.", "Dado.", "Damir."],
            typeSpeed: 100,
            backSpeed: 100
        });
    }, 1000);

    $(".click").click(function() {
        $("html, body").animate({
            scrollTop: $("#portfolio").offset().top}, 500);
    });
    $("#backtop, #about-site").hide();
    $("#profile_pic").on("click", function() {
        $("#about-site").slideToggle(500);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1150) {
            $("#backtop").css("display", "inline");
            $(".example-imgs").css({
                "box-shadow": "0 1px 7px #a0a0a0",
                "width": "60%"
            });
        } else {
            $("#backtop").css("display", "none");
            $(".example-imgs").css({
                "box-shadow": "0 0 4px #B0B0B0",
                "width": "55%"
            });
        }
    });
    $("#backtop").click(function() {
        $("html, body").animate({scrollTop: 0}, 500);
    });
    $.getJSON("//ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=damdeez&api_key=f7c1211d729a780a97b6b279b82aaea6&limit=2&format=json&callback=?", function(data) {
        var html = ""; // we declare the variable that we'll be using to store our information
        var counter = 1; // we declare a counter variable to use with the if statement in order to limit the result to 1
        $.each(data.recenttracks.track, function(i, item) {
            if(counter == 1) {
                html += // "Most recently listened to: " + 
                item.artist["#text"] + "</a> - " +"<span><a href='" + item.url + "' target='_blank'>" + item.name + "</span>";
            }
            counter++ // add 1 to the counter variable each time the each loop runs
        });
        $("#listening-to").append(html);
    });
    document.getElementById("current-year").innerHTML = new Date().getFullYear();
});