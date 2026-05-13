function sunnySunday(dd) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dd.getUTCDay()];
}