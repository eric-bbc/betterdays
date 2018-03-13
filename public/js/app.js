$( document ).ready(function() {


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
 //           Event Room toggles         //
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
  $('.mobile-gallery-container').toggleClass('display-none display-block')
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
var $button = $('.js-ot-toggle')

$button.on('click', function (){
  $('.ot-modal__homepage, .ot-modal ').toggleClass('invisible visible')
} )

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
      imageScaleMode    : 'fill',
      imageAlignCenter  : true,
      controlNavigation : 'none',
      navigateByClick   : false,
      // arrowsNav         : true,
      // arrowsNavAutoHide : false,
      slidesSpacing     : 100,
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

   $('.menu-slider').find('.rsFullscreenBtn').on('click', function(){
     $('.menu-slider').addClass('display-none')
     if ( $('html').hasClass('touchevents') ) {
       $('html, body').css('overflow', 'scroll')

     }

   })


  /////////////////////////////////////////
 //           FORM BUILDER              //
/////////////////////////////////////////

// Hides Submit Button on Success
var $success = $('.success-message')
var $length = $success.text().length

if ( $length > 0 ){
  $('.event-submit').css('display', 'none')
}

















})
