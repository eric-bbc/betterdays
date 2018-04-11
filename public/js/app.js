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
  $self.siblings().removeClass(  "active" )
  $('.room-title').text( $self.text() )
  $('.room-title').text( $self.text() )



  $('.js-room-gallery').addClass('display-none')
  $( '.js-' + $id ).removeClass('display-none')
  $( '.js-' + $id ).addClass('display-block')
})

$('.js-event-gallery-toggle').on('click', function(){
  $('.event-form-container').addClass('display-none')
  $(window).trigger('resize');
  $('.mobile-gallery-container').toggleClass('js-rs-hide js-rs-show')
  $('.js-event-form-toggle').toggleClass('display-none display-block')
  $(this).addClass('display-none')
})

$('.js-event-form-toggle').on('click', function(){
  $(this).addClass('display-none')
  $('.mobile-view-gallery-toggle').toggleClass('display-block display-none')
  $('.mobile-gallery-container').toggleClass('display-block display-none')
  $('.event-form-container').toggleClass('display-block display-none')
})



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
                         slidesSpacing     : 40,
                         controlsInside    : true,
                         easeInOut         : 'easeInOutSine',
                         arrowsNavAutoHide : false,
                         imageAlignCenter  :false,
                         startSlideId      : 1,
                         visibleNearby     : {
                           enabled: true,
                           centerArea: 0.30
                         }
                    }).data('royalSlider')

      if ( location.pathname == '/' ) {
        homepageSlider.ev.on('rsAfterContentSet', function(e, slideObject){
          var slide = slideObject.content
          var slideIndex = slideObject.id
          slide.attr('slideIndex', slideIndex)

        })

        // homepageSlider.ev.on('rsBeforeMove', function() {
        //   console.log('up in hee');
        //   var $activeSlideIndex = $('.rsActiveSlide img').attr('slideindex')
        //   console.log('slide = ' + $activeSlideIndex);
        //   // var $leftSlide = $(`[slideindex=${$activeSlideIndex - 2}]`)
        //   $leftSlide.css('opacity', '0.7')
        // })
      }


    $('.mobile-homepage-slider').royalSlider({
      imageScaleMode    : 'fill',
      controlNavigation : 'none',
      navigateByClick   : false,
      arrowsNav         : true,
      arrowsNavAutoHide : false,
      slidesSpacing     : 0,
      loop              : true,
      transitionType    : 'move',
      addActiveClass    : true,
      autoHeight        : false
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
        enabled         : true
      }
    }).data('royalSlider');


    $('.event-image').on('click', function() {
      var room = $(this).data('room')
      var $rs = $('.' + room + '-room-rs')
      $rs.data('royalSlider').enterFullscreen()
      $rs.toggleClass('invisible visible')
      $rs.toggleClass('display-none display-block')
    })

    $('.rsFullscreenBtn').on('click', function(){
      var $openSlider = $(this).parent().parent()
      $openSlider.toggleClass('visible invisible')
      $openSlider.toggleClass('display-block display-none')
    })


    $('.mobile-event-gallery-slider').royalSlider({
      imageScaleMode    : 'fit',
      imageAlignCenter  : true,
      controlNavigation : 'none',
      navigateByClick   : true,
      arrowsNav         : true,
      arrowsNavAutoHide : false,
      loop              : true,
      transitionType    : 'move',
      addActiveClass    : true,
      autoHeight        : false
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

     fullscreen        : {
       enabled         : true
     }
   }).data('royalSlider')

   // $('.mobile-menu-slider').royalSlider({
   //   imageScaleMode    : 'fit',
   //   imageAlignCenter  : true,
   //   loop              : true,
   //   transitionType    : 'move',
   //   controlNavigation : 'none',
   //
   //   fullscreen        : {
   //     enabled         : true
   //   }
   // }).data('royalSlider')

   $('.menu-card').on('click', function(){
     //desktop
     if ( $('html').hasClass('no-touchevents') ) {
       var $this = $(this)
       var index = $this.data('id')
       var slider = $('.menu-slider').data('royal-slider')
       slider.goTo(index)
       $('.menu-slider').removeClass('display-none')
     } else {
        $('.menu-slider').removeClass('display-none')
        $("html, body").animate({
                scrollTop: 0
            }, 300);
        $('html').css('overflow-y', 'hidden')
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
     } else {



     }

   })

   $('.menu-slider').find('.rsFullscreenBtn').on('click', function(){
     $('.menu-slider').addClass('display-none')

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






})
