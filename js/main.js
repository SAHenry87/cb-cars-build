

// Mobile nav

var mobileNav = document.querySelector('button.hamburger');
	var targetBody = document.querySelector('body');

	mobileNav.addEventListener('click', function () {
       
		this.preventDefault;
		targetBody.classList.toggle('is-active');
    }, false);
    


    $(document).ready(function(){
        $('.sldr').slick({
            autoplay: true,
            autoplaySpeed: 7000,
            fade: true,
            slidesToShow: 1,
              slidesToScroll: 1,
              speed: 3500
    
        });
      });
              
    

