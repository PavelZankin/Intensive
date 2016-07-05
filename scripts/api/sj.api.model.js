'use strict';

function sj(api, par, cb){
  var query = sj.apiDomain + api;
  var params = par || sj.getLocalParams();
  var callback = cb || function(resp) {
    console.log('sj-mes: Нет обработчика объекта ответа!');
  }

  $.get(query, params, function(resp) {
    sj.lastResultObj = resp;
    callback(resp);
  });
}

sj.apiDomain = 'https://api.superjob.ru/2.0/';
sj.lastResultObj = 'no result';
sj.getLocalParams = function() {
  return {};
};
