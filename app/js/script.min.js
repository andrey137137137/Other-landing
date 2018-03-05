;'use strict';

var slider = (function(){

  return {

    init: function()
    {
      // if (!$('.main_slider__slider_list').length)
      // {
      //   return;
      // }

      var self = this;

      $('.main_slider__nav .slider_nav__arrow').click(function()
      {
        var $this = $(this),
            slides = $this.closest('.main_slider').find('.main_slider__slide'),
            activeSlide = slides.filter('.active'),
            prevSlide = activeSlide.prev(),
            nextSlide = activeSlide.next(),
            firstSlide = activeSlide.first(),
            lastSlide = activeSlide.last();

        // console.log($this.closest('.main_slider'));

        if ($this.hasClass('slider_nav__next'))
        {
          if (nextSlide.length)
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
          if (prevSlide.length)
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
          movableSlide = slides.filter('.movable')
          count = slides.length,
          duration = 500;

      slide.css('opacity', 0).addClass('movable');

      activeSlide.animate({'opacity': 0}, duration);
      movableSlide.animate({'opacity': 1}, duration, function()
      {
        var $this = $(this);

        slides.css('opacity', 0).removeClass('active');
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
