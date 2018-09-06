//=====================================================//
//						PULL SONG					   //
//=====================================================//
$(document).ready(function() {
	$(".submitButton").on("click", function() {
		var moodInput = "";
		var value = $("#myMood").val();
		if (value == 1) {
			moodInput = "Angry";
		};
		if (value == 2) {
			moodInput = "Sad";
		};
		if (value == 3) {
			moodInput = "Meh";
		};
		if (value == 4) {
			moodInput = "Happy";
		};
		if (value == 5) {
			moodInput = "Ecstatic";
		};
		// console.log(moodInput);
		var energyInput = $("#myEnergy").val();
		// console.log(energyInput);
		var genreInput = $("#myGenre").val();
		// console.log(genreInput);
		if (genreInput === "All") {
			$.ajax({
				url:'api/songs',
				type:'GET',
				success: function(data){
					data=$(data).find("[data-mood='" + moodInput + "'][data-energy='" + energyInput + "']");
					$('#playlist').html($(data));
				}
			});
		} else {
			$.ajax({
				url:'api/songs',
				type:'GET',
				success: function(data){
					data=$(data).find("[data-mood='" + moodInput + "'][data-energy='" + energyInput + "'][data-genre='" + genreInput + "']");
					$('#playlist').html($(data));
				}
			});
		}
	});
});
//=====================================================//
//						NAVBAR					   	   //
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
//						SCROLL						//
//=====================================================//
$(document).ready(function() {
	var scrollMood = document.getElementById("myMood");
	var scrollEnergy = document.getElementById("myEnergy");
	
	$(".scroll-img.mood img").click(function() {
		$("html").removeAttr("class");
		$("img#angry").attr("src", "../assets/img/angry.png");
		$("img#sad").attr("src", "../assets/img/sad.png");
		$("img#meh").attr("src", "../assets/img/meh.png");
		$("img#happy").attr("src", "../assets/img/happy.png");
		$("img#ecstatic").attr("src", "../assets/img/ecstatic.png");
	});
	$("img#angry").click(function() {
		$(".slider#myMood").val(1);
		$("html").addClass("angry");
		$(this).attr("src", "../assets/img/angry-color.png");
		$("img#logo").attr("src", "../assets/img/logo-angry.png");
		$("img#zzz").attr("src", "../assets/img/zzz-angry.png");
		$("img#hyper").attr("src", "../assets/img/hyper-angry.png");
	});
	$("img#sad").click(function() {
		$(".slider#myMood").val(2);
		$("html").addClass("sad");
		$(this).attr("src", "../assets/img/sad-color.png");
		$("img#logo").attr("src", "../assets/img/logo-sad.png");
		$("img#zzz").attr("src", "../assets/img/zzz-sad.png");
		$("img#hyper").attr("src", "../assets/img/hyper-sad.png");
	});
	$("img#meh").click(function() {
		$(".slider#myMood").val(3);
		$("html").addClass("meh");
		$(this).attr("src", "../assets/img/meh-color.png");
		$("img#logo").attr("src", "../assets/img/logo-meh.png");
		$("img#zzz").attr("src", "../assets/img/zzz-meh.png");
		$("img#hyper").attr("src", "../assets/img/hyper-meh.png");
	});
	$("img#happy").click(function() {
		$(".slider#myMood").val(4);
		$("html").addClass("happy");
		$(this).attr("src", "../assets/img/happy-color.png");
		$("img#logo").attr("src", "../assets/img/logo-happy.png");
		$("img#zzz").attr("src", "../assets/img/zzz-happy.png");
		$("img#hyper").attr("src", "../assets/img/hyper-happy.png");
	});
	$("img#ecstatic").click(function() {
		$(".slider#myMood").val(5);
		$("html").addClass("ecstatic");
		$(this).attr("src", "../assets/img/ecstatic-color.png");
		$("img#logo").attr("src", "../assets/img/logo-ecstatic.png");
		$("img#zzz").attr("src", "../assets/img/zzz-ecstatic.png");
		$("img#hyper").attr("src", "../assets/img/hyper-ecstatic.png");
	});

	if (scrollMood != null) {
		scrollMood.addEventListener("change", function() {
			// console.log(scroll.value);
			$("img#angry").attr("src", "../assets/img/angry.png");
			$("img#sad").attr("src", "../assets/img/sad.png");
			$("img#meh").attr("src", "../assets/img/meh.png");
			$("img#happy").attr("src", "../assets/img/happy.png");
			$("img#ecstatic").attr("src", "../assets/img/ecstatic.png");
			if (scrollMood.value == 1) {
				$("html").removeAttr("class");
				$("html").addClass("angry");
				$("img#angry").attr("src", "../assets/img/angry-color.png");
				$("img#logo").attr("src", "../assets/img/logo-angry.png");
				$("img#zzz").attr("src", "../assets/img/zzz-angry.png");
				$("img#hyper").attr("src", "../assets/img/hyper-angry.png");
			} else if (scrollMood.value == 2) {
				$("html").removeAttr("class");
				$("html").addClass("sad");
				$("img#sad").attr("src", "../assets/img/sad-color.png");
				$("img#logo").attr("src", "../assets/img/logo-sad.png");
				$("img#zzz").attr("src", "../assets/img/zzz-sad.png");
				$("img#hyper").attr("src", "../assets/img/hyper-sad.png");
			} else if (scrollMood.value == 3) {
				$("html").removeAttr("class");
				$("html").addClass("meh");
				$("img#meh").attr("src", "../assets/img/meh-color.png");
				$("img#logo").attr("src", "../assets/img/logo-meh.png");
				$("img#zzz").attr("src", "../assets/img/zzz-meh.png");
				$("img#hyper").attr("src", "../assets/img/hyper-meh.png");
			} else if (scrollMood.value == 4) {
				$("html").removeAttr("class");
				$("html").addClass("happy");
				$("img#happy").attr("src", "../assets/img/happy-color.png");
				$("img#logo").attr("src", "../assets/img/logo-happy.png");
				$("img#zzz").attr("src", "../assets/img/zzz-happy.png");
				$("img#hyper").attr("src", "../assets/img/hyper-happy.png");
			} else if (scrollMood.value == 5) {
				$("html").removeAttr("class");
				$("html").addClass("ecstatic");
				$("img#ecstatic").attr("src", "../assets/img/ecstatic-color.png");
				$("img#logo").attr("src", "../assets/img/logo-ecstatic.png");
				$("img#zzz").attr("src", "../assets/img/zzz-ecstatic.png");
				$("img#hyper").attr("src", "../assets/img/hyper-ecstatic.png");
			}
		}, false);
	}

	if (scrollEnergy != null) {
		scrollEnergy.addEventListener("change", function() {
			if (scrollEnergy.value == 0.1) {
				$("img#zzz").css("opacity", "1");
				$("img#hyper").css("opacity", "0");
			} else if (scrollEnergy.value == 0.2) {
				$("img#zzz").css("opacity", "0.89");
				$("img#hyper").css("opacity", "0.12");
			} else if (scrollEnergy.value == 0.3) {
				$("img#zzz").css("opacity", "0.78");
				$("img#hyper").css("opacity", "0.23");
			} else if (scrollEnergy.value == 0.4) {
				$("img#zzz").css("opacity", "0.67");
				$("img#hyper").css("opacity", "0.34");
			} else if (scrollEnergy.value == 0.5) {
				$("img#zzz").css("opacity", "0.56");
				$("img#hyper").css("opacity", "0.45");
			} else if (scrollEnergy.value == 0.6) {
				$("img#zzz").css("opacity", "0.45");
				$("img#hyper").css("opacity", "0.56");
			} else if (scrollEnergy.value == 0.7) {
				$("img#zzz").css("opacity", "0.34");
				$("img#hyper").css("opacity", "0.67");
			} else if (scrollEnergy.value == 0.8) {
				$("img#zzz").css("opacity", "0.23");
				$("img#hyper").css("opacity", "0.78");
			} else if (scrollEnergy.value == 0.9) {
				$("img#zzz").css("opacity", "0.12");
				$("img#hyper").css("opacity", "0.89");
			} else if (scrollEnergy.value == 1) {
				$("img#zzz").css("opacity", "0");
				$("img#hyper").css("opacity", "1");
			}
		}, false);
	}
});