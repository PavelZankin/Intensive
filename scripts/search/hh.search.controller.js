/* HeadHunter */
var areas = {};

hh('areas', {per_page: 10000000}, function(countries){
  var goodList = {};
  countries.forEach(function(country) {
    goodList[country.name] = country.id; //countries
    var kids = country.areas;
    kids.forEach(function(region){
      goodList[region.name] = region.id; //regions
      kids = region.areas;
      kids.forEach(function(city){
        goodList[city.name] = city.id; // cities
      });
    });
  });
  areas = goodList;
});

function getArea() {
  var word = $('#city')[0].value;
  if (!word) return;
  word = word.toLowerCase();
  var firstLetter = word[0].toUpperCase();
  var ending = word.slice(1);
  return firstLetter+ending;
}


hh.getLocalParams = function() {
  return {
    text: $('#specialty')[0].value,
    area: areas[getArea()] || 113, // Россия
    currency: 'RUR',
    salary: +($('.min')[0].innerHTML + '000') || 1000,
    //experience: $('#minExp')[0].innerHTML || 0,
    per_page: $('#per_page')[0].value /2 || 50,
  }
}

function hhParseDate(hhDate) {
  // format '(yyyy-mm-dd)T(hh:mm:ss)[+-]GMT'

  var dateArr = hhDate.match(/\d{4}-\d{2}-\d{2}/)[0].split('-'),
      timeArr = hhDate.match(/\d{2}:\d{2}:\d{2}/)[0].split(':');

  return {
    year: dateArr[0],
    month: dateArr[1],
    day: dateArr[2],
    hour: timeArr[0],
    minute: timeArr[1],
    second: timeArr[2]
  };
}

function getStringParam4CeckBoxes() {
  var empl = $('#employment')[0];
  var sched = $('#schedule')[0];
  var eChecked = [];
  var sChecked = [];

  for (var i=0; i<empl.children.length; i++) {
    if (empl.children[i].checked) {
      eChecked[i] = true;
    }
  }
  console.log(eChecked);

  for (var i=0; i<sched.children.length; i++) {
    if (sched.children[i].checked) {
      sChecked[i] = true;
    }
  }
  console.log(sChecked);
  var eStringParam = '?employment=';
  var sStringParem = '&schedule=';

  if (eChecked[0]) eStringParam += 'full&employment=';

  // незаконченная функция, работает некорректно!!!
}

function hhSearch() {
  if (!hh.getLocalParams().text) return;

  hh('vacancies', null, function(response){
    if (!response.items.length) {
      if ($('#list-of-results')[0].innerHTML.match(/\(*?.ru\)/)) {
        $('#list-of-results')[0].innerHTML = '';
      }
      $('#list-of-results')[0].innerHTML += `
        <h1>
          <br/>
            hh-mes: НИЧЕГО, СОВЕРШЕННО НИЧЕГО НЕ НАЙДЕНО<br/>
            ПО ЗАПРОСУ: ${hh.getLocalParams().text}!!!
          <br/>
        </h1>
      `;
      return;
    };

    //обработаем параметры, чтобы все было валидно и не вызывало ошибок...
    var vacs = response.items;
    vacs.forEach(function(vac){
      if (!vac.salary) {
        vac.salary = {
          from: 'Не указано',
          to: 'Не указано'
        }
      } else if (!vac.salary.from || !vac.salary.to) {
        vac.salary.from = vac.salary.from || 'Не указано';
        vac.salary.to = vac.salary.to || 'Не указано';
      }

      var d = hhParseDate(vac.created_at);
      vac.created_at = d.day+'.'+d.month+'.'+d.year+'  '+d.hour+':'+d.minute;
      vac.unixTimeFormat = +(new Date(d.year, d.month, d.day, d.hour, d.minute, d.second));
    });

    displayVacancies(vacs, 'hh');

  });
}
