<script>
		// Closes the sidebar menu
		$("#menu-close").click(function(e) {
			e.preventDefault();
			$("#sidebar-wrapper").toggleClass("active");
		});
		// Closes the sidebar menu
		$("#sidebar-wrapper").mouseleave(function(e) {
			e.preventDefault();
			$("#sidebar-wrapper").toggleClass("active");
		});
		// Opens the sidebar menu
		$("#menu-toggle").click(function(e) {
			e.preventDefault();
			$("#sidebar-wrapper").toggleClass("active");
		});
		// Scrolls to the selected menu item on the page
		$(function() {
			$('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top
						}, 1000);
						return false;
					}
				}
			});
		});
		//#to-top button appears after scrolling
		var fixed = false;
		$(document).scroll(function() {
			if ($(this).scrollTop() > 250) {
				if (!fixed) {
					fixed = true;
					// $('#to-top').css({position:'fixed', display:'block'});
					$('#to-top').show("slow", function() {
						$('#to-top').css({
							position: 'fixed',
							display: 'block'
						});
					});
				}
			} else {
				if (fixed) {
					fixed = false;
					$('#to-top').hide("slow", function() {
						$('#to-top').css({
							display: 'none'
						});
					});
				}
			}
		});


		//about-info-dislay js
		$(".about-item-1").hover(function() {
				$(".about-info-item").hide();
				$(".about-info-item-1").show();
				$("#about-sun-item").css("color", "#FFB61E");

			})
			// https://goo.gl/YdJNP9  參考一下css :after and :before rules aren't part of the DOM
		$(".about-item-2").hover(function() {
			$(".about-info-item").hide();
			$(".about-info-item-2").show();
			$("#about-mark-item").css("color", "#C3272B");

		})
		$(".about-item-3").hover(function() {
			$(".about-info-item").hide();
			$(".about-info-item-3").show();
			$("#about-air-item").css("color", "#1F4788");
		})
		$(".about-item-4").hover(function() {
			$(".about-info-item").hide();
			$(".about-info-item-4").show();
			$("#about-chart-item").css("color", "#26A65B");
		})
	</script>
</body>

</html>
