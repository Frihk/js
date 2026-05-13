const isFriday = (date) => date.getDay() === 5;

const isWeekend = (date) => date.getDay() === 6 || date.getDay() === 0;

const isLeapYear = (date) => new Date(date.getFullYear(), 1, 29).getDate() === 29;

const isLastDayOfMonth = (date) => {
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return date.getDate() === lastDay.getDate();
};