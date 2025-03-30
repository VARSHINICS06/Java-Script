'use strict';
// const Bookings=[];
// const createBooking=function(flightNum,numPassengers=1,price=199*numPassengers){
//     //ES5
//     // flightNum=flightNum||AS23;
//     // numPassengers=numPassengers || 1;
//     // price=price||199;

//     const Booking={
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(Booking);
//     Bookings.push(Booking);

// };
// createBooking('LH123');
// createBooking('LH123',2,800);
// createBooking('LH123',2,);
// createBooking('LH123',5);
// createBooking('DX454',2,900);
// createBooking('DX454',undefined,900);


// const flight='LH234';
// const varsha={
//     name:'Varshini CS',
//     passport:4438689,
// };

// const checkIn=function(flightNum,passenger){
//     flightNum='LH999';
//     passenger.name='Ms '+passenger.name;

//     if(passenger.passport===4438689){
//         alert('Checked in');
//     }
//         else{
//             alert('Wrong passport!');
//         }
    

// };

// checkIn(flight,varsha);
// console.log(flight);
// console.log(varsha);


// const oneWord=function(str){
//     return str.replace(/ /g,' ').toLowerCase();
// };
// const upperFirstWord=function(str){
//     const[first,...others]=str.split(' ');
//     return[first.toUpperCase(),...others].join(' ');
// };
// const transformer=function(str,fn){
//     console.log(`Original string:${str}`);
//     console.log(`Transformed string:${fn(str)}`);
//     console.log(`Transformed by : ${fn.name}`);
// };
// transformer('JavaScript is the best!',upperFirstWord);
// transformer('JavaScript is the best!',oneWord);

// const high5=function(){
//     console.log('👋');

// };
// document.body.addEventListener('click',high5);

// ['varsha','deepu','rawath'].forEach(high5);


const greet=function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    };
};
const greeter=greet('Hey');
greeter('Jonas');
greeter('Steven');

//or

greet("hey")("Varshini");

//Arrow Function

const greetArr=greeting=>name=>
    console.log(`${greeting} ${name}`);

greetArr('Hello')('Preethi');

