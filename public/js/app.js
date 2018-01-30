
$( document ).ready(function() {


  //mobile toggles
  $('.info-tab').on('click', function(){
    $('.info-tab').toggleClass(  "active" )

    $('.info-grid').toggleClass('no-display-mobile')
    $('.info-body-container').toggleClass('no-display-mobile')
  })

//OPEN TABLE TOGGLE
var $button = $('.js-ot-toggle')

$button.on('click', function (){
  $('.ot-modal__homepage, .ot-modal ').toggleClass('invisible visible')
} )


























})
