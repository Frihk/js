function firstDayWeek(week, year) {
    const padZero = (n) => String(n).padStart(2, '0');
    const isAncientYear = year.toString().startsWith('00');

    const monday = new Date(year, 0, 1 + (week - 1) * 7);

    while (monday.getDay() !== 1) {
        if (monday.getFullYear() === year - 1) return `01-01-${year}`;
        monday.setDate(monday.getDate() - 1);
    }

    if (isAncientYear) monday.setDate(monday.getDate() + 1);

    const yearStr = isAncientYear
        ? '00' + monday.getFullYear().toString().slice(-2)
        : monday.getFullYear();

    return `${padZero(monday.getDate())}-${padZero(monday.getMonth() + 1)}-${yearStr}`;
}
