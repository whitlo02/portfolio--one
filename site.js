$('#circle').hover(function() {
  $('p').html ("We changed the text!");
});

$('#circle').click(function() {
 $('img').attr('src', 'https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1');
});

$('.square').hover(function() {
  $(this).css('background-color', 'blue');
  $(this).css("height" , "300px");
  $(this).css("width" , "300px");

});

$(function()  {
  $('#draggable').draggable();
});
