// for loop
let days = 0;
const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// length = 7
// length is just a property on an array object.

// set up an iterator variable
// let i = 0;

// set up a condition for the loop to continue:
// while (i < week.length) {

// LOOP RUNS

// increment the iterator
// i++;

for(let i = 0; i < week.length; i++) {
    // This will just add 1 to our value of days:
    days ++;
    // days = days + 1
    console.log(week[i]);
    if(i==4){
        console.log("It's Friday!  Have a nice weekend friends!");
    }
    if(i>4){
        console.log("It's the weekend!");
    }
}

console.log(days);
