var templ = `
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
    </div>

    <br/>

    <span class="date"><%- vac.created_at %></span>

    <hr/>
  <% }); %>
`;

function makeSearch() {
  if (!getParams().text) return;

  hh('vacancies', getParams(), function(response){
    if (!response.items.length) {
      $('#list-of-results')[0].innerHTML = `
        <h1>
          НИЧЕГО, СОВЕРШЕННО НИЧЕГО НЕ НАЙДЕНО!<br/>
          ПО ЗПРОСУ: ${getParams().text}!!!
        </h1>
      `;
      return;
    };

    $('#list-of-results')[0].innerHTML = _.template(templ)({
      vacs: response.items,
    });

  });
}
