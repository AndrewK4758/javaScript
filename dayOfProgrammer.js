let year = 2100;
let day = 13;
let month = '09'; 
const dayOfProgrammer = () => {
    if (year < 1918 && year % 4 === 0) {
        day = 12;
        console.log(`${day}.${month}.${year}`);
        return `${day}.${month}.${year}`
    } else if (year % 400 === 0 || year % 4 === 0 && year % 100 != 0) {
        day = 12;
        console.log(`${day}.${month}.${year}`);
        return `${day}.${month}.${year}`
    } else if (year == 1918) {
        day = 26;
        console.log(`${day}.${month}.${year}`);
        return `${day}.${month}.${year}`
    } else {
        console.log(`${day}.${month}.${year}`);
        return `${day}.${month}.${year}`
    }
}

console.log(dayOfProgrammer(year))