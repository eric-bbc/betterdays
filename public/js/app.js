$( document ).ready(function() {


   AOS.init(); // <-- Animate On Scroll\


  /////////////////////////////////////////
 //           mobile toggles            //
/////////////////////////////////////////
  $('.info-tab').on('click', function(){
    var $self = $(this)
    var $id = $self.attr('id')
    $self.addClass( "active" )

    $self.siblings().removeClass(  "active" )

    $('.js-mobile-toggle').addClass('display-none')
    $('.js-mobile-toggle').removeClass('display-block-imp')
    $( '.js-' + $id ).removeClass('display-none')
    $( '.js-' + $id ).addClass('display-block-imp')
  })

  /////////////////////////////////////////
 //           Event Room toggles        //
/////////////////////////////////////////
$('.room-toggle').on('click', function(){
  var $self = $(this)
  var $id = $self.attr('id')
  $self.addClass( "active" )
  $self.addClass( "will-fade-in--active" )
  $self.siblings().removeClass(  "active" )
  $('.room-title').text( $self.text() )
  $('.room-title').text( $self.text() )



  $('.js-room-gallery').addClass('display-none')
  $( '.js-' + $id ).removeClass('display-none')
  $( '.js-' + $id ).addClass('display-block')
  $( '.js-' + $id ).addClass('will-fade-in--active')
})

$('.js-event-gallery-toggle').on('click', function(){
  $('.event-form-container').toggleClass('display-block display-none')
  $(window).trigger('resize');
  $('.mobile-gallery-container').toggleClass('js-rs-hide js-rs-show')
  $('.mobile-gallery-container').toggleClass('display-none display-block')
  $('.mobile-gallery-container').addClass('will-fade-in--active')
  $('.js-main-mobile').addClass('will-fade-in--active')
  $('.js-event-form-toggle').toggleClass('display-none display-block')
  $(this).addClass('display-none')
})

$('.js-event-form-toggle').on('click', function(){

  $(this).addClass('display-none')
  $('.mobile-view-gallery-toggle').toggleClass('display-block display-none')
  $('.mobile-gallery-container').toggleClass('display-block display-none')
  $('.event-form-container').toggleClass('display-block display-none')
  $('.event-form-container').addClass('will-fade-in--active')
  $('.mobile-gallery-container').toggleClass('js-rs-hide js-rs-show')

})

if ( window.location.pathnam = "/events"){
  $('.event-form-container').addClass('will-fade-in--active')
}

  /////////////////////////////////////////
 //           OPENTABLE TOGGLE          //
/////////////////////////////////////////


  /////////////////////////////////////////
 //           ROYAL SLIDER              //
/////////////////////////////////////////

var homepageSlider = $('.homepage-slider').royalSlider({
                         arrowsNav         : true,
                         keyboardNavEnabled: true,
                         imageScaleMode    : 'fill',
                         controlNavigation : 'none',
                         loop              : true,
                         addActiveClass    : true,
                         transitionType    : 'move',
                         slidesSpacing     : 18,
                         controlsInside    : true,
                         easeInOut         : 'easeInOutSine',
                         arrowsNavAutoHide : false,
                         imageAlignCenter  :false,
                         startSlideId      : 1,
                         visibleNearby     : {
                           enabled: true,
                           centerArea: 0.27
                         }
                    }).data('royalSlider')

      if ( location.pathname == '/' ) {
        homepageSlider.ev.on('rsAfterContentSet', function(e, slideObject){
          var slide = slideObject.content
          var slideIndex = slideObject.id
          slide.attr('slideIndex', slideIndex)

        })

        homepageSlider.ev.on('rsAfterSlideChange', function() {
          var $activeSlide = $('.rsActiveSlide img')
          var $activeSlideIndex = $('.rsActiveSlide img').attr('slideindex')
          var activeIndexNum = parseInt($activeSlideIndex)

          var rightIndex = activeIndexNum + 1
          var leftIndex = activeIndexNum - 1

          var lengthCheck = $('.homepage-slider').find('.rsImg').length


          if (rightIndex > lengthCheck) {
            rightIndex = 0
          }

          if (leftIndex < 0) {
            leftIndex = lengthCheck - 1
          }

          var $rightInSlide = $('[slideindex=' + rightIndex + ']');
          var $leftInSlide = $('[slideindex=' + leftIndex + ']');

          $('.rsImg').css('opacity', '0.1')


          $activeSlide.css('opacity', '1')
          $rightInSlide.css('opacity', '1')
          $leftInSlide.css('opacity', '1')


          // $rightOutSlide.css('opacity', '0.2')
          // $leftOutSlide.css('opacity', '0.2')

        })
      }


    $('.mobile-homepage-slider').royalSlider({
      imageScaleMode    : 'fill',
      controlNavigation : 'none',
      navigateByClick   : false,
      arrowsNav         : true,
      arrowsNavAutoHide : false,
      slidesSpacing     : 8,
      loop              : true,
      transitionType    : 'move',
      addActiveClass    : true,
      autoHeight        : false,
      visibleNearby     : {
        enabled         :  true,
        centerArea      : 0.9,
        center          : false
      },
    }).data('royalSlider');

   $('.event-gallery-slider').royalSlider({
      imageScaleMode    : 'fit',
      controlNavigation : 'none',
      navigateByClick   : false,
      arrowsNav         : true,
      arrowsNavAutoHide : false,
      imageAlignCenter  : true,
      slidesSpacing     : 54,
      loop              : true,
      transitionType    : 'move',
      addActiveClass    : true,
      autoHeight        : false,
      autoScaleSlider   : true,
      easing            : 'easeOutSine',
      visibleNearby     : {
        enabled         :  true,
        centerArea      : 0.4
      },
      fullscreen        : {
        enabled         : true,
        nativeFS        :true
      }
    }).data('royalSlider');


    $('.event-image').on('click', function() {
      var room = $(this).data('room')
      var $rs = $('.' + room + '-room-rs')
      $rs.data('royalSlider').enterFullscreen()
      $rs.toggleClass('invisible visible')
      $rs.toggleClass('display-none display-block')
      $('')
    })

    $('.rsFullscreenBtn').on('click', function(){
      var $openSlider = $(this).parent().parent()
      $openSlider.toggleClass('visible invisible')
      $openSlider.toggleClass('display-block display-none')
    })


    $('.mobile-event-gallery-slider').royalSlider({
      imageScaleMode    : 'fit',
      imageAlignCenter  : false,
      controlNavigation : 'none',
      navigateByClick   : true,
      arrowsNav         : true,
      arrowsNavAutoHide : false,
      loop              : true,
      transitionType    : 'move',
      addActiveClass    : true,
      autoHeight        : false,
      slidesSpacing     : 8,
      visibleNearby     : {
        enabled         :  true,
        centerArea      : 0.9,
        center          : false
      }
     }).data('royalSlider');




     /////////////////////////////////////////
    //          MENU                       //
   /////////////////////////////////////////

   $('.menu-slider').royalSlider({
     imageScaleMode    : 'fit',
     imageAlignCenter  : true,
     loop              : true,
     transitionType    : 'move',
     controlNavigation : 'none',
     autoHeight        : false,

     fullscreen        : {
       enabled         : true
     }
   }).data('royalSlider')


   $('.menu-card').on('click', function(){
     //desktop
     if ( $('html').hasClass('no-touchevents') ) {
       var $this = $(this)
       var index = $this.data('id')
       var slider = $('.menu-slider').data('royal-slider')
       slider.goTo(index)
       $('.menu-slider').removeClass('display-none').addClass('will-fade-in--active-fast')
     }

   })


   $('.mobile-menu-card').on('click', function(){
     console.log("clicked");
     //mobile
     if ( $('html').hasClass('touchevents') ) {
       var $this = $(this)
       var index = $this.data('id')
       var slider = $('.menu-slider').last().data('royal-slider')
       slider.goTo(index)
       $('.menu-slider').removeClass('display-none')
     }
   })

   $('.menu-slider').find('.rsFullscreenBtn').on('click', function(){
     $('.menu-slider').addClass('display-none')
     $('.menu-slider').removeClass('will-fade-in--active-fast')

     if ( $('html').hasClass('touchevents') ) {
       // $('html, body').css('overflow', 'scroll')
     }
   })


       // $('.mobile-menu-slider').royalSlider({
       //   imageScaleMode    : 'fill',
       //   controlNavigation : 'none',
       //   navigateByClick   : false,
       //   arrowsNav         : true,
       //   arrowsNavAutoHide : false,
       //   slidesSpacing     : '10px',
       //   // slidesSpacing     : '0px',
       //   loop              : true,
       //   transitionType    : 'move',
       //   addActiveClass    : true,
       //   autoHeight        : false
       // }).data('royalSlider');


  /////////////////////////////////////////
 //           FORM BUILDER              //
/////////////////////////////////////////

// Hides Submit Button on Success
var $success = $('.success-message')
var $length = $success.text().length

if ( $length > 0 ){
  $('.event-submit').css('display', 'none')
}


  //////////////////////////////////////////
 //         DESKTOP NAV                  //
//////////////////////////////////////////

setActiveNav()

function setActiveNav(){
  var path = window.location.pathname
  path = path.replace(/\/$/, '')
  path = decodeURIComponent(path)

  $('.desktop-nav-link').each(function(){
    var href = $(this).attr('href')

    if (path.substring(0, href.length) == href){
      $(this).addClass('active')
    }
  })
}


  //////////////////////////////////////////
 //         MOBILE NAV TOGGLE            //
//////////////////////////////////////////

$('.js-mobile-nav-toggle').on('touch click', function(){
  $('.mobile-nav-link-container').toggleClass('open')
})


  //////////////////////////////////////////
 //        Art Collection                //
//////////////////////////////////////////

$('.artpage-grid-item').on('mouseenter mouseleave', function(){
  var $this = $(this)
  var $copy = $this.find('.artimage-overlay-copy')
  $copy.toggleClass('opacity-off opacity-on')
})


$('.art-collection-scroll-arrow').on('click', function(){
  var leftPos = $('.art-collection-grid').scrollLeft();
  $('.art-collection-grid').animate({scrollLeft: leftPos + 600}, 800)
})

$('.mobile-art-span').on('click', function(){
  var leftPos = $('.art-collection-grid').scrollLeft();
  $('.art-collection-grid').animate({scrollLeft: leftPos + 600}, 800)
})


 ///////////////////////////////////////////
 //        Modal Logic                   //
//////////////////////////////////////////

var $button = $('.js-modal-close')

$button.on('click', function (){
  $('.ot-modal__homepage, .ot-modal ').toggleClass('visible invisible')
} )


setTimeout(function(){
  if (!$.cookie('site_visited')) {
    $('.ot-modal').toggleClass('invisible visible');
    $.cookie('site_visited', 'true', {
      expires: 7,
      path: '/'
    });
  }
}, 2000)


function animated() {
    $('.art-collection-scroll-arrow').animate({top: '82.6%',right: '1rem'},900).animate({top: '82%', right: '3rem'},900,animated);
}

// function addFades() {       FIX ME!!!!!!!
//   var $lazy = $(".will-fade-in");
//   var activeClass = "will-fade-in--active";
// var threshold = 3;
//
//   $(window).on("scroll", function(){
//
//     $lazy.each(function(index, item){
//
//         var pos = $(item).scrollLeft();
//         var scrollLeft = $(window).scrollLeft();
//         console.log(pos);
//         console.log(scrollLeft);
//
//         if( (scrollLeft + threshold) >= pos && !$(item).hasClass(activeClass) ){
//             $(item).addClass(activeClass)
//         }
//
//     });
//
// });
// }

if (window.location.pathname == "/art-collection") {
  $('.top-item').each(function(i){
    var self = $(this)
    setTimeout(function(){
      self.addClass('will-fade-in--active')
    }, 200 * i)
  })
  $('.bottom-item').each(function(i){
    var self = $(this)
    setTimeout(function(){
      self.addClass('will-fade-in--active')
    }, 200 * i)
  })

  // addFades()
  setTimeout(function(){
    animated()
  }, 1500)
}


if (window.location.pathname.includes('events') && $('html').hasClass('touchevents') ){

  $('.event-form').on('submit', function(){
    $('.mobile-success-message').toggleClass("display-none display-block")
  })
}

if ($('.contact-submit-container').length) {
  $('.contact-submit-container').on('mouseenter', function(){
  $(this).children().first().animate({right: '20px'},750).animate({right: '1px'},750,animated);
  $(this).children().last().animate({left: '20px'},750).animate({left: '1px'},750,animated);
  })
}






})
