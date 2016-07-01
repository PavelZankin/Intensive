function hh(api, par, cb){
  var query = hh.apiDomain + api;
  var params = par || ({});
  var callback = cb || function(resp) {
    hh.lastResultObj = resp;
  }

  $.get(query, params, callback);

}

hh.apiDomain = 'https://api.hh.ru/';
hh.lastResultObj = null;

/* ====== testing ======= */
hh('vacancies', {text: 'программист', area: '1'});
