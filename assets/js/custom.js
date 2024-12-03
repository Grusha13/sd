$(document).ready(function () {
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#scrollspy",
  });

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    if ($(this).scrollTop() > scrollTrigger) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("fixed");
    } else {
      $(".navbar").removeClass("fixed");
    }

    var mobMenu = $(".mob-menu-wrapper");
    var mobMenuOffset = mobMenu.offset().top;
    var windowHeight = $(window).height();

    var scrollPos = $(window).scrollTop();
        mobMenu.find(".nav-link").each(function () {
            var sectionOffset = $($(this).attr("href")).offset().top - 80; // Adjust offset for sticky top
            if (scrollPos >= sectionOffset) {
                mobMenu.find(".nav-link").removeClass("active");
                $(this).addClass("active");
            }
        });

    if (scrollPos + windowHeight >= mobMenuOffset) {
        $(".mob-menu-wrapper").addClass("fixed-menu");
    } else {
        $(".mob-menu-wrapper").removeClass("fixed-menu");
    }

    if (scrollPos === 0) {
      $(".mob-menu-wrapper").removeClass("fixed-menu");
  }
  });

  var scrollTrigger = 500;

  $(window).scroll(function () {
    if ($(this).scrollTop() > scrollTrigger) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });

  var mobMenuWrapper = $(".mob-menu-wrapper");
  var navLinks = $(".mob-menu .nav-link");

  $(window).on("activate.bs.scrollspy", function () {
      var activeLink = $(".mob-menu .nav-link.active");

      if (activeLink.length) {
          var mobMenuScroll = mobMenuWrapper.scrollLeft();
          var linkPosition = activeLink.position().left + mobMenuScroll - (mobMenuWrapper.width() / 2) + (activeLink.width() / 2);
          
          mobMenuWrapper.animate({ scrollLeft: linkPosition }, 200);
      }
  });

  navLinks.click(function (e) {
      e.preventDefault();
      var target = $($(this).attr("href"));
      $("html, body").animate({
          scrollTop: target.offset().top - 70 
      }, 500);
  });
  
  $("#toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  $("#navbarSupportedContent").on("shown.bs.collapse", function () {
    $(".fa-bars").hide();
    $(".fa-xmark").show();
  });

  $("#navbarSupportedContent").on("hidden.bs.collapse", function () {
    $(".fa-bars").show();
    $(".fa-xmark").hide();
  });

  ("use strict");

  var usernameError = true,
    emailError = true;
  $("input").blur(function () {
    if ($(this).hasClass("name")) {
      if ($(this).val().length === 0) {
        $(this)
          .siblings("span.error")
          .text("Please type your full name")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        usernameError = true;
      } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
        $(this)
          .siblings("span.error")
          .text("Please type at least 6 characters")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        usernameError = true;
      } else {
        $(this)
          .siblings(".error")
          .text("")
          .fadeOut()
          .parent(".form-group")
          .removeClass("hasError");
        usernameError = false;
      }
    }
    // Email
    if ($(this).hasClass("email")) {
      if ($(this).val().length == "") {
        $(this)
          .siblings("span.error")
          .text("Please type your email address")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        emailError = true;
      } else {
        $(this)
          .siblings(".error")
          .text("")
          .fadeOut()
          .parent(".form-group")
          .removeClass("hasError");
        emailError = false;
      }
    }
    if ($(this).hasClass("phone")) {
      if ($(this).val().length == "") {
        $(this)
          .siblings("span.error")
          .text("Please enter your phone number")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        emailError = true;
      } else {
        $(this)
          .siblings(".error")
          .text("")
          .fadeOut()
          .parent(".form-group")
          .removeClass("hasError");
        emailError = false;
      }
    }
  });

  $("#loadMore, #workMore, #packageMore, #whyMore, #careMore").click(
    function () {
      const target = $($(this).data("target"));
      const fullHeight = target.prop("scrollHeight");

      target.animate({ maxHeight: fullHeight }, 1000);
      $(this).hide();
      $(this)
        .siblings("#loadLess, #workLess, #packageLess, #whyLess, #careLess")
        .show();
      $(this).closest(".load-btn").addClass("active");
    }
  );

  $("#loadLess, #workLess, #packageLess, #whyLess, #careLess").click(
    function () {
      const target = $($(this).data("target"));
      const initialHeight = 150;
      target.animate({ maxHeight: initialHeight }, 1000);
      $(this).hide();
      $(this)
        .siblings("#loadMore,#workMore, #packageMore, #whyMore, #careMore")
        .show();
      $(this).closest(".load-btn").removeClass("active");
    }
  );
});
