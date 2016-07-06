/* Ползунок уровень з/п */
var size = $('.sizeSalary')[0].value;
$('.min')[0].innerHTML = size;
function sizeSal(){
    var size = $('.sizeSalary')[0].value;
    $('.min')[0].innerHTML = size;
 }
/* Ползунок опыт работы */
var size = $('#sizeExp')[0].value;
$('#minExp')[0].innerHTML = size;
function Expirience(){
    var size = $('#sizeExp')[0].value;
    $('#minExp')[0].innerHTML = size;
}

/* расширенный поиск */
$('#moreSearch')[0].opened = false;
$('#moreSearch').on('click', function(){
    if (this.opened) {
      $('#advancedSearch').css('visibility','hidden');
      $('#content').css('top','0');
    }else{
      $('#advancedSearch').css('visibility','visible');
      $('#content').css('top','150px');
    }
    this.opened = !this.opened;
});

/* кнопка поиска */
$('#buttonSearch').on('click', function() {
  hhSearch();
  sjSearch();
});

$('#per_page').on('change', function() {
  hhSearch();
  sjSearch();
});

/* Клик по вакансии */
$('#list-of-results').on('click', function(event) {
  var elem = event.target;
  if (elem.hasAttribute('data-link')) {
    open(elem.getAttribute('data-link'));
  }
});

/* переключение вкладок между соискателем и работодателем*/

$('.employer').on('click', function(){
    $('.employer').css('background','#fff').addClass('active');
    $('.applicant').css('background','lightgray').removeClass('active');
});
$('.applicant').on('click', function(){
    $('.applicant').css('background','#fff').addClass('active');
    $('.employer').css('background','lightgray').removeClass('active');
});

/* раскрывающиеся div с вакансией */
var searchResults = $('.job');

for (var i=0; i<searchResults.lenght; i++) {
  searchResults[i].opened = false;
}
$('.job').on('click', function(){

    $(this).css('height','auto');
    return;
    //
    if (this.opened) {
        $(this).css('height','160px');
    } else {
        $(this).css('height','auto');
    };
    this.opened = !this.opened;
});

$('#reset-btn').on('click', function(){
  $('.min')[0].innerHTML = 0;
  $('#minExp')[0].innerHTML = 3;
});
