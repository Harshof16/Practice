/* function isEven(element){
    return element%2 === 0;  //return boolean values here
} */

/* var isEven = function(element){

} */

var isEven = (element) => {  //instead of function writing arrow here
    return element%2 === 0;
}
//console.log(isEven(3));

var result = [3,5,6,7].every(isEven);
console.log(result);   //will return false, as every element here is not even

//Callbacks
var result = [2,4,6,8].every((e) => ( e %2 === 0 ) );  //incase of curly braces you have to use return keyword
console.log(result);   //will return false, as every element here is not even

