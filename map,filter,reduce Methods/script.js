//map-function

const movements=[200,450,-400,3000,-650,-130,70];
const eurTousd=1.1;
const movementsUSD=movements.map(function(mov){
    return mov*eurTousd;
});
console.log(movements);
console.log(movementsUSD);
//using for of
const movementsUSDfor=[]
for(const mov of movements)
    movementsUSDfor.push(mov*eurTousd);
console.log(movementsUSDfor);

//using Arrow function
const movementsUSDarrow=movements.map(mov=> mov*eurTousd
);

console.log(movementsUSDarrow);

const movementsDec=movements.map((mov,i,arr)=>{
    if(mov>0){
        console.log(`Movement ${i+1}: You deposited ${mov}`)
    }else{
        console.log(`Movement ${i+1}: you withdraw ${mov}`)
    }
});
console.log(movementsDec);


//filter-function

const deposits=movements.filter(function(mov){
    return mov>0
});
console.log(movements);
console.log(deposits);
//usinf for of

const depositsFor=[]
for(const mov of movements) {
    if(mov>0){
        depositsFor.push(mov);
    }
}
console.log(depositsFor);

//outputs

// ﻿
// script.js:8 
// (7) [200, 450, -400, 3000, -650, -130, 70]
// script.js:9 
// (7) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77]
// script.js:14 
// (7) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77]
// script.js:20 
// (7) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77]
// script.js:24 Movement 1: You deposited 200
// script.js:24 Movement 2: You deposited 450
// script.js:26 Movement 3: you withdraw -400
// script.js:24 Movement 4: You deposited 3000
// script.js:26 Movement 5: you withdraw -650
// script.js:26 Movement 6: you withdraw -130
// script.js:24 Movement 7: You deposited 70
// script.js:29 
// (7) [undefined, undefined, undefined, undefined, undefined, undefined, undefined]
// script.js:37 
// (7) [200, 450, -400, 3000, -650, -130, 70]
// script.js:38 
// (4) [200, 450, 3000, 70]
// script.js:47 
// (4) [200, 450, 3000, 70]

//reduce-Methods

const balance=movements.reduce(function(acc,cur,i,arr){
    console.log(`Iteration${i}:${acc}`);
    return acc+cur;
},0);

const balance=movements.reduce(function(acc,cur,i,arr){
    console.log(`Iteration${i}:${acc}`);
    return acc+cur;
},100);

//using for of loop

let balnce2=0;
for(const mov of movements)balnce2+=mov;
console.log(balnce2);

//using arrow function
const balance3=movements.reduce((acc,cur)=>acc+cur,0);
console.log(balance3);


//PRACties qns among this three methods

// let arr=[40,50,100,99,95,90,67];
// let above=arr.filter((val)=>{
//     return val>90;
// });
// console.log(above);

// let n=prompt("entre numbers");
// let arr=[];
// for(let i=1; i<=n; i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let newArr=arr.reduce((res,cur)=>{
//     return res * cur;
// });
// console.log(newArr);
