;$(document).ready(function(){'use strict';

  // MAIN MENU
  $('#header').addClass('narrow');

  // MAIN SLIDER
  $('.main_slider__slider_list').bxSlider({
    wrapperClass: 'dark_section main_slider',
    // adaptiveHide: true,
    mode: 'fade',
    auto: true,
    // autoControls: true,
    // stopAutoOnClick: true,
    // pager: true
    pagerSelector: 'li.slider_nav__thumb.main_slider__thumb',
    prevSelector: '.slider_nav__arrow.slider_nav__prev',
    nextSelector: '.slider_nav__arrow.slider_nav__next'
  });

});
