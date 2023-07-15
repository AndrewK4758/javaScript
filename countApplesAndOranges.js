let s = 2; //start point of house
let t = 3; //end point of house
let a = 1; //apple tree location
let b = 5; //orange tree location
let m = 1; // number of apples fallen from tree
let n = 1; //number of oranges fallen from tree
let apples = [2];
let oranges = [-2];
let appleHit = 0;
let orangeHit = 0;

const countApplesAndOranges = () => {
    for(let i = 0; i < 100000; i++) {
        if (s <= a + apples[i] && a + apples[i] <= t) {
            appleHit++
        } if (s <= b + oranges[i] && b + oranges[i] <= t) {
            orangeHit++
        }
    }console.log(appleHit)
    console.log(orangeHit)
};

countApplesAndOranges()