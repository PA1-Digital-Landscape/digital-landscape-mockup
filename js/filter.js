$(document).ready(function() {
  $('#PA1').click(function(e) {
    e.preventDefault();
    $('.filter-grid').isotope({ filter: '.oakmania' });
  });
});


