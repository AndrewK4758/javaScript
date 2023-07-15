function expandedForm(num) {
    let numToStr = num.toString().split('');

    for (let i = 0; i < numToStr.length; i++) {

        for (let j = numToStr.length -i ; j > 1; j--) {
            numToStr[i] += '0';
        }
    }
    return numToStr.filter(ele => !ele.startsWith(0)).join(' + ');
}

console.log(expandedForm(70304))