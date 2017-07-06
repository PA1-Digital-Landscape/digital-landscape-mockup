$(document).ready(function() {
  $('#Spierling').click(function(e) {
    e.preventDefault();
    $('.filter-grid').isotope({ filter: '.oakmania' });
  });
});


$(document).ready(function() {
  $('#SS2017').click(function(e) {
    e.preventDefault();
    $('.filter-grid').isotope({ filter: '.ss17'});
  });
});

