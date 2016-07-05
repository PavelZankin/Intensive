'use strict';

function sj(api, par, cb){
  var query = sj.apiDomain + api;
  var params = par || sj.getLocalParams();
  var callback = cb || function(resp) {
    console.log('sj-mes: Нет обработчика объекта ответа!');
  }

  $.ajax(sj.apiDomain + api + '/', {
    data: params,
    headers: {
      'X-Api-App-Id': 'v1.r0752ba4599e089b98dc367ec25b0a19757edd951a719e955fbbe69451d6e8be6a7dee63e.284debb93b9b73e6158488aad76de2050822fc07'
    },
    success: function(resp) {
      sj.lastResultObj = resp;
      callback(resp);
    }
  });
}

sj.apiDomain = 'https://api.superjob.ru/2.0/';
sj.lastResultObj = 'no result';
sj.getLocalParams = function() {
  return {};
};
