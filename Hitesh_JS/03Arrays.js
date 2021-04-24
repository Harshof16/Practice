/*
var countries = ["India", "Brazil", "Spain", "Portugal"];

var states = new Array("Rajasthan", "Delhi", "Mumbai");

console.log(states[0]);

console.log(states.length);

//replacing
states[0] = "Punjab";
console.log(states); 
*/

//user login values
var user = ["hitesh", "hitesh@lco.dev", 4,45, true];
console.log(user);

user.pop();    //remove value from last
//console.log(user);
//user.shift();   remove value from first, but not a good method, in same way unshift is used to add value from start
//console.log(user);

console.log(user.indexOf(4)); //tells the position of an element, incase of not found returns -1

console.log(Array.from("Harsh"));  //entire string become separate characters in Array

//Read mdn docs for more