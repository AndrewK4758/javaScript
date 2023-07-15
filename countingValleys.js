let path = 'DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD'
let valleys = 0;

const step = path.split('')
let seaLevel = 0;
let valleyStatus = false;

step.forEach(step => {
	step == 'U' ? seaLevel++ : seaLevel--;
	if (seaLevel <0 && !valleyStatus) {
		valleys++
		valleyStatus = true
	} else if (seaLevel >= 0 && valleyStatus) {
		valleyStatus = false
	}
})

console.log(valleys)
return valleys