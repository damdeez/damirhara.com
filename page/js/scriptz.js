// scriptz.js by @damdeez //

// Auto resize #top section to fit users browser
$("#top").height(window.innerHeight + "px");
$("#backtop, #about-site").hide();
$("#current-year").html(new Date().getFullYear());

$(function() {
    var profilePic = $("#profile_pic"),
        backTop = $("#backtop"),
        exampleImgs = $(".example-imgs")

    setInterval(function() {
        $("#arrowdown a img").toggleClass("animated bounce");
    }, 2000);
    setTimeout(function() {
        $(".typed.first").typed({
            strings: ["^500&amp; I like to"],
            typeSpeed: 50,
            cursorChar: "",
            callback: function () {
                $(".typed.second").typed({
                    strings: ["^200craet", "^200create experiences.", "make websites."],
                    typeSpeed: 50,
                    backSpeed: 100,
                    backDelay: 200
                });
            }
        });

    }, 500);
    exampleImgs.lazyload({threshold: 500});
    $(".click").click(function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: $("#current").offset().top}, 500);
    });
    profilePic.on("click", function(e) {
        e.preventDefault();
        $("#about-site").slideToggle(500);
    });
    profilePic.hover(
        function() {
            $(this).toggleClass("animated pulse");
        }
    );
    //Tell the back to top button when to appear based on up or down scrolling
    var previousScroll = 0;
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > previousScroll && currentScroll > 1200){
            backTop.fadeIn(300).css("display", "inline");
        } else {
            backTop.fadeOut(300);
        }
        previousScroll = currentScroll

        if ($(this).scrollTop() > 1500) {
            exampleImgs.css({
                "box-shadow": "0 1px 7px #A0A0A0",
                "width": "60%"
            });
        } else {
            exampleImgs.css({
                "box-shadow": "0 0 4px #B0B0B0",
                "width": "55%"
            });
        }
    });
    backTop.click(function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 500);
    });
    //Last.fm most recently listened to
    $.getJSON("//ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=damdeez&api_key=f7c1211d729a780a97b6b279b82aaea6&limit=2&format=json&callback=?",
        function(data) {
            var html = "";
            var counter = 1; // a counter variable to use with the if statement in order to limit the result to 1
            $.each(data.recenttracks.track, function(i, item) {
                if(counter == 1) {
                    html += /* "Most recently listened to: " + */ item.artist["#text"] + " - " + "<span>" + item.name + "</span>";
                }
                counter++
        });
        $("#listening-to").append(html);
    });
});
