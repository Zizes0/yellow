$('.slider').bxSlider({
  pager: false,
  minSlides: 2,
  maxSlides: 5,
  slideWidth: 208,
  slideMargin: 18,
  moveSlides: 1,
  prevText: '<span class="custom-prev">Previous</span>',
  nextText: '<span class="custom-next">Next</span>',
  onSliderLoad: function (currentIndex) {
    $('.slider-box:visible').not('.bx-clone').eq(2).addClass('slider-center');
  },
  onSlideNext: function ($slideElement, oldIndex, newIndex) {
    $('.slider-box').removeClass('slider-center');
    $slideElement.next().next().addClass('slider-center');
  },
  onSlidePrev: function ($slideElement, oldIndex, newIndex) {
    $('.slider-box').removeClass('slider-center');
    $slideElement.next().next().addClass('slider-center');
  }
});
