let n = 37455, p = 29835;

const pageCount = () => {
	let frontFlip = Math.floor(p/2);
	let backFlip = Math.floor((n/2)-frontFlip);
		
	let result = Math.min(frontFlip, backFlip);
		return result;
};

console.log(pageCount(n, p))