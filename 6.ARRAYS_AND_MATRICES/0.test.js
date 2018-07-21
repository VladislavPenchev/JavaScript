let nums = [5, 10, 15 , 20, 25, 30];
console.log(nums.join('|'));

let mid = nums.splice(2,3);
console.log(mid.join('|'));
console.log(nums.join('|'));