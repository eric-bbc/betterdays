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

$(document).ready(function($) {

  var gallerySlider =  $('.gallery-slider').royalSlider({
                               arrowsNav         : true,
                               keyboardNavEnabled: true,
                               imageScaleMode    : 'fit-if-smaller',
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


    gallerySlider.ev.on('rsAfterContentSet', function(e, slideObject){
      var slide = slideObject.content
      var slideIndex = slideObject.id
      slide.attr('slideIndex', slideIndex)

      if (slideIndex == 0){
        slide.css({
          top: 'auto',
          bottom: '0',
          width: 'auto',
          height: '60%'
          })
      }
      if (slideIndex == 1){
        slide.css({
          top: 'auto',
          bottom: '0',
          'min-height': '75%'
          })
      }
      if (slideIndex == 3){
        console.log("I AM NUMBER 3");
        slide.css({
          top: '10rem',
          bottom: '0',
          'min-height': '75%'
          })
      }

    })



});

  /////////////////////////////////////////
 //           FORM BUILDER              //
/////////////////////////////////////////

var $success = $('.success-message')
var $length = $success.text().length

if ( $length > 0 ){
  $('.event-submit').css('display', 'none')
  console.log('we he greatest');
}




















})
