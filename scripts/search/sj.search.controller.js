/* SuperJob */

sj.getLocalParams = function() {
  return {
    keyword: $('#specialty')[0].value,
    town: getArea() || 'Россия',
    payment_from: +($('.min')[0].innerHTML + '000') || 1000,
    count: $('#per_page')[0].value || 50
  };
}
