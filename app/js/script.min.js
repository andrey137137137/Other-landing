;'use strict';

var slider = (function(){

  return {

    init: function()
    {
      if (!$('.main_slider__slider_list').length)
      {
        return;
      }

      var self = this;

      $('.main_slider__nav .slider_nav__arrow').click(function(event)
      {
        event.preventDefault();

        var $this = $(this),
            slides = $this.closest('.main_slider').find('.main_slider__slide'),
            activeSlide = slides.filter('.active'),
            prevSlide = activeSlide.prev(),
            nextSlide = activeSlide.next(),
            firstSlide = slides.first(),
            lastSlide = slides.last();

        if ($this.hasClass('slider_nav__next'))
        {
          if (nextSlide.index() >= 0)
          {
            self.moveSlide(nextSlide, 'forward');
          }
          else
          {
            self.moveSlide(firstSlide, 'forward');
          }
        }
        else if ($this.hasClass('slider_nav__prev'))
        {
          if (prevSlide.index() >= 0)
          {
            self.moveSlide(prevSlide, 'backward');
          }
          else
          {
            self.moveSlide(lastSlide, 'backward');
          }
        }
      });
    },

    moveSlide: function(slide, direction)
    {
      var container = slide.closest('.main_slider'),
          slides = container.find('.main_slider__slide'),
          activeSlide = slides.filter('.active'),
          movableSlide = slide,
          count = slides.length,
          duration = 500;

      movableSlide.css('opacity', 0).addClass('movable');

      // activeSlide.animate({'opacity': 0}, duration);
      movableSlide.animate({'opacity': 1}, duration, function()
      {
        var $this = $(this);

        // slides.css('opacity', 0).removeClass('active');
        slides.removeClass('active');
        $this.toggleClass('movable active');
      });
    }

  }

}());

$(document).ready(function(){

  // MAIN MENU
  $('#header').addClass('narrow');

  // MAIN SLIDER
  slider.init();

});
