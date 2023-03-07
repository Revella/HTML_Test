$(function() {
  $('nav a').click(function(e) {
    $.scrollTo(this.hash || 0, 1200);
    e.preventDeafult();
  });
});