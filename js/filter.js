$(document).ready(function() {
  $('#Spierling').click(function(e) {
    e.preventDefault();
    $('.filter-grid').isotope({ filter: '.oakmania' });
  });
});


