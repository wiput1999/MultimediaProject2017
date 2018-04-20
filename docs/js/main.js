$(document).ready(function() {
  $(window).scroll(function() {
    $('.header').css('opacity', ($(window).height() - $(this).scrollTop()) / $(window).height() + 0.2);
    if ($(this).scrollTop() >= $(window).height() - $(window).height() / 2) {
      // Scroll under header
      $('#mainNav')
        .addClass('header-nav-solid')
        .removeClass('header-nav-transparent');
    } else {
      // At header
      $('#mainNav')
        .removeClass('header-nav-solid')
        .addClass('header-nav-transparent');
    }
  });
});

(function($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top
          },
          1250,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#navbarResponsive',
    offset: 54
  });
})(jQuery); // End of use strict
