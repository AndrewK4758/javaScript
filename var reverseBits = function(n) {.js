var reverseBits = function(n) {
    let bits = n.toString(2);
    bits = bits.split('').reverse().join('');
    for (let i = 0; i < 32; i++) {
        if (bits[i] === undefined) {
            bits>>0;
        }
    }
    return parseInt(bits, 2)
};

console.log(reverseBits(00000010100101000001111010011100))