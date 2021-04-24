//spread operator : takes the group and spread it into multiple values

/* function sumOne(a,b){
    return a+b;
}

var myA = [5,6];
console.log(sumOne(...myA)); */ 
 
//Rest operator
function sumTwo(...args){     //Incase when you don't know how many arguments gonna come
 let sum = 0; 
 for(const arg of args){
    sum += arg;
}
 return sum;
}

console.log(sumTwo(2,5,1,2,5));   //Converting individual values into an array

//Both are opposite to each other
function sumMul(a,b,...args){   //first two get multiplied and the rest got add up
    console.log(args);
    let mul = a*b;
    let sum = 0;
    for(const arg of args){
        sum+=arg;
    }
    return [sum,mul];  
}

console.log(sumMul(2,3,1,4,2));  //first two values are ignored