/////////////////////////////
// scriptz.js by @damdeez ///
/////////////////////////////


// Auto resize top_content section to fit users browser 

    function autoResizeSection() {
        document.getElementById('top_content').style.height = window.innerHeight +'px';
        }
        window.onresize = autoResizeSection;
            autoResizeSection();   


    // Smooth scroll down to #portfolio when clicked on a specified class

    $(document).ready(function() {
        $(".click").click(function() {
            var offset = 20;
            $('html, body').animate({
                scrollTop: $("#portfolio").offset().top + offset
            }, 500);
        });

    });
