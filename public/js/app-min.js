$(document).ready(function(){$(".info-tab").on("click touchstart",function(){console.log($(this)),$(".info-tab").toggleClass("active"),$(".info-grid").toggleClass("no-display"),$(".info-body-container").toggleClass("no-display")})});