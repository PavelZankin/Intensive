var areas = {
  "Ульяновск": 98,
  "Москва": 1,
  "Санкт-Петербург": 2
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

function getParams(){
  return {
    text: $('#specialty')[0].value,
    area: areas[$('#city')[0].value] || 113, // Россия
    currency: 'RUR',
    salary: +($('.min')[0].innerHTML + '000') || 1000,
    //experience: $('#minExp')[0].innerHTML || 0,
    per_page: $('#per_page')[0].value || 50,
  }
}
