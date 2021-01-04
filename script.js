jQuery(document).ready(function($) {
            "use strict";
            //  TESTIMONIALS CAROUSEL HOOK
            $('#interest-point').owlCarousel({
                loop: true,
                items: 5,
                margin: 0,
                autoplay: true,
                dots: true,
                autoplayTimeout: 5000,
                smartSpeed: 450,
                animateIn: "fadeIn",
                animateOut: "fadeOut",
                freedrag: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  768: {
                    items: 2
                  },
                  1170: {
                    items: 4
                  },
                  1920: {
                    items: 5
                  }
                }
            })

          $('#interest-point2').owlCarousel({
            loop: true,
            items: 5,
            margin: 0,
            autoplay: true,
            dots: true,
            autoplayTimeout: 5000,
            smartSpeed: 450,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            freedrag: true,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 2
              },
              1170: {
                items: 4
              },
              1920: {
                items: 5
              }
            }
              })

          $('#interest-point3').owlCarousel({
            loop: true,
            items: 5,
            margin: 0,
            autoplay: true,
            dots: true,
            autoplayTimeout: 5000,
            smartSpeed: 450,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            freedrag: true,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 2
              },
              1170: {
                items: 4
              },
              1920: {
                items: 5
              }
            }
            })

          $(document).ready(function(){
            $(window).scroll(function(){
             var scroll = $(window).scrollTop();
              if (scroll > 216) {
                $(".high").css("height","0px");
                $(".high p").css("color","transparent");
                $(".low").css("background-color","#243644");
                $(".low").css("color","white");
                $(".low a").css("color","white");

              }

            else{
               $(".high").css("height","40px");
               $(".high p").css("color","white");
               $(".low").css("background-color","white");
               $(".low").css("color","#243644");
               $(".low a").css("color","#243644");
              }
            })
          })


          });