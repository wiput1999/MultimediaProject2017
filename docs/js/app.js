$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= $(window).height()) {
      // Scroll under header
      $('.video').hide();
    } else {
      // At header
      $('.video').show();
    }
  });
});
