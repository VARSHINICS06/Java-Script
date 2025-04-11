
const checkDogs=function(dogsJuliya,dogsKate){
const dogsJuliyaCorr=dogsJuliya.slice();
dogsJuliyaCorr.splice(0,1);
dogsJuliyaCorr.splice(-2);
const dogs=dogsJuliyaCorr.concat(dogsKate);
console.log(dogs);
dogs.forEach(function(dog,i){
  if(dog>=3){
    console.log(`Dog number ${i+1} is an adult, and is ${dog} year old`);
  }else{
    console.log(`Dog number ${i+1} is still a puppy`);
  }
});
};
checkDogs([3,5,2,12,7],[4,1,15,8,3]);

//output


script.js:160 Dog number 1 is an adult, and is 5 year old
script.js:162 Dog number 2 is still a puppy
script.js:160 Dog number 3 is an adult, and is 4 year old
script.js:162 Dog number 4 is still a puppy
script.js:160 Dog number 5 is an adult, and is 15 year old
script.js:160 Dog number 6 is an adult, and is 8 year old
script.js:160 
