/*var httpService = {

     id: 'httpService',
     get: function(url){

            var xhr = new XMLHttpRequest();

        // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
        xhr.open('GET', url, false);

        // 3. Отсылаем запрос
        xhr.send();

        // 4. Если код ответа сервера не 200, то это ошибка
        if (xhr.status != 200) {
        // обработать ошибку
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        } else {
        // вывести результат
                return JSON.parse(xhr.responseText);
        //alert( xhr.responseText ); // responseText -- текст ответа.
        };
          },
          post: function(url,token){

              var xhr = new XMLHttpRequest();

          var body = '';

          xhr.open("POST", url, true);
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          xhr.setRequestHeader('X-Api-App-Id', 'v1.r0752ba4599e089b98dc367ec25b0a19757edd951a719e955fbbe69451d6e8be6a7dee63e.284debb93b9b73e6158488aad76de2050822fc07');
		  xhr.setRequestHeader('Authorization', 'Bearer ' + token);


          xhr.onreadystatechange = function() {//Call a function when the state changes.
               if(xhr.readyState == 4 && xhr.status == 200) {
                   alert(xhr.responseText);
               }
          }

          xhr.send(body);
          }
};


function getToken(){
  var ans = $.get('https://api.superjob.ru/2.0/oauth2/password/?login=ole27988967@gmail.com&password=zr6754&client_id=409&client_secret=v1.r0752ba4599e089b98dc367ec25b0a19757edd951a719e955fbbe69451d6e8be6a7dee63e.284debb93b9b73e6158488aad76de2050822fc07');
  return JSON.parse(ans.responseText)
};

var token = getToken();

function getVac(token){
  return $.get('https://api.superjob.ru/2.0/vacancies?payment_from=5000&payment_to=100000', {
    "X-Api-App-Id": 'v1.r0752ba4599e089b98dc367ec25b0a19757edd951a719e955fbbe69451d6e8be6a7dee63e.284debb93b9b73e6158488aad76de2050822fc07',
    "Content-Type": 'application/x-www-form-urlencoded',
    "Authorization": 'bearer ' + token
  });
};*/
console.log('no sj.api.model.js');
