const dayOfTheYear = (date) => {
    const start = Date.UTC(date.getFullYear(), 0, 0);
    const current = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    return (current - start) / 86400000;
};

console.log(dayOfTheYear(new Date("2024-01-01"))); // 1
console.log(dayOfTheYear(new Date("2024-02-01"))); // 32 (31 days in January + 1)
console.log(dayOfTheYear(new Date("2024-12-31"))); // 366 (leap year)
console.log(dayOfTheYear(new Date("2023-12-31"))); // 365 (non-leap year)