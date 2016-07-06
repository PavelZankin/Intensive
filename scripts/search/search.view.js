var hhTempl = `
  <% vacs.forEach(function(vac) { %>
    <div class="job">

    <img class="star" src="../images/star.png" alt="" />

    <h3><%- vac.name %></h3>
    <a href=<%- vac.alternate_url %> > (hh.ru) </a>

    <div class="area">
      <span> <%- vac.area.name %> </span>
    </div><br/>

    <div class="responsibility">
      <span>Обязанности:</span><br/>
      <%= vac.snippet.responsibility %>
    </div><br/>

    <div class="requirement">
    <span>Требования:</span><br/>
      <%= vac.snippet.requirement %>
    </div><br/>

    <div class="salary">
      <span>Зарплата: </span><br/>
      <span>От: <%- vac.salary.from %> </span><br/>
      <span>До: <%- vac.salary.to %> </span><br/>
    </div><br/><br/>

    <span class="date"><%- vac.created_at %></span><br/>

    <hr/>
    </div>
  <% }); %>
`;


function displayVacancies(vacancies) {
  $('#list-of-results')[0].innerHTML = _.template(hhTempl)({
    vacs: vacancies
  });

    $('.employer').css('background','#fff');
    $('.applicant').css('background','lightgray')

    if ($('#list-of-results').hasClass('hidden')) {
      $('#list-of-results').removeClass('hidden');
    }

    $('.star').on('click', function() {
      var favoritesVacancies = $(this, '.star').parent();
      var urlFavoritesVacansies = $(this, '.star').parent().children('span').text();
      
      if (favoritesVacancies.hasClass('favorites')) {
        favoritesVacancies.removeClass('favorites');
        localStorage.removeItem('favoritesVacancies' + urlFavoritesVacansies);
        
    
      }else{
        favoritesVacancies.addClass('favorites');
        localStorage.setItem('favoritesVacancies' + urlFavoritesVacansies, favoritesVacancies.get(0).outerHTML);
        $('#list-of-favorites').append(localStorage.getItem('favoritesVacancies' + urlFavoritesVacansies));
      }

    });

}

