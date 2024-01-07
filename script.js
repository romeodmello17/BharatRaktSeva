$(function() {
    $('#register').hover(function() {
      $('#svgreg').css('fill', 'yellow');
    }, function() {
      // on mouseout, reset the background colour
      $('#svgreg').css('fill', 'white');
    });
  });