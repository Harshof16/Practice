var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "Dos");      //not regular objects
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");   //storing key value

console.log(myMap);

/* for(let key of myMap.keys()){     //for keys
    console.log(`Key is ${key}`);
}

for(let value of myMap.values()){   //for values
    console.log(`Value is ${value}`);
} */

for(let [key, value] of myMap){   //for values
    console.log(`Key is : ${key} and Value is ${value}`);
}

//OR

//myMap.forEach( (key) => {console.log(`${key}`)});   //instead of keys it is giving values
myMap.forEach( (v,k) => {console.log(`${v} and key is ${k}`)}); 

myMap.delete(2);
console.log(myMap);