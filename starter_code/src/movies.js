/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    let films = [...array];

    films.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
    return films;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    let dramaSpilberg = array.filter(
        films =>
        films.genre.includes("Drama") && films.director == "Steven Spielberg"
    );

    return dramaSpilberg.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let films = array.map(film => film.title).sort();

    return films.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (array == 0) {
        return 0;
    }

    let filterRate = array
        .filter(films => films.rate)
        .reduce((acc, film) => acc + film.rate, 0);

    return +(filterRate / array.length).toFixed(2);
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let filterDrama = array.filter(films => films.genre.includes("Drama"));
    console.log(filterDrama);

    return ratesAverage(filterDrama);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    let copy = [...array];

    let duration = copy.map(elm => {
        const copyElm = {
            ...elm
        };

        if (elm.duration.includes("h") && elm.duration.includes("min")) {
            copyElm.duration =
                parseInt(elm.duration.substr(0, 1)) * 60 +
                parseInt(elm.duration.substr(3, 5));
            return copyElm;
        } else if (elm.duration.includes("h")) {
            copyElm.duration = parseInt(elm.duration.substr(0, 1)) * 60;
            return copyElm;
        } else if (elm.duration.includes("min")) {
            copyElm.duration = parseInt(elm.duration.substr(-5, 2));
            return copyElm;
        }
    });

    return duration;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
    // PRIMER INTENTO
    // --------------------

    // SEGUNDO INTENTO
    // ------------------------

    let copyArray = [...array];

    //TERCER INTENTO
    // ------------------

    if (copyArray == 0) {
        return null;
    } else if (copyArray.length == 1) {
        return `The best year was ${copyArray[0].year} with an average rate of ${copyArray[0].rate}`;
    }

    let object = copyArray.map(elm => {
        return {
            year: elm.year,
            rate: elm.rate
        };
    });

    let RatingForYear = {};
    let bestYear = {
        year: 0,
        rate: 0
    };

    object.forEach((elm) => {
        if (RatingForYear[elm.year]) {
            RatingForYear[elm.year].push(elm.rate);
        } else {
            RatingForYear[elm.year] = [elm.rate];
        }
    });
    console.log(RatingForYear)

    for (year in RatingForYear) {
        let rating = RatingForYear[year];
        let ratingTotal =
            rating.reduce((acc, rate) => {
                return acc + rate;
            }, 0) / rating.length;
        if (ratingTotal > bestYear.rate) {
            bestYear.year = year;
            bestYear.rate = ratingTotal;
        }
    }

    console.log(bestYear)

    return `The best year was ${bestYear.year} with an average rate of ${bestYear.rate}`;
}