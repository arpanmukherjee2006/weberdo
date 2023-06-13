 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll',
    horizontalOffset: 0,
	  verticalOffset: 0
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			dots: true,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 1
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-volunteer').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


})(jQuery);


let mobileWidth = 640;
let tabWidth = 1080;
let  deskWidth = 1220;
let pWidth, pHeight, screenWidth, screenHeight;
let index = document.getElementsByClassName("quote-column");
let pTransition = 3;
let activeShow = "col-active";
const arrowIcon = "<div class='arrow left-arrow ' onclick='arrowControl(-1)'><i class='arrow-icon'><i></div><div class='arrow right-arrow' onclick='arrowControl(1)'><i class='arrow-icon'><i></div>"
const ArrowParent = document.createElement("div");
ArrowParent.classList.add("arrows-wrap");
ArrowParent.innerHTML = arrowIcon;
let arrowEnabled = false;
let activeQuoteHeight = 400;

getElem();
function getElem() {
    let hAndW;
    let targetElem;
    index[0].parentElement.style.minHeight = (index.length / 2) * 140 + "px";// assign row element height

    for (let i = 0; i < index.length; i++) {
        targetElem = index[i];
        pWidth = targetElem.parentElement.offsetWidth;
        pHeight = targetElem.parentElement.offsetHeight;

        //When viewing on desktop
        if (screenWidth > tabWidth) {
            hAndW = randomPos(60, (screenHeight / (index.length / 1.5))) + 'px';//Lets make the height and width variables randomly

            // lets devide all the elements by less then 2 and positioning them left and right not in the middle;
            //this is for left side
            if (i < index.length / 1.9) {
                targetElem.style.left = randomPos(100, targetElem.parentElement.offsetWidth / 3 - 100) + 'px'; // X position left
                targetElem.style.top = (targetElem.parentElement.offsetHeight / (index.length / 2)) * (i - 1) + 'px'; //Y position left
            }
            // this is for right side
            else if (i > index.length / 1.9) {
                targetElem.style.right = randomPos(100, targetElem.parentElement.offsetWidth / 3 - 100) + 'px'; // X position right
                targetElem.style.left = 'auto'; // X position right
                targetElem.style.top = (targetElem.parentElement.offsetHeight / (index.length / 2)) * ((index.length - 1) - i) + 'px'; //Y position right
            }
            if (arrowEnabled) ArrowParent.style.display = "block";// When arrow added make them visible
            else ArrowParent.style.display = "none";// When arrow added make them hidden
        }

        //When viewing on tab
        if (screenWidth <= tabWidth && screenWidth >= mobileWidth) {
            hAndW = randomPos(30, (screenHeight / (index.length / 1.5))) + 'px';
            targetElem.parentElement.style.minHeight = "70vh";
            targetElem.style.bottom = '0px'; //Y position
            targetElem.style.left = (targetElem.parentElement.offsetWidth) / (index.length - 1) * (i - 1) + 'px'; // X position left
            targetElem.style.zIndex = '100'; //Y position
            targetElem.style.top = 'auto'; //Y position
            if (arrowEnabled) ArrowParent.style.display = "block";// When arrow added make them visible
            else ArrowParent.style.display = "none";// When arrow added make them visible
        }

        //When viewing on mobile
        if (screenWidth < mobileWidth) {
            targetElem.style.left = '50%'; // X position left
            ArrowParent.style.display = "block";// When arrow added make them visible
        }
        else if (!arrowEnabled) ArrowParent.style.display = "none";// otherwise hidden

        //after all the work done lets sizing the element
        targetElem.style.width = hAndW;
        targetElem.style.height = hAndW;
        //and the active one position default
        if (i != 0) {
            targetElem.addEventListener('click', quoteShow, false); //So we dont need click event on the active one
        }
        targetElem.classList.add("moves");
    }
    setTimeout(() => {
        for (let i = 0; i < index.length; i++) {
            //     targetElem.style.transition = "0s";
        }
    }, 2000);
}


let clickCheck = true, showClear, showClear2;
function quoteShow(evt) {
  const style = getComputedStyle(this);
  console.log(style);
    if (clickCheck) {
        clickCheck = false;
        clearTimeout(showClear2);
        let activeQuote = document.getElementsByClassName(activeShow);
        let aq;
        for (let j = 0; j < activeQuote.length; j++) {
            aq = activeQuote[j];
            aq.classList.remove("show");
            aq.style.transition = "0.4s";
        }
        this.style.transition = "0.4s";
        setTimeout(() => {
            aq.style.top = this.offsetTop + "px";
            aq.style.left = this.offsetLeft + "px";
            aq.style.width = this.offsetWidth + "px";
            aq.style.height = this.offsetHeight + "px";
            aq.addEventListener('click', quoteShow, false);
            aq.classList.remove(activeShow);
        }, 600);

        setTimeout(() => {
            this.classList.add(activeShow);
            this.removeEventListener("click", quoteShow, false);
        }, 1200);

        showClear2 = setTimeout(() => {
            this.classList.toggle("show");
            aq.style.transition = "";
            this.style.transition = "";
            clickCheck = true;
        }, 1800);
    }
}

let arrowClicked = true; nowActive = 0;


function arrowControl(val) {
    // else nowActive += val;
    if (arrowClicked) {
        arrowClicked = false;
        for (let i = 0; i < index.length; i++) {
            index[nowActive].classList.remove("show");
            index[nowActive].style.transition = ".4s";
            index[nowActive].addEventListener('click', quoteShow, false);
        }
        setTimeout(() => {
            for (let j = 0; j < index.length; j++) {
                index[j].classList.remove(activeShow);
            }
            nowActive += val;
            if (nowActive > index.length - 1) nowActive = 0;
            else if (nowActive < 0) nowActive = index.length - 1;
        }, 600);

        setTimeout(() => {
            index[nowActive].classList.add(activeShow);
            index[nowActive].removeEventListener("click", quoteShow, false);
        }, 610);

        setTimeout(() => {
            index[nowActive].classList.toggle("show");
            index[nowActive].style.transition = "";
            arrowClicked = true
        }, 1800);
    }
}

function randomPos(min, max) {
    return ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
}

function getScreenSize() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    getElem();
}

window.onresize = getScreenSize;
window.addEventListener('resize', getScreenSize);
window.addEventListener('load', function () {
    getScreenSize();
    getElem();
}, true);

function arrowFunc() {
    try {
        index[0].parentElement.appendChild(ArrowParent);// try insert arrow element for slide control
    } catch (error) { }
}
arrowFunc();




//Flaoting animation class;
class MoveAnim {
    constructor(max, tm) {
        this.time = tm;
        if (Math.random() > .5) this.uDVal = max; else this.uDVal = 0;
        if (Math.random() > .5) this.lRVal = max; else this.lRVal = 0;
        this.max = max;
        if (Math.random() > .5) this.uD = false; else this.uD = true;
        if (Math.random() > .5) this.lR = false; else this.lR = true;
        this.upDown(this.max);
        this.leftRight(this.max);
        this.scale = .01;
    }

    upDown() {
        setInterval(() => {
            if (!this.uDVal) {
                if (this.uD >= this.max) { this.uDVal = true; }
                if (this.uD < this.max) { this.uD += this.scale; }
            }
            else if (this.uDVal) {
                if (this.uD <= -this.max) { this.uDVal = false; }
                if (this.uD >= -this.max) { this.uD -= this.scale; }
            }
            return this.uD;
        }, this.time / 1000);
    }
    leftRight() {
        setInterval(() => {
            if (!this.lRVal) {
                if (this.lR >= this.max) { this.lRVal = true; }
                if (this.lR < this.max) { this.lR += this.scale; }
            }
            else if (this.lRVal) {
                if (this.lR <= -this.max) { this.lRVal = false; }
                if (this.lR >= -this.max) { this.lR -= this.scale; }
            }
            return this.lR;
        }, this.time / 1000);
    }

    letMove(el, ud = false, lr = false) {

        setInterval(() => {
            if (ud === true && lr === false) {
                el.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " + 0 + "," + this.uD + ", 0, 1)";
            }
            else if (ud === false && lr === true) {
                el.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " + this.lR + "," + 0 + ", 0, 1)";
            }
            else {
                el.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " + this.lR + "," + this.uD + ", 0, 1)";
            }


        }, 1);
    }

    start(elem, ud, lr) {
        this.letMove(elem, ud, lr);
        this.upDown();
        this.leftRight();
    }
}

class ShowAnim {
    constructor(mElem, dist, times) {
        this.mElem = document.getElementsByClassName(mElem);
        this.pElem = mElem.parentElement;
        this.cElem = mElem.children;
        this.count = 0;
        this.max = dist;
        this.min = 10;
        this.times = times;
        this.randomCount(this.max);
    }
    randomCount(max) {
        return Math.floor(Math.random() * (max - this.min + 1)) + this.min;
    }
    show(ud, lr) {
        for (this.count = 0; this.count < this.mElem.length; this.count++) {
            this.moveanim = new MoveAnim(this.randomCount(this.max), this.times,);
            this.moveanim.start(this.mElem[this.count], ud, lr);
        }
    }
}


let animShow = new ShowAnim("moves", 40, 50);// Element, Max Distance, Times in milliseconds

//Start floating
animShow.show(true, true);// Up-Down, Left-Right;