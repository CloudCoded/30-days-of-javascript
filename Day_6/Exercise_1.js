/*
Question 1: Iterate 0 to 10 using for loop, do the same using while and do while loop
*/

//Answer => for loop
for(let i = 0; i <= 10; ++i){
    console.log(i)
}

//while loop
let i = 0;
while(i < 10){
    console.log(i)
    ++i
}

//do while loop
let x = 0;
do{
    console.log(x)
    ++x;
} while(x < 10)

/*
Question 2: Iterate 10 to 0 using for loop, do the same using while and do while loop
*/
//Answer => for loop
for (let i = 10; i >= 0; i--){
    console.log(i)
}

//while loop
let j = 10;
while(i >= 0){
    console.log(i)
    --i
}

// do while loop
let k = 0;
do{
    console.log(x)
    k--
} while(k >= 0)

/*
Question 3: Iterate 0 to n using for loop
*/
let n = 10 // replace 10 with actual value of n
for(let i = 0; i <= n; i++){
    console.log(i)
}

/*
Question 4: Write a loop that makes the following pattern # using console.log():
*/

let pattern = ''
for(let i = 0; i <= 7; i++){
    pattern = pattern + '#'
    console.log(pattern)
}

/*
Question 5: Use loop to print the following pattern:
*/

for(let i = 0; i <= 10; ++i){
    console.log(`${i} * ${i} = ${i * i}`)
}

/*
Question 6:  Using loop print the following pattern   
*/

for(let i = 0; i <= 10; ++i){
    console.log(`${i}  ${i**2}   ${i **3}`)
}

/*
Question 7: Use for loop to iterate from 0 to 100 and print only even numbers
*/

for(let i = 0; i <= 100; ++i){
    if (i % 2 === 0) {
        console.log(i)
    }
}

/*
Question 8: Use for loop to iterate from 0 to 100 and print only odd numbers
*/

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }
}

/*
Question 4: 
*/
/*
Question 4: 
*/
/*
Question 4: 
*/