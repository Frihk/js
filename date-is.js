function isValid(date) {
  return (date instanceof Date || typeof date === 'number') && !isNaN(new Date(date))
}

function isAfter(date1, date2) {
    return new Date(date1) > new Date(date2)
}

function isBefore(date1, date2) {
    return new Date(date1) < new Date(date2)
}

function isFuture(date) {
    const today = new Date();
    return today < date
}

function isPast(date) {
    const today = new Date();
    return today > date
}

