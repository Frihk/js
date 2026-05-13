const isLeapYear = (date) => new Date(date.getFullYear(), 1, 29).getDate() === 29;

const dayOfTheYear = (date) => {
    const start = Date.UTC(date.getFullYear(), 0, 0);
    const current = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    return (current - start) / 86400000;
};

