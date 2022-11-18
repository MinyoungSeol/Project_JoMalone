$(document).ready(function() {

    $(".header i").click(function() {
        $(".sideBarBlack").fadeIn("fast");
    }); //open side menu

    $(".sideTop i").click(function() {
        $(".sideBarBlack").fadeOut("fast");
    }); //close side menu

    $(".toTop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });



    $(window).scroll(function() {
        var scTop = $(this).scrollTop();

        if (scTop > 300) {
            $(".toTop").fadeIn("slow");
        } else {
            $(".toTop").fadeOut("slow");
        }
    });




}); //ready