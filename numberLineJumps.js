let x1 = 7271;
let v1 = 2211;
let x2 = 7915;
let v2 = 2050;
let ans = 'NO';
if (v1 <= v2) return ans;

while (x1 <= x2) {
    x1 += v1;
    x2 += v2;
    
    if (x1 === x2) {
        ans = 'YES'
        break;
    }
}
console.log(ans)
return ans