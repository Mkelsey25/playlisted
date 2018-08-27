//=====================================================//
//                        NAVBAR                       //
//=====================================================//
$(document).ready(function() {
    $(".hamburger").click(function() {
        $(".menu").slideToggle("slow", function() {
        });
    });
    $(window).resize(function() {
        if($(window).width() > 991) {
            $(".menu").show();
        } else {
            $(".menu").hide();
        }
    }).resize();
});

//=====================================================//
//                        SCROLL                       //
//=====================================================//
$(document).ready(function() {
    var scrollMood = document.getElementById("myMood");
    var scrollEnergy = document.getElementById("myEnergy");
    // console.log(scroll.value);
    $(".scroll-img.mood img").click(function() {
        $("html").removeAttr("class");
        $("img#angry").attr("src", "assets/img/angry.png");
        $("img#sad").attr("src", "assets/img/sad.png");
        $("img#meh").attr("src", "assets/img/meh.png");
        $("img#happy").attr("src", "assets/img/happy.png");
        $("img#ecstatic").attr("src", "assets/img/ecstatic.png");
    });
    $("img#angry").click(function() {
        $(".slider#myMood").val(1);
        $("html").addClass("angry");
        $(this).attr("src", "assets/img/angry-color.png");
        $("img#zzz").attr("src", "assets/img/zzz-angry.png");
        $("img#hyper").attr("src", "assets/img/hyper-angry.png");
    });
    $("img#sad").click(function() {
        $(".slider#myMood").val(2);
        $("html").addClass("sad");
        $(this).attr("src", "assets/img/sad-color.png");
        $("img#zzz").attr("src", "assets/img/zzz-sad.png");
        $("img#hyper").attr("src", "assets/img/hyper-sad.png");
    });
    $("img#meh").click(function() {
        $(".slider#myMood").val(3);
        $("html").addClass("meh");
        $(this).attr("src", "assets/img/meh-color.png");
        $("img#zzz").attr("src", "assets/img/zzz-meh.png");
        $("img#hyper").attr("src", "assets/img/hyper-meh.png");
    });
    $("img#happy").click(function() {
        $(".slider#myMood").val(4);
        $("html").addClass("happy");
        $(this).attr("src", "assets/img/happy-color.png");
        $("img#zzz").attr("src", "assets/img/zzz-happy.png");
        $("img#hyper").attr("src", "assets/img/hyper-happy.png");
    });
    $("img#ecstatic").click(function() {
        $(".slider#myMood").val(5);
        $("html").addClass("ecstatic");
        $(this).attr("src", "assets/img/ecstatic-color.png");
        $("img#zzz").attr("src", "assets/img/zzz-ecstatic.png");
        $("img#hyper").attr("src", "assets/img/hyper-ecstatic.png");
    });

    scrollMood.addEventListener("change", function() {
        // console.log(scroll.value);
        $("img#angry").attr("src", "assets/img/angry.png");
        $("img#sad").attr("src", "assets/img/sad.png");
        $("img#meh").attr("src", "assets/img/meh.png");
        $("img#happy").attr("src", "assets/img/happy.png");
        $("img#ecstatic").attr("src", "assets/img/ecstatic.png");
        if (scrollMood.value == 1) {
            $("html").removeAttr("class");
            $("html").addClass("angry");
            $("img#angry").attr("src", "assets/img/angry-color.png");
            $("img#zzz").attr("src", "assets/img/zzz-angry.png");
            $("img#hyper").attr("src", "assets/img/hyper-angry.png");
        } else if  (scrollMood.value == 2) {
            $("html").removeAttr("class");
            $("html").addClass("sad");
            $("img#sad").attr("src", "assets/img/sad-color.png");
            $("img#zzz").attr("src", "assets/img/zzz-sad.png");
            $("img#hyper").attr("src", "assets/img/hyper-sad.png");
        } else if  (scrollMood.value == 3) {
            $("html").removeAttr("class");
            $("html").addClass("meh");
            $("img#meh").attr("src", "assets/img/meh-color.png");
            $("img#zzz").attr("src", "assets/img/zzz-meh.png");
            $("img#hyper").attr("src", "assets/img/hyper-meh.png");
        } else if  (scrollMood.value == 4) {
            $("html").removeAttr("class");
            $("html").addClass("happy");
            $("img#happy").attr("src", "assets/img/happy-color.png");
            $("img#zzz").attr("src", "assets/img/zzz-happy.png");
            $("img#hyper").attr("src", "assets/img/hyper-happy.png");
        } else if  (scrollMood.value == 5) {
            $("html").removeAttr("class");
            $("html").addClass("ecstatic");
            $("img#ecstatic").attr("src", "assets/img/ecstatic-color.png");
            $("img#zzz").attr("src", "assets/img/zzz-ecstatic.png");
            $("img#hyper").attr("src", "assets/img/hyper-ecstatic.png");
        }
    }, false);

    scrollEnergy.addEventListener("change", function() {
        if (scrollEnergy.value == 1) {
            $("img#zzz").css("opacity", "1");
            $("img#hyper").css("opacity", "0");
        } else if  (scrollEnergy.value == 2) {
            $("img#zzz").css("opacity", "0.75");
            $("img#hyper").css("opacity", "0.25");
        } else if  (scrollEnergy.value == 3) {
            $("img#zzz").css("opacity", "0.5");
            $("img#hyper").css("opacity", "0.5");
        } else if  (scrollEnergy.value == 4) {
            $("img#zzz").css("opacity", "0.25");
            $("img#hyper").css("opacity", "0.25");
        } else if  (scrollEnergy.value == 5) {
            $("img#zzz").css("opacity", "0");
            $("img#hyper").css("opacity", "1");
        }
    }, false);
});