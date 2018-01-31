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

   $(".royalSlider").royalSlider({
      arrowsNav         : true,
      keyboardNavEnabled: true,
      imageScaleMode    : 'fit',
      controlNavigation : 'bullets',
      loop              : true,
      addActiveClass    : true,
      transitionType    : 'move',
      slidesSpacing     : 10,
      controlsInside    : true,
      visibleNearby     : {
        enabled: true,
        centerArea: 0.30

      }
   });
});




























})
