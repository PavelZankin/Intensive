var hhTempl = `
  <% vacs.forEach(function(vac) { %>
    <div class="job">

    <img class="star" src="../images/star.png" alt="" />

    <h3><%- vac.name %></h3>
    <a href=<%- vac.alternate_url %> > (hh.ru) </a>

    <span class="date"><%- vac.created_at %></span><br/>

    <hr/>
    </div>
  <% }); %>
`;

var sjTempl = `
  <% vacs.forEach(function(vac) { %>
  <div class="job">

  <img class="star" src="../images/star.png" alt="" />

  <h3><%- vac.profession %></h3>
  <a href=<%- vac.link %> > (superjob.ru) </a>

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
      if ($(this, '.star').parent().hasClass('favorites')) {
        $(this, '.star').parent().removeClass('favorites');
      }else{
        $(this, '.star').parent().addClass('favorites');
      }
    });
}
