function dogYears(str, num) {
    let year;
    const planet = str.toLowerCase();
    if (planet === 'earth') {
       year = (num / 31557600)*7
    }else if (planet === 'mercury') {
      year = (num / (31557600 * 0.2408467))*7;
    }else if (planet === 'venus') {
       year = (num / (31557600 * 0.61519726))* 7;
    }else if (planet === 'mars') {
       year = (num / (31557600 * 1.8808158))* 7;
    }else if (planet === 'jupiter') {
       year = (num / (31557600 * 11.862615))* 7;
    }else if (planet === 'saturn') {
       year = (num / (31557600 * 29.447498))* 7;
    }else if (planet === 'uranus') {
       year = (num / (31557600 * 84.016846))* 7;
    }else if (planet === 'neptune') {
       year = (num / (31557600 * 164.79132))* 7;
    };
    return Math.round(year*100)/100
}

// console.log(typeof(dogYears('earth', 1000000000))); // Should output 221.82
// console.log(dogYears("mercury", 1000000000)); // Should output 921.3
// console.log(dogYears("venus", 1000000000)); // Should output 360.59