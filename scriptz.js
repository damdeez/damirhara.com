/////////////////////////////
// scriptz.js by @damdeez ///
/////////////////////////////


// Auto resize top_content section to fit users browser 

    function autoResizeSection() {
        document.getElementById('top_content').style.height = window.innerHeight +'px';
        }
        window.onresize = autoResizeSection;
            autoResizeSection();   


// jQuery goodness

    $(document).ready(function() {
        $(".click").click(function() {
            var offset = "";
            $('html, body').animate({
                scrollTop: $("#portfolio").offset().top + offset}, 500);

        });

        $(window).scroll(function() {
            if ($(this).scrollTop() > 1200) {
                $("#backtop").fadeIn(800);
            } else {
                $("#backtop").fadeOut(800);
            }
        });

        $("#backtop").click(function() {
            $("html, body").animate( {
                scrollTop: 0}, 500);
        });

        setInterval(function() {
            $("#arrowdown").toggleClass("animated bounce");
        }, 2000);

    });
