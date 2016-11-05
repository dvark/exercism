const weekdayToNum = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
}

function getRange(spec, year, month) {
    const lastDay = new Date(year, month + 1, 0).getDate();
    let dict = {
        'teenth': [10, 19],
        '1st': [1, 7],
        '2nd': [8, 14],
        '3rd': [15, 21],
        '4th': [22, 28],
        '5th': [29, lastDay],
        'last': [lastDay - 6, lastDay]
    }
    return dict[spec];
}

module.exports = function meetupDay(year, month, weekday, spec) {
    const range = getRange(spec, year, month);
    for (let i = range[0]; i <= range[1]; i++) {
        const date = new Date(year, month, i);
        if (date.getDay() === weekdayToNum[weekday]) {
            return date;
        }
    }
    throw new Error('MeetupDayException');
}
