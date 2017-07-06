$(document).ready(function() {
  $('#Spierling').click(function(e) {
    e.preventDefault();
    $('.filter-grid').isotope({ filter: '.oakmania' });
  });
});


$(document).ready(function() {
  $('#PA2').click(function(e) {
    e.preventDefault();
    $('.filter-grid').isotope({ filter: '.PA2'});
  });
});

