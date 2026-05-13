function firstDayWeek(num, string) {
    let day1 = new Date(string, 0, 1);
    day1.setFullYear(parseInt(string), 0, 1);
    let dayOfWeek = day1.getDay();
    let daysToMonday = (dayOfWeek + 6) % 7;
    let targetMonday = new Date(string, 0, 1 - daysToMonday + (num - 1) * 7);
     if (targetMonday < day1) {
        targetMonday = day1;
    }

    let day   = String(targetMonday.getDate()).padStart(2, "0");
    let month = String(targetMonday.getMonth() + 1).padStart(2, "0");
    let yearOut = String(targetMonday.getFullYear()).padStart(4, "0");

    return `${day}-${month}-${yearOut}`;
}

