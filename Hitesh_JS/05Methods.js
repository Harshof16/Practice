var testArray = [2, 3, 5,6,7,8,9];

console.log(testArray.fill(0, 2, 6)); //fill all the values with same element from position 2 to 5
// Here 2 is inclusive(included) and 6 is exclusive(excluded)

const myNumber = [23, 43, 54, 34, 64, 34, 62, 12];

//filter use to filter the elements based on given condition.
const result = myNumber.filter( (num) => num != 34 );
console.log(result);   //print all the numbers which are not equal to 34

//Slicing
var users = ["Harsh", "Arush", "Preeti", "Prince", "Queen"];
console.log(users.slice(1,4)); //slicing all the elements out except 1 to 3
console.log(users.slice(1));  //slicing all the elements which is out of range, since exclusive value is not defined so it just slices 1st element
console.log(users.slice(users.length -1)); //slicing all the elements except the last one

//Splice
users.splice(1, 3, "HI");  //Replacing 1 to 3 elements from HI and also can pass as many values to fill here
console.log(users);