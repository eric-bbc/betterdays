$(document).ready(function(){function e(){var e=window.location.pathname;e=e.replace(/\/$/,""),e=decodeURIComponent(e),$(".desktop-nav-link").each(function(){var a=$(this).attr("href");e.substring(0,a.length)==a&&$(this).addClass("active")})}function a(){$(".art-collection-scroll-arrow").animate({top:"95.6%",right:"1px"},750).animate({top:"95%",right:"20px"},750,a)}AOS.init(),$(".info-tab").on("click",function(){var e=$(this),a=e.attr("id");e.addClass("active"),e.siblings().removeClass("active"),$(".js-mobile-toggle").addClass("display-none"),$(".js-mobile-toggle").removeClass("display-block-imp"),$(".js-"+a).removeClass("display-none"),$(".js-"+a).addClass("display-block-imp")}),$(".room-toggle").on("click",function(){var e=$(this),a=e.attr("id");e.addClass("active"),e.addClass("will-fade-in--active"),e.siblings().removeClass("active"),$(".room-title").text(e.text()),$(".room-title").text(e.text()),$(".js-room-gallery").addClass("display-none"),$(".js-"+a).removeClass("display-none"),$(".js-"+a).addClass("display-block"),$(".js-"+a).addClass("will-fade-in--active")}),$(".js-event-gallery-toggle").on("click",function(){console.log("clickethed"),$(".event-form-container").toggleClass("display-block display-none"),$(window).trigger("resize"),$(".mobile-gallery-container").toggleClass("js-rs-hide js-rs-show"),$(".mobile-gallery-container").toggleClass("display-none display-block"),$(".mobile-gallery-container").addClass("will-fade-in--active"),$(".js-main-mobile").addClass("will-fade-in--active"),$(".js-event-form-toggle").toggleClass("display-none display-block"),$(this).addClass("display-none")}),$(".js-event-form-toggle").on("click",function(){$(this).addClass("display-none"),$(".mobile-view-gallery-toggle").toggleClass("display-block display-none"),$(".mobile-gallery-container").toggleClass("display-block display-none"),$(".event-form-container").toggleClass("display-block display-none"),$(".event-form-container").addClass("will-fade-in--active"),$(".mobile-gallery-container").toggleClass("js-rs-hide js-rs-show")}),(window.location.pathnam="/events")&&$(".event-form-container").addClass("will-fade-in--active");var l=$(".homepage-slider").royalSlider({arrowsNav:!0,keyboardNavEnabled:!0,imageScaleMode:"fill",controlNavigation:"none",loop:!0,addActiveClass:!0,transitionType:"move",slidesSpacing:40,controlsInside:!0,easeInOut:"easeInOutSine",arrowsNavAutoHide:!1,imageAlignCenter:!1,startSlideId:1,visibleNearby:{enabled:!0,centerArea:.3}}).data("royalSlider");"/"==location.pathname&&l.ev.on("rsAfterContentSet",function(e,a){var l=a.content,i=a.id;l.attr("slideIndex",i)}),$(".mobile-homepage-slider").royalSlider({imageScaleMode:"fill",controlNavigation:"none",navigateByClick:!1,arrowsNav:!0,arrowsNavAutoHide:!1,slidesSpacing:0,loop:!0,transitionType:"move",addActiveClass:!0,autoHeight:!1}).data("royalSlider"),$(".event-gallery-slider").royalSlider({imageScaleMode:"fit",controlNavigation:"none",navigateByClick:!1,arrowsNav:!0,arrowsNavAutoHide:!1,imageAlignCenter:!0,slidesSpacing:54,loop:!0,transitionType:"move",addActiveClass:!0,autoHeight:!1,autoScaleSlider:!0,easing:"easeOutSine",visibleNearby:{enabled:!0,centerArea:.4},fullscreen:{enabled:!0}}).data("royalSlider"),$(".event-image").on("click",function(){var e=$(this).data("room"),a=$("."+e+"-room-rs");a.data("royalSlider").enterFullscreen(),a.toggleClass("invisible visible"),a.toggleClass("display-none display-block"),a.addClass("will-fade-in--active")}),$(".rsFullscreenBtn").on("click",function(){var e=$(this).parent().parent();e.toggleClass("visible invisible"),e.toggleClass("display-block display-none")}),$(".mobile-event-gallery-slider").royalSlider({imageScaleMode:"fit",imageAlignCenter:!0,controlNavigation:"none",navigateByClick:!0,arrowsNav:!0,arrowsNavAutoHide:!1,loop:!0,transitionType:"move",addActiveClass:!0,autoHeight:!1}).data("royalSlider"),$(".menu-slider").royalSlider({imageScaleMode:"fit",imageAlignCenter:!0,loop:!0,transitionType:"move",controlNavigation:"none",fullscreen:{enabled:!0}}).data("royalSlider"),$(".menu-card").on("click",function(){if($("html").hasClass("no-touchevents")){var e=$(this),a=e.data("id");$(".menu-slider").data("royal-slider").goTo(a),$(".menu-slider").removeClass("display-none").addClass("will-fade-in--active-fast")}else $(".menu-slider").removeClass("display-none"),$("html, body").animate({scrollTop:0},300),$("html").css("overflow-y","hidden")}),$(".mobile-menu-card").on("click",function(){if(console.log("clicked"),$("html").hasClass("touchevents")){var e=$(this),a=e.data("id");$(".menu-slider").last().data("royal-slider").goTo(a),$(".menu-slider").removeClass("display-none")}}),$(".menu-slider").find(".rsFullscreenBtn").on("click",function(){$(".menu-slider").addClass("display-none"),$(".menu-slider").removeClass("will-fade-in--active-fast"),$("html").hasClass("touchevents")}),$(".success-message").text().length>0&&$(".event-submit").css("display","none"),e(),$(".js-mobile-nav-toggle").on("touch click",function(){$(".mobile-nav-link-container").toggleClass("open")}),$(".artpage-grid-item").on("mouseenter mouseleave",function(){$(this).find(".artimage-overlay-copy").toggleClass("opacity-off opacity-on")}),$(".art-collection-scroll-arrow").on("click",function(){var e=$(".art-collection-grid").scrollLeft();$(".art-collection-grid").animate({scrollLeft:e+600},800)}),$(".js-modal-close").on("click",function(){$(".ot-modal__homepage, .ot-modal ").toggleClass("visible invisible")}),setTimeout(function(){$.cookie("site_visited")||($(".ot-modal").toggleClass("invisible visible"),$.cookie("site_visited","true",{expires:7,path:"/"}))},2e3),"/art-collection"==window.location.pathname&&($(".artpage-grid-item").addClass("will-fade-in--active"),setTimeout(function(){a()},1500))});