$(document).ready(function() {
  var slidesAmount = parseInt($('#slideshow .slider').children().length);
  var currentPosition = 1;
  var direction = 'to-the-right';

  $('#sli_next').click(function(e) {
    e.preventDefault();
    if (currentPosition < slidesAmount) {
      direction = 'stop';
      var oldPosition = parseInt($('#slideshow .slider').css('left').slice(0, -2));
      var newPosition = (oldPosition - 640) + 'px';
      $('#slideshow .slider').css('left', newPosition);
      currentPosition += 1;
    }
  });

  $('#sli_prev').click(function(e) {
    e.preventDefault();
    if (currentPosition > 1) {
      direction = 'stop';
      var oldPosition = parseInt($('#slideshow .slider').css('left').slice(0, -2));
      var newPosition = (oldPosition + 640) + 'px';
      $('#slideshow .slider').css('left', newPosition);
      currentPosition -= 1;
    }
  });

  var carousel = setInterval(function() {
    if (direction === 'stop') {
      clearInterval(carousel);
    }
    if (currentPosition < slidesAmount && direction === 'to-the-right') {
      var oldPosition = parseInt($('#slideshow .slider').css('left').slice(0, -2));
      var newPosition = (oldPosition - 640) + 'px';
      $('#slideshow .slider').css('left', newPosition);
      currentPosition += 1;
      if (currentPosition === slidesAmount) {
        direction = 'to-the-left';
      }
    } else if (currentPosition > 1 && direction === 'to-the-left') {
      var oldPosition = parseInt($('#slideshow .slider').css('left').slice(0, -2));
      var newPosition = (oldPosition + 640) + 'px';
      $('#slideshow .slider').css('left', newPosition);
      currentPosition -= 1;
      if (currentPosition === 1) {
        direction = 'to-the-right';
      }
    }
  }, 3000);
});
