/* Ползунок уровень з/п */
var size = document.getElementById("sizeSalary").value;     
document.getElementById("min").innerHTML = size;
function sizeSal(){
    var size = document.getElementById("sizeSalary").value;
    document.getElementById("min").innerHTML = size;
 }
/* Ползунок опыт работы */
var size = document.getElementById("sizeExp").value;     
document.getElementById("minExp").innerHTML = size;
function Expirience(){
    var size = document.getElementById("sizeExp").value;
    document.getElementById("minExp").innerHTML = size;    
} 


//$('.job').on('mouseover', function(){i=0});

/* расширенный поиск */
$('#moreSearch').on('mouseover', function(){i=0});
$('#moreSearch').on('click', function(){
    if(i%2!=0){
        $('#advancedSearch').css('visibility','hidden');
        $('#content').css('top','0');
        i=1;
    } else {
        $('#advancedSearch').css('visibility','visible');
        $('#content').css('top','140px');
        i=0;
    };
    i++;
});

/* переключение вкладок между соискателем и работодателем*/

$('#employer').on('click', function(){
    $('#employer').css('background','#fff');
    $('#applicant').css('background','lightgray')
});
$('#applicant').on('click', function(){
    $('#applicant').css('background','#fff');
    $('#employer').css('background','lightgray')
});

/* раскрывающиеся div с вакансией */
$('.job').on('click', function(){
    if (i%2!=0) { 
        $(this).css('height','160px');
        i=1;
    } else {
        $(this).css('height','auto'); 
        i=0;
    };
    i++;
});