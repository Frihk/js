function matchCron(cron, date) {
    const fields = cron.split(' ');
    const values = [
        date.getMinutes(),
        date.getHours(),
        date.getDate(),
        date.getMonth() + 1,
        date.getDay()
    ];

    return fields.every((field, i) => field === '*' || parseInt(field) === values[i]);
}