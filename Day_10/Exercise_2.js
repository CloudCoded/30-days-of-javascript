/*
Question 1: Find a union b
*/

//Answer
let a = [1, 2, 3, 4, 5]
let b =[3, 4, 5, 6]
let c = [...a, ...b] //spread method

let aSet = new Set(a)
let bSet = new Set(b)
let cSet = new Set(c)

console.log(cSet);

/*
Question 2: Find a intersection b
*/

//Answer
let cIntersect = a.filter((num) => bSet.has(num))
let newC = new Set(cIntersect);

/*
Question 3: 
*/

//Answer