'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const passanger=prompt('Enter the passenger name: ');
const passanger='VARShini';
const passangerLower=passanger.toLowerCase();
const passsengerCorrect=passangerLower[0].toUpperCase()+passangerLower.slice(1);
console.log(passsengerCorrect)


//Correcting  email

const email='varshini123@gmail.com';
const loginEmail='  VarshInI123@Gmail.COM \n ';
const normalization=loginEmail.toLowerCase().trim();
console.log(normalization);
console.log(email===normalization);

//Replaceing String
const price='233,76#';
const priceUS=price.replace(',','.').replace('#','$');
console.log(priceUS);

const announcement='All passenger come to boarding door 23.Boarding door 23!';
 console.log(announcement.replace('door','gate'));
//or
console.log(announcement.replace(/door/g,'gate'));

console.log(announcement.replaceAll('door','gate'));

//Boolean

const plane='A320ne';
console.log(plane.includes('A32'));
console.log(plane.includes('vdhs'));
console.log(plane.startsWith('A32'));

//Real Time Example

const checkBaggage=function(items){
    const bag=items.toLowerCase();
    if(bag.includes('kife')||bag.includes('gun')){
        console.log('You are not allow to the plane');
    } 
    else{
        console.log('Welocome');

    }
    
};

checkBaggage('I have a laptop,some food and pocket Kife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a Gun for protection');


//Split and Join

console.log('a+very+nice+string'.split('+'));
console.log('Varshini CS'.split(' '));
const [firstName,lastName]='Varshini CS'.split(' ');
const newName=['Ms',firstName,lastName.toUpperCase()].join(' ');
console.log(newName);


//Example

const capitalizeName=function(name){
  const names=name.split(' ');
  const nameUpper=[];

  for( const n of names){
    // nameUpper.push(n[0].toUpperCase() +n.slice(1));


    //or

    nameUpper.push(n.replace(n[0],n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));

}
capitalizeName('jessica ann smith davis');
capitalizeName('varshini cs');

//Padding

const message='Go to gate 23!'
console.log(message.padStart(20,'+').padEnd(30,'-'));

//real world Example

const maskCreditCard=function(number){
  const str=number+ '';
  const last=str.slice(-4);
  return last.padStart(str.length,'*');
  
}
console.log(maskCreditCard(65373582946));
console.log(maskCreditCard(537272475392));
console.log(maskCreditCard(783738468374974964));


//Repeat

const message2='Bad wether... Delayed...';
console.log(message2.repeat(5));

const planeInline=function(n){
console.log(`There are ${n} plane in line ${'✈'.repeat(n)}`);
}

planeInline(3);
planeInline(5);

//output
// Varshini
// script.js:61 varshini123@gmail.com
// script.js:62 true
// script.js:67 233.76$
// script.js:70 All passenger come to boarding gate 23.Boarding door 23!
// script.js:72 All passenger come to boarding gate 23.Boarding gate 23!
// script.js:74 All passenger come to boarding gate 23.Boarding gate 23!
// script.js:79 true
// script.js:80 false
// script.js:81 true
// script.js:88 You are not allow to the plane
// script.js:91 Welocome
// script.js:88 You are not allow to the plane
// script.js:104 (4) ['a', 'very', 'nice', 'string']
// script.js:105 (2) ['Varshini', 'CS']
// script.js:108 Ms Varshini CS
// script.js:125 Jessica Ann Smith Davis
// script.js:125 Varshini Cs
// script.js:134 ++++++Go to gate 23!----------
// script.js:144 *******2946
// script.js:145 ********5392
// script.js:146 **************5000
// script.js:152 Bad wether... Delayed...Bad wether... Delayed...Bad wether... Delayed...Bad wether... Delayed...Bad wether... Delayed...
// script.js:155 There are 3 plane in line ✈✈✈
// script.js:155 There are 5 plane in line ✈✈✈✈✈