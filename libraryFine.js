const libraryFine = (d1, m1, y1, d2, m2, y2) => {

    let daysLate = 15;
    let monthsLate = 500;
    let yearsLate = 10000;

    if (y1 > y2) {
        return yearsLate
    } else if (m1 > m2 && y1 == y2) {
        return ((m1 - m2) * monthsLate)
    } else if (d1 > d2 && m1 == m2 && y1 == y2) {
        return ((d1 - d2) * daysLate)
    } else if (d2 >= d1 && m2 >= m1 || y2 >= y1) {
        return 0
    }
 }

libraryFine(9, 6, 2015, 6, 6, 2015)

/*
days late = 15 hackos per day
months late == 500 hackos per month
year++ late == 10000 hackos flat rate
d1 = returned date
d2 = due date
*/