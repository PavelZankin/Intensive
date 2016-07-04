var hhTempl = `
  <% vacs.forEach(function(vac) { %>
    <div class="job">

    <img class="star" src="../images/star.png" alt="" />

    <h3><%- vac.name %></h3>

    <a href=<%- vac.alternate_url %> >("Посмотреть на hh.ru")</a>

    <br/>

    <span class="date"><%- vac.created_at %></span>

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
      if ($(this, '.star').parent().hasClass('favorites')) {
        $(this, '.star').parent().removeClass('favorites');
      }
      else $(this, '.star').parent().addClass('favorites');
    });
}
