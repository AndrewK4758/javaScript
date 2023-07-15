let grades = [73, 67, 38, 33];
let n = grades.length;
let remainder = 0;
let difference = 0;
const gradingStudents = () => {
    grades.forEach((ele) => {
        remainder = (ele % 5)
        difference = 5 - remainder
        if (difference < 3 && ele > 37) {
            console.log(ele + difference)
        } else {
            console.log(ele)
        }
    })
}

console.log(gradingStudents())