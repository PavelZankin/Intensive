
$('.applicant').on('click', function() {

	$('.star').on('click', function() {
        	var favoritesVacancies = $(this, '.star').parent();
        	var urlFavoritesVacansies = $(this, '.star').parent().children('span').text();
      
        	if (favoritesVacancies.hasClass('favorites')) {
        		favoritesVacancies.removeClass('favorites');
        		localStorage.removeItem('favoritesVacancies' + urlFavoritesVacansies);
        		$('#list-of-favorites').empty(favoritesVacancies);
        		$('#list-of-favorites').append(renderAllVacancies())
    
        	}else{
        		favoritesVacancies.addClass('favorites');
        	}
    	});

	if ($('.job').hasClass('favorites')) {
 		$('#list-of-favorites').removeClass('hidden');
  		$('#list-of-results').addClass('hidden');

	}

	else $('#list-of-results').addClass('hidden');


})

$('.employer').on('click', function() {
	if ($('.applicant').hasClass('active')) {
 		$('#list-of-favorites').addClass('hidden');
 		$('#list-of-results').removeClass('hidden');
	}

		$('.star').on('click', function() {
        	var favoritesVacancies = $(this, '.star').parent();
        	var urlFavoritesVacansies = $(this, '.star').parent().children('span').text();
      
        	if (favoritesVacancies.hasClass('favorites')) {
          	favoritesVacancies.removeClass('favorites');
          	localStorage.removeItem('favoritesVacancies' + urlFavoritesVacansies);
          	$('#list-of-favorites').empty(favoritesVacancies);
          	$('#list-of-favorites').append(renderAllVacancies())
    
        	}else{
          	favoritesVacancies.addClass('favorites');
          	localStorage.setItem('favoritesVacancies' + urlFavoritesVacansies, favoritesVacancies.get(0).outerHTML);
          	$('#list-of-favorites').empty(favoritesVacancies);
          	$('#list-of-favorites').append(renderAllVacancies());
        	}

    	});

})

function renderAllVacancies() {
	if (localStorage.length !== null) {
		for (var i = 0; i < localStorage.length; i++) {
			$('#list-of-favorites').append(localStorage.getItem(localStorage.key(i)));
		}      	
    }
}

renderAllVacancies();
