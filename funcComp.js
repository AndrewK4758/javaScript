/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions){
	return function(x) {
        return functions.reduceRight((acc,nxt) => {
            return acc = nxt(acc)
        },x)
    }
};

 const fn = compose([x => x + 1, x => 2 * x])
 console.log(fn(12345704)) // 9
