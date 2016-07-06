var hhTempl = `
  <% vacs.forEach(function(vac) { %>
    <div class="job" data-link="<%- vac.alternate_url %>">

    <img class="star" src="../images/star.png" alt="" />

    <h3><%- vac.name %></h3>

    <div class="area">
      <%- vac.area.name %>
    </div><br/>

    <div class="salary">
      <span>Зарплата:</span><br/>
      <span> От: <%- vac.salary.from %></span><br/>
      <span> До: <%- vac.salary.to %></span><br/>
    </div><br/>



    <span class="date"><%- vac.created_at %></span><br/>

    <hr/>
    </div>
  <% }); %>
`;

var sjTempl = `
  <% vacs.forEach(function(vac) { %>
  <div class="job" data-link="<%- vac.link %>">

  <img class="star" src="../images/star.png" alt="" />

  <h3><%- vac.profession %></h3>

  <div class="area">
    <%- vac.address %>
  </div><br/>

  <div class="salary">
    <span>Зарплата:</span><br/>
    <span> От: <%- vac.payment_from %></span><br/>
    <span> До: <%- vac.payment_to %></span><br/>
  </div><br/>

  <span class="date"><%- vac.date_published %></span><br/>

  <hr/>
  </div>
<% }); %>
`;


function displayVacancies(vacancies, format) {

  if ($('#list-of-results')[0].innerHTML.match(/-mes: /)) {
    $('#list-of-results')[0].innerHTML = '';
  }

  if (format == 'hh') {
    $('#list-of-results')[0].innerHTML = _.template(hhTempl)({
      vacs: vacancies
    });
  }else if (format == 'sj') {
    $('#list-of-results')[0].innerHTML += _.template(sjTempl)({
      vacs: vacancies
    });
  }else{
    throw new Error('Не верен (или не указан) format вывода вакансий;');
  }

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
