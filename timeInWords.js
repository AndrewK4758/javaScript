const timeInWords = (h, m) => {
if (h === 1) {
    h = 'one';
};
if (h === 2) {
    h = 'two'
};
if (h === 3) {
    h = 'three'
}
if (h === 4) {
    h = 'four'
}
if (h === 5) {
    h = 'five'
}
if (h === 6) {
    h = 'six'
}
if (h ===7) {
    h = 'seven'
}
if (h === 8) {
    h = 'eight'
}
if (h === 9) {
    h = 'nine'
}
if (h === 10) {
    h = 'ten'
}
if (h === 11) {
    h = 'eleven'
}
if (h === 12) {
    h = 'twelve'
}
    if (m === 1) {
        console.log(`${m} minute past ${h}`);
    }
    if (1 < m && m < 30 && m != 15) {
        console.log(`${m} minutes past ${h}`);
    }
    if (m == 0) {
        console.log(`${h} o' clock`);
    }
    if (m > 30 && m <= 59 && m != 45) {
        h = parseInt(h)
        console.log(`${60-m} minutes to ${h}`)
    }
    if (m == 30) {
        console.log(`half past ${h}`)
    }
    if (m === 15) {
        console.log(`quarter past ${h}`);
    }
    if (m === 45) {
        
        console.log(`quarter to ${h}`)
    }

};

timeInWords(5, 47)
/*

*/