$(document).ready(function(){$(".info-tab").on("click",function(){var e=$(this),a=e.attr("id");e.addClass("active"),e.siblings().removeClass("active"),$(".js-mobile-toggle").addClass("display-none"),$(".js-mobile-toggle").removeClass("display-block-imp"),$(".js-"+a).removeClass("display-none"),$(".js-"+a).addClass("display-block-imp")}),$(".room-toggle").on("click",function(){var e=$(this),a=e.attr("id");e.addClass("active"),e.siblings().removeClass("active"),$(".room-title").text(e.text()),$(".js-room-gallery").addClass("display-none"),$(".js-"+a).removeClass("display-none"),$(".js-"+a).addClass("display-block")}),$(".js-event-gallery-toggle").on("click",function(){$(".event-form-container").addClass("display-none"),$(".mobile-gallery-container").toggleClass("display-none display-block"),$(".js-event-form-toggle").toggleClass("display-none display-block"),$(this).addClass("display-none")}),$(".js-event-form-toggle").on("click",function(){$(this).addClass("display-none"),$(".mobile-view-gallery-toggle").toggleClass("display-block display-none"),$(".mobile-gallery-container").toggleClass("display-block display-none"),$(".event-form-container").toggleClass("display-block display-none")}),$(".js-ot-toggle").on("click",function(){$(".ot-modal__homepage, .ot-modal ").toggleClass("invisible visible")});var e=$(".homepage-slider").royalSlider({arrowsNav:!0,keyboardNavEnabled:!0,imageScaleMode:"fill",controlNavigation:"none",loop:!0,addActiveClass:!0,transitionType:"move",slidesSpacing:40,controlsInside:!0,easeInOut:"easeInOutSine",arrowsNavAutoHide:!1,imageAlignCenter:!1,startSlideId:1,visibleNearby:{enabled:!0,centerArea:.3}}).data("royalSlider");"/"==location.pathname&&e.ev.on("rsAfterContentSet",function(e,a){var l=a.content,i=a.id;l.attr("slideIndex",i)}),$(".mobile-homepage-slider").royalSlider({imageScaleMode:"fill",controlNavigation:"none",navigateByClick:!1,arrowsNav:!0,arrowsNavAutoHide:!1,slidesSpacing:0,loop:!0,transitionType:"move",addActiveClass:!0,autoHeight:!1}).data("royalSlider"),$(".event-gallery-slider").royalSlider({imageScaleMode:"fit",controlNavigation:"none",navigateByClick:!1,arrowsNav:!0,arrowsNavAutoHide:!1,imageAlignCenter:!0,slidesSpacing:54,loop:!0,transitionType:"move",addActiveClass:!0,autoHeight:!1,autoScaleSlider:!0,easing:"easeOutSine",visibleNearby:{enabled:!0,centerArea:.4},fullscreen:{enabled:!0}}).data("royalSlider"),$(".event-image").on("click",function(){var e=$(this).data("room"),a=$("."+e+"-room-rs");a.data("royalSlider").enterFullscreen(),a.toggleClass("invisible visible"),a.toggleClass("display-none display-block")}),$(".rsFullscreenBtn").on("click",function(){var e=$(this).parent().parent();e.toggleClass("visible invisible"),e.toggleClass("display-block display-none")}),$(".success-message").text().length>0&&$(".event-submit").css("display","none")});