// // objects destructuring
const myCar =  {
       brand:'Toyota', 
       make: 'Prius', 
       color: 'Red'
    }

// destruturing the object 
const {brand, make, color} = myCar;

console.log(color);


// question 2
function hourToSeconds (hours){
   let second;
   second = 3600 * hours;
   return second;
}

let result;
let Hours = 2;
result = hourToSeconds(Hours);
console.log(Hours,'hours in second is equal to:',result,'seconds')
