const arr = [20,30,40,50,60];

var resultedArr = arr.forEach(a => a*a);
var resultedArrWithMap = arr.map(a => a*a);
console.log("initial array", arr);
console.log("resuletdArr", resultedArr);
console.log("resulted array with map", resultedArrWithMap);