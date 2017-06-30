$(document).ready(function() {
  $('#PA1').click(function(e) {
    e.preventDefault();
    $('.grid').isotope({ filter: '.Quest' });
  });
});


