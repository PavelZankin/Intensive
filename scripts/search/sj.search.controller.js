/* SuperJob */

sj.getLocalParams = function() {
  return {
    keyword: $('#specialty')[0].value,
    town: getArea() || 'Россия',
    currency: 'rub',
    payment_from: +($('.min')[0].innerHTML + '000') || 1000,
    count: $('#per_page')[0].value /2 || 50
  };
}

function sjParseDate(date) {
  var d = new Date(date*1000);
  return {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate(),
    hour: d.getHours(),
    minute: d.getMinutes(),
    second: d.getSeconds()
  }
}

function sjSearch() {
  sj('vacancies', null, function(response) {
    if (!response.objects.length) {
      if ($('#list-of-results')[0].innerHTML.match(/\(*?.ru\)/)) {
        $('#list-of-results')[0].innerHTML = '';
      }
      $('#list-of-results')[0].innerHTML += `
        <h1>
        <br/>
          sj-mes: НИЧЕГО, СОВЕРШЕННО НИЧЕГО НЕ НАЙДЕНО<br/>
          ПО ЗАПРОСУ: ${sj.getLocalParams().keyword}!!!
        <br/>
        </h1>
      `;
      return;
    };

    var vacs = response.objects;
    vacs.forEach(function(vac){
      var d = sjParseDate(vac.date_published);
      vac.date_published = d.day+'.'+d.month+'.'+d.year+'  '+d.hour+':'+d.minute;
      vac.unixTimeFormat = +(new Date(d.year, d.month-1, d.day, d.hour, d.minute, d.second));
    });
    displayVacancies(vacs, 'sj');
  });
}
