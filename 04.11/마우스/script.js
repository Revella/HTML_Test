let pointSize = $(".pointer").width();

$("#wrap").mousemove(function(e) {
  $(".pointer").css("top", e.pageY-pointSize);
  $(".pointer").css("left", e.pageX-pointSize);
  $(".pointer").fadeIn();
});

$("#wrap").on("mouseleave", function() {
  $(".pointer").fadeOut();
});