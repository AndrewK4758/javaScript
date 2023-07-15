let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
let word = 'zaba';
let letters = 'abcdefghijklmnopqrstuvwxyz';
let letterHeight = [];

const designerPdfViewer = () => {
    for (let i = 0; i < word.length; i++) {
        letterHeight.push(h[letters.indexOf(word[i])])
    }
    let topHeight = letterHeight.sort()[letterHeight.length-1]
    return topHeight * word.length
};

console.log(designerPdfViewer(h, word))