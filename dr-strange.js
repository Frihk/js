function addWeek(date) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday']
    const epoch  = new Date('0001-01-01')
    const time = date.getTime() - epoch.getTime()
    const difTime = Math.round(time/(1000*60*60*24))
    return days[difTime%14]
}

function timeTravel({ date, hour, minute, second }) {

  const newDate = new Date(date);
  newDate.setHours(hour, minute, second);
  
  return newDate;
}
