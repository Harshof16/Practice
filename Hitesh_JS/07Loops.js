/* For loop */
const myStates = [ "Delhi", 
"Tripura", 
"JK", 
1689,
"Assam", 
"Manipur"];

for (let i = 0; i< myStates.length ; i++) {
    if(typeof myStates[i] !== 'string') continue;   //will not print the number
    console.log(myStates[i]);
}

/* While loop */

let i = 0;

while(i<myStates.length){
    console.log(myStates[i]);
    i++;
} 

/* Do While loop */

let i = 20;

do{
    console.log(myStates[i]);   //This loop will run atleast one time even if the condition is wrong
    i++; 
} while(i<myStates.length);   

