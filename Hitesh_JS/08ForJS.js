const myStates = [ "Delhi", 
"Tripura", 
"JK", 
1689,
"Assam", 
"Manipur"];

/* ForEach */

myStates.forEach( (s) => {console.log(s)});  //Preferable than for loop, used here callback function

/* Forin */

const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"];

for(const n of names){
    console.log(n);
} 

/* Forin */
const symbols = {
    yt: "Youtube",
    ig : "Instagram",
    fb : "Facebook",
}

for(const n in  symbols){
    console.log(n);   //gives us the keys back
}
//To get values
for(const n in symbols){
    console.log(symbols[n]);
}
//OR
for(const n in symbols){
    console.log(`key is : ${n} and value is : ${symbols[n]}`);
}