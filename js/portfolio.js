// Freelancer Theme JavaScript

(function($) {


    //animation birds
    var morphing = anime({
      targets: '.bird .polymorph path',
          d: [
              { value: "M216.666,178c0,0,29.5-23,81-9c0,0,22-19.5,51-3.5c0,0-55-8.5-37.5,38 C306.938,203.886,295.666,156,216.666,178z" },
              { value: "M216.666,178c0,0,29.5-23,81-9c0,0,22-19.5,51-3.5c0,0-55-8.5-37.5,38 C306.938,203.886,295.666,156,216.666,178z" },
              { value: "M251.5,221.5c0,0-3.5-67.5,48-53.5c0,0,23.5,3,43,27.5c0,0-56-44.5-30,9 C308.272,204.886,278,140.5,251.5,221.5z" },
              { value: "M242.107,192.6c0,0,65.559-9.698,69.559-13.535c0,0,5.897,4.574,21,9.668c0,0-21-11.203-11.063-25.136 C321.603,163.597,300.604,182.242,242.107,192.6z" },
              { value: "M245.107,155.6c0,0,65.559,9.362,69.559,13.066c0,0,5.897-4.415,21-9.333c0,0-21,10.814-11.063,24.264 C324.603,183.597,303.604,165.599,245.107,155.6z" }
          ],
      easing: 'linear',  //easeOutQuad
      duration: 600,
      loop: true
  });

    //animation path bird
    var path = anime.path('#motionPath #path');

    var motionPath = anime({
      targets: '#motionPath .el',
      translateX: path('x'),
      translateY: path('y'),
      //rotate: path('angle'),
      easing: 'linear',
      duration: 6000,
      loop: true
    });

//animation path bird
    var path2 = anime.path('#motionPath2 #path');

    var motionPath2 = anime({
      targets: '#motionPath2 .el',
      translateX: path('x'),
      translateY: path('y'),
      //rotate: path('angle'),
      easing: 'linear',
      duration: 6000,
      loop: true
    });

   /* var morphing2 = anime({
      targets: '#morphing2 .polymorph2 path',
          d: [
              { value: "M216.666,178c0,0,29.5-23,81-9c0,0,22-19.5,51-3.5c0,0-55-8.5-37.5,38 C306.938,203.886,295.666,156,216.666,178z" },
              { value: "M216.666,178c0,0,29.5-23,81-9c0,0,22-19.5,51-3.5c0,0-55-8.5-37.5,38 C306.938,203.886,295.666,156,216.666,178z" },
              { value: "M251.5,221.5c0,0-3.5-67.5,48-53.5c0,0,23.5,3,43,27.5c0,0-56-44.5-30,9 C308.272,204.886,278,140.5,251.5,221.5z" },
              { value: "M242.107,192.6c0,0,65.559-9.698,69.559-13.535c0,0,5.897,4.574,21,9.668c0,0-21-11.203-11.063-25.136 C321.603,163.597,300.604,182.242,242.107,192.6z" },
              { value: "M245.107,155.6c0,0,65.559,9.362,69.559,13.066c0,0,5.897-4.415,21-9.333c0,0-21,10.814-11.063,24.264 C324.603,183.597,303.604,165.599,245.107,155.6z" }
          ],
      easing: 'easeOutQuad',
      duration: 600,
      loop: true
  });*/
 
var lastScrollTop = 0;
    $(".trees").scroll(function (event) {

    var move = $(this).scrollTop();
    if (move > lastScrollTop) {

      $('.trees').animate({top: '-=10'}, 10);

      } else {

      $('.trees').animate({top: '+=10'}, 10);

      }

      lastScrollTop = move;

    });


    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });



})(jQuery); // End of use strict
