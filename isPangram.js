function isPangram(string){

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    string = string.toLowerCase();
    
    return alphabet.every(char => string.includes(char))
  
  
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))