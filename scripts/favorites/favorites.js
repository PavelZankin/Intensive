
$('.applicant').on('click', function() {
  if ($('.job').hasClass('favorites')) {
  	$('#list-of-favorites').removeClass('hidden');
    $('#list-of-favorites').html($('.favorites'));
    $('#list-of-results').addClass('hidden');
  }
  else $('#list-of-results').addClass('hidden');

})

$('.employer').on('click', function() {
 if ($('.applicant').hasClass('active')) {
 	$('#list-of-favorites').addClass('hidden');
 	$('#list-of-results').removeClass('hidden');
 }
})