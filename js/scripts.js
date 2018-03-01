$(document).ready(function() {

  $("#scroll").click(function(){
    $("body, html").stop()
    $("body, html").animate({ scrollTop: $(".logo").offset().top},"slow");
  })

  $(".lander").click(function() {
    $(".lander").fadeOut(2000);
  })

})
