function isValid(date) {
  if (typeof date === "number") return !NaN(Date)
  return (date instanceof Date  && !isNaN(date.getTime(Date)))
}

function isAfter(date1, date2) {
  if (!isValid(date1) || !isValid(date2)) return false;
  return date1 > date2;
}
 

function isBefore(date1, date2) {
  if (!isValid(date1) || !isValid(date2)) return false;
  return date1 < date2;
}
 
function isFuture(date) {
  return isValid(date) && date > Date.now();
}
 
function isPast(date) {
  return isValid(date) && date < Date.now();
}


