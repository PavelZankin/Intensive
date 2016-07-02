/* HeadHunter */
var areas = {}

$.getJSON('scripts/api/hh.areas.json', {}, function(ans){
  areas = ans;
});

function getArea() {
  var word = $('#city')[0].value;
  if (!word) return;
  word = word.toLowerCase();
  var firstLetter = word[0].toUpperCase();
  var ending = word.slice(1);
  return areas[firstLetter+ending];
}


hh.getLocalParams = function() {
  return {
    text: $('#specialty')[0].value,
    area: getArea() || 113, // Россия
    currency: 'RUR',
    salary: +($('.min')[0].innerHTML + '000') || 1000,
    //experience: $('#minExp')[0].innerHTML || 0,
    per_page: $('#per_page')[0].value || 50,
  }
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

function makeSearch() {
  if (!hh.getLocalParams().text) return;

  hh('vacancies', null, function(response){
    if (!response.items.length) {
      $('#list-of-results')[0].innerHTML = `
        <h1>
          hh-mes: НИЧЕГО, СОВЕРШЕННО НИЧЕГО НЕ НАЙДЕНО<br/>
          ПО ЗАПРОСУ: ${hh.getLocalParams().text}!!!
        </h1>
      `;
      return;
    };
    displayVacancies(response.items);

  });
}
