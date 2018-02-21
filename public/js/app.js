$( document ).ready(function() {


  /////////////////////////////////////////
 //           mobile toggles            //
/////////////////////////////////////////
  $('.info-tab').on('click', function(){
    $('.info-tab').toggleClass(  "active" )

    $('.info-grid').toggleClass('no-display-mobile')
    $('.info-body-container').toggleClass('no-display-mobile')
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

  var eventGallerySlider =  $('.event-gallery-slider').royalSlider({
      imageScaleMode    : 'fit',
      controlNavigation : 'none',
      navigateByClick   : false,
      arrowsNav         : true,
      arrowsNavAutoHide : false,
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

    eventGallerySlider.ev.on('rsAfterContentSet', function() {
      eventGallerySlider.enterFullscreen()
    });

    eventGallerySlider.ev.on('rsExitFullscreen', function() {
      eventGallerySlider.enterFullscreen()
    });

    eventGallerySlider.next()
    eventGallerySlider.next()

    $('.event-image').on('click', function() {
      $('.event-gallery-slider').toggleClass('invisible visible')
      $('.event-gallery-slider').toggleClass('display-none display-block')
    })

    $('.rsFullscreenIcn').on('click', function(){
      $('.event-gallery-slider').toggleClass('visible invisible')
      $('.event-gallery-slider').toggleClass('display-block display-none')
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
