'use strict';

function hh(api, par, cb){
  var query = hh.apiDomain + api;
  var params = par || hh.getLocalParams();
  var callback = cb || function(resp) {
    console.log('hh-mes: Нет обработчика объекта ответа!');
  }

  $.get(query, params, function(resp) {
    hh.lastResultObj = resp;
    callback(resp);
  });
}

hh.apiDomain = 'https://api.hh.ru/';
hh.lastResultObj = 'no result';
hh.getLocalParams = function () {
  return {};
};
