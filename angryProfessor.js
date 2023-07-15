let t = 2; //number of test cases
let k = 4; //cancelation threshold
let a = [-93, -86, 49, -62, -90, -63, 40, 72, 11, 67]; //students arrival time
let n = a.length; //number of students
let response = 'NO'
let onTime = 0;


const angryProfessor = () => {
    a.forEach((student) => {
        if (student <= 0) {
            onTime++
        }
    })
    return onTime >= k ? 'NO' : 'YES'
};

console.log(angryProfessor(a));