$.ajaxSetup ({
	cache: false
});

function checkwidth(){
	var winw = window.innerWidth; 
	var winh = window.innerHeight;
	console.log(winw); 
	console.log(winh); 
	var scroll = $(document).scrollTop(); 
	if (winw >= 768) {
		if (scroll <= 25){
			$('.navbar.navbar-fixed-top').removeClass('onscroll');
		} else {
			$('.navbar.navbar-fixed-top').addClass('onscroll'); 
		}
		$(window).scroll(function (event) {
			scroll = $(document).scrollTop(); 
			if (scroll <= 25){
				$('.navbar.navbar-fixed-top').removeClass('onscroll');
			} else {
				$('.navbar.navbar-fixed-top').addClass('onscroll'); 
			}
		});
	} else {
		$('.navbar,navbar-fixed-top').addClass('onscroll')
		$(window).scroll(function (event) {
			scroll = $(document).scrollTop(); 
			$('.navbar.navbar-fixed-top').addClass('onscroll')
		})
	};
};

// Truncate phrases
String.prototype.trunc = String.prototype.trunc ||
function(n){
	return this.length>n ? this.substr(0,n-1)+'...' : this.toString();
};

$(document).ready(checkwidth()); 
$(window).resize(function(){checkwidth()});