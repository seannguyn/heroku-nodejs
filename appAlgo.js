const algorithm = require('./function');

const res1 = algorithm.fourNumberSum([1,2,3,4,5,6,7],10);
// const res2 = algorithm.fourNumberSum([7,6,4,-1,1,2],16);
console.log(res1);

const res3 = algorithm.largestRange([-7, -7, -7, -7, 8, -8, 0, 9, 19, -1, -3, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, -6, 8, 7, 6, 15, 12, 12, -5, 2, 1, 6, 13, 14, -4, -2]);
console.log(res3);

const res4 = algorithm.maxSumIncreasingSubsequence([10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50]);
// .to.deep.equal([164, [10, 11, 14, 23, 25, 31, 50]])
console.log(res4);

const res5 = algorithm.longestCommonSubsequence("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "CCCDDEGDHAGKGLWAJWKJAWGKGWJAKLGGWAFWLFFWAGJWKAGTUV");
// ["C", "D", "E", "G", "H", "J", "K", "L", "T", "U", "V"]
console.log(res5);