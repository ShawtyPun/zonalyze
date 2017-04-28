
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            /*====================================
             CUSTOM LINKS SCROLLING FUNCTION 
            ======================================*/

            $('a[href*=#]').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
               && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top;
                        $('html,body')
                        .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                        return false;
                    }
                }
            });
            /*====================================
            VAGAS SLIDESHOW SCRIPTS
            ======================================*/
            $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                      { src: 'images/20.jpg', fade: 1000, delay: 9000 }, //CHANGE THESE IMAGES WITH YOUR ORIGINAL IMAGES
                      
                     
                    ]
                })('overlay', {
                    /** SLIDESHOW OVERLAY IMAGE **/
                    src: 'plugins/vegas/overlays/01.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
                });

            });

       

            /*====================================
               SIDE MENU SCRIPTS BELOW 
           ======================================*/
            var menuLeft = document.getElementById('cbp-spmenu-s1'),
               menuRight = document.getElementById('cbp-spmenu-s2'),
           //showLeftPush = document.getElementById('showLeftPush'),
           //showRightPush = document.getElementById('showRightPush'),
           body = document.body;

            // showLeftPush.onclick = function () {
            //     classie.toggle(this, 'active');
            //     classie.toggle(body, 'cbp-spmenu-push-toright');
            //     classie.toggle(menuLeft, 'cbp-spmenu-open');
            //     disableOther('showLeftPush');
            // };
            // showRightPush.onclick = function () {
            //     classie.toggle(this, 'active');
            //     classie.toggle(body, 'cbp-spmenu-push-toleft');
            //     classie.toggle(menuRight, 'cbp-spmenu-open');
            //     disableOther('showRightPush');
            // };
            function disableOther(button) {

                // if (button !== 'showLeftPush') {
                //     classie.toggle(showLeftPush, 'disabled');
                // // }
                // if (button !== 'showRightPush') {
                //     classie.toggle(showRightPush, 'disabled');
                // }
            }


            /*====================================
               WRITE YOUR SCRIPTS BELOW 
           ======================================*/
           //ref to all circles
var allCircles = $('circle');

//assign all circles a click
$('circle').on('click', function(e) {

  //cycle through comparing what you clicked to the array entries
  TweenMax.staggerTo('circle', 0.5, {
    cycle: {
      scale: function(i) {
        //if the one you clicked on matches allCircles[i]
        //make it scale to 1.5. Otherwise scale to 1
        return (allCircles[i] == e.target) ? 1.5 : 1
      }
    },
    transformOrigin: '50% 50%',
    ease: Power2.easeInOut
    //the stagger offset is 0 so no delay between animations
  }, 0)

})

//call the first one
$(allCircles[0]).trigger('click');

/*  
Usually for native shapes like circle I would animate their 'r' attribute instead of scale like this (thanks to Carl @Greensock for the attr cycle code):


 TweenMax.staggerTo('circle', 0.5, {
    cycle:{
      attr:function(i){
        //if the one you clicked on matches allCircles[i]
        //make its radius 60. Otherwise 40
        return (allCircles[i] == e.target) ? {r:60} : {r:40}
      }
    },
    ease:Power2.easeInOut
  },0)
 */

        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));




