function getWeekDay(date) {
    var days = ['Воскресение', 'Понедельник', 'Вторник ', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  
    return days[date.getDay()];
}
  
var date = new Date(2014, 0, 3); 
alert( getWeekDay(date) ); 