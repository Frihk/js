function isValid(date) {
  return (date instanceof Date || typeof date === 'number') && !isNaN(new Date(date))
}

function isAfter(date1, date2) {
  if (!isValid(date1) || !isValid(date2)) return false;
  return date1.getTime() > date2.getTime();
}
 

function isBefore(date1, date2) {
  if (!isValid(date1) || !isValid(date2)) return false;
  return date1.getTime() < date2.getTime();
}
 
function isFuture(date) {
  return isValid(date) && date.getTime() > Date.now();
}
 
function isPast(date) {
  return isValid(date) && date.getTime() < Date.now();
}

