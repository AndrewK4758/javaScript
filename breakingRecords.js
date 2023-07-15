let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
let n = scores.length; // n = number of games
let highScoreCount = 0;
let lowScoreCount = 0;
let minimum = scores[0];
let maximum = scores[0];
for (let i = 1; i < n; i++) {
	let currentValue = scores[i]
	if (currentValue < minimum) {
		minimum = currentValue
		lowScoreCount++
		
	} else if (currentValue > maximum) {
		maximum = currentValue
		highScoreCount++
		
	}
}console.log(highScoreCount, lowScoreCount)

