// scriptz.js by @damdeez //

/* var autoResizeSection = function() {
    document.getElementById("top").style.height = window.innerHeight + "px";
    }
    window.onresize = autoResizeSection;
autoResizeSection(); */

// Auto resize #top section to fit users browser
$("#top").height(window.innerHeight + "px");

$("#current-year").html(new Date().getFullYear());

$(document).ready(function() {
    //$("#profile_pic").toggleClass("animated bounceInDown");
    //$("#top").toggleClass("animated bounceInLeft");
    setInterval(function() {
        $("#arrowdown").toggleClass("animated bounce");
    }, 2000);
    setTimeout(function() {
        $("#typed").typed({
            strings: ["Damir.", "Damdeez.", "Dado.", "Damir."],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 200
        });
    }, 1000);
    $(".example-imgs").lazyload({threshold: 500});
    $(".click").click(function() {
        $("html, body").animate({
            scrollTop: $("#portfolio").offset().top}, 500);
    });
    $("#backtop, #about-site").hide();
    $("#profile_pic").on("click", function() {
        $("#about-site").slideToggle(500);
    });
    $("#profile_pic").hover(
        function() {
            $(this).toggleClass("animated pulse");
        }
    );
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1150) {
            $("#backtop").css("display", "inline");
            $(".example-imgs").css({
                "box-shadow": "0 1px 7px #A0A0A0",
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
        var html = "";
        var counter = 1; // a counter variable to use with the if statement in order to limit the result to 1
        $.each(data.recenttracks.track, function(i, item) {
            if(counter == 1) {
                html += // "Most recently listened to: " + 
                item.artist["#text"] + " - " + "<span>" + item.name + "</span>";
            }
            counter++ // add 1 to the counter variable each time the each loop runs
        });
        $("#listening-to").append(html);
    });
});