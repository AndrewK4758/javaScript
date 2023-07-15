const permute = (A, B, k) => {
	let result = 'YES'
	A.sort((a,b) => a-b);
	B.sort((a,b) => b-a);
	A.map((ele, idx) => {
		if (A[idx] + B[idx] >= k) {
			return result
		} else result = 'NO'
	});
	return result
    }
console.log(permute([2, 1, 3], [7, 8, 9], 10))