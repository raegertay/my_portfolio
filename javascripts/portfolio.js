$(document).ready(function() {
  // Scoll animations for links in navbar
  $(".nav-link-about-me").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  $(".nav-link-my-projects").click(function() {
    var offset = -75

    $('html, body').animate({
      scrollTop: $(".my-projects").offset().top + offset
    }, 1000);
  });

  $(".nav-link-links").click(function() {
    var offset = -50

    $('html, body').animate({
      scrollTop: $(".links").offset().top + offset
    }, 1000);
  });

  $(".nav-link-contact-me").click(function() {
    var offset = -50

    $('html, body').animate({
      scrollTop: $(".contact-me").offset().top + offset
    }, 1000);
  });

  // Add effects to logo
  $(".links-logo, .contact-me-logo").mouseover(function() {
    $(this).effect("shake", {distance: 10, times: 1});
  });

  // Slide toggle contact-me info
  $(".contact-me-logo").click(function() {
    $(this).next().toggle('slow');
  });
});
