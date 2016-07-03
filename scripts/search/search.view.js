var hhTempl = `
  <% vacs.forEach(function(vac) { %>
    <div class="job">
    <h3><%- vac.name %></h3>

    <span><%- vac.area.name %></span><br/>

    <a href=<%- vac.alternate_url %> >(Посмотреть на hh.ru)</a>

    <div class="requirement">
      <%= vac.snippet.requirement %>
    </div>

    <br/>

    <div class="responsibility">
      <%= vac.snippet.responsibility %>
    </div><br/>

    <div class="salary">
      <span>Зарплата</span><br/>
      <span>От: <%- vac.salary.from %> </span><br/>
      <span>До: <%- vac.salary.to %> </span><br/>
    </div>

    <br/>

    <span class="date"><%- vac.created_at %></span>

    <hr/>
    </div>
  <% }); %>
`;

function displayVacancies(vacancies) {
  $('#list-of-results')[0].innerHTML = _.template(hhTempl)({
    vacs: vacancies,
  });
}
