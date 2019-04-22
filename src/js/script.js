"use strict";

// import $ from "jquery";

$(document).ready(function() {
  // MAIN MENU
  $("#header").addClass("narrow");

  // MAIN SLIDER
  $("#mainSlider").slick({
    infinite: true,
    prevArrow: $(".slider_nav__prev"),
    nextArrow: $(".slider_nav__next"),
    appendDots: $(".main_slider__nav"),
    dots: true,
    dotsClass: "main_slider__thumbs",
    speed: 500,
    fade: true,
    cssEase: "linear"
  });
});
