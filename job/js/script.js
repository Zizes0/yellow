$('.slider').bxSlider({
  pagerCustom: '.custom-controls',
  minSlides: 2,
  maxSlides: 5,
  slideWidth: 208,
  slideMargin: 18,
  moveSlides: 1,
  prevText: '<img src="../images/previous.png" alt="Previous" class="custom-prev">',
  nextText: '<img src="../images/next.png" alt="Next" class="custom-next">',
  onSliderLoad: function (currentIndex) {
    var $thirdBox = $('.slider-box:visible').not('.bx-clone').eq(2);
    $thirdBox.css({background: 'white',
    border: '2px solid yellow'});
    $thirdBox.addClass('slider-center');
  },
  onSlideNext: function ($slideElement, oldIndex, newIndex) {
    $('.slider-box').css({
      background: 'transparent'
    });
    $('.slider-box').css({
      border: '2px solid white'
    });
  
    var $centeredBox = $slideElement.next().next();
    $centeredBox.css({
      background: 'white',
      border: '2px solid yellow'
      
    });
  
    $('.slider-box').removeClass('slider-center');
    $centeredBox.addClass('slider-center');
  },
  onSlidePrev: function ($slideElement, oldIndex, newIndex) {
    $('.slider-box').css({
      background: 'transparent'
    });
    $('.slider-box').css({
      border: '2px solid white'
    });
    var $centeredBox = $slideElement.next().next();
    $centeredBox.css({
      background: 'white',
      border: '2px solid yellow'
    });
    $('.slider-box').removeClass('slider-center');
    $centeredBox.addClass('slider-center');
  },
});

