$(document).ready(function() {

  // Toggle background and fonts color for navbar
  var navbar = $(".navbar");
  var navbarFonts = $(".navbar-nav li a");
  var navbarColor;
  var isTransparent = true;
  $(window).scroll(function() {
    if ($('html, body').scrollTop() >= ($(".about-me").offset().top) && isTransparent) {
      isTransparent = false;
      // console.log("Blue");
      navbarColor = $.Color( navbar.css('backgroundColor') );
      navbar.stop().animate({backgroundColor : navbarColor.alpha(0.9)}, 500);
      navbarFonts.stop().animate({color: "white"}, 400);
      navbar.toggleClass("navbar-light").toggleClass("navbar-dark");
    } else if ($('html, body').scrollTop() < $(".about-me").offset().top && !isTransparent){
      isTransparent = true;
      // console.log("Transparent");
      navbarColor = $.Color( navbar.css('backgroundColor') );
      navbar.stop().animate({backgroundColor : navbarColor.alpha(0)}, 500);
      navbarFonts.stop().animate({color: "rgba(0, 135, 206, 1)"}, 400);
      navbar.toggleClass("navbar-dark").toggleClass("navbar-light");
    }
  });

  // Scoll animations for links in navbar
  // var offset = parseInt(navbar.css('min-height'));
  var offset = 0;
  $(".nav-link-home").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
  $(".nav-link-about-me").click(function() {
    $('html, body').animate({
      scrollTop: $(".about-me").offset().top - offset
    }, 1000);
  });
  $(".nav-link-my-projects").click(function() {
    $('html, body').animate({
      scrollTop: $(".my-projects").offset().top - offset
    }, 1000);
  });
  $(".nav-link-links").click(function() {
    $('html, body').animate({
      scrollTop: $(".links").offset().top - offset
    }, 1000);
  });
  $(".nav-link-contact-me").click(function() {
    $('html, body').animate({
      scrollTop: $(".contact-me").offset().top - offset
    }, 1000);
  });

  // Quotes cycling and fading
  var i = 0;
  var fadeDuration = 2000;
  var displayDuration = 5000;
  animateQuotes();

  function animateQuotes() {
    setTimeout(function () {
      $(".blockquote").fadeOut(fadeDuration, function() {
        cycleQuotes();
        $(".blockquote").fadeIn(fadeDuration, function() {
          animateQuotes();
        })
      });
    }, displayDuration);
  }

  function cycleQuotes() {
    i = (i == quotes.length - 1) ? 0 : (i + 1);
    $(".blockquote p").text(quotes[i].quote);
    $(".blockquote footer").text(quotes[i].source);
  }


  // Add effects to logo
  $(".links-logo, .contact-me-logo").mouseover(function() {
    $(this).effect("shake", {distance: 10, times: 1});
  });

  // Slide toggle contact-me info
  $(".contact-me svg").click(function() {
    $(this).next().toggle('slow');
  });

  //==================== Quotes Array=====================//
  var quotes = [
    {quote: "Stay hungry.\nStay foolish.", source: "Steve Jobs"},
    {quote: "Never stop learning, because life never stops teaching.", source: "Unknown"},
    {quote: "No great thing is created suddenly.", source: "Epictetus"},
    {quote: "There are no secrets to success.\nIt is the result of preparation, hard work, and learning from failure.", source: "Colin Powell"},
    {quote: "The only true wisdom is in knowing you know nothing.", source: "Socrates"},
    {quote: "I have not failed.\nI've just found 10,000 ways that won't work.", source: "Thomas A. Edison"},
    {quote: "The secret of getting ahead is getting started.", source: "Mark Twain"},
    {quote: "Wise men speak because they have something to say.\nFools because they have to say something.", source: "Plato"},
    {quote: "The best and most beautiful things in the world cannot be seen or even touched\n- they must be felt with the heart.", source: "Helen Keller"}
  ];
});
