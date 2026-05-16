const hasCity = (country, a) => city =>
    a.includes(city) ? `${city} is a city from ${country}` : `${city} is not a city from ${country}`;