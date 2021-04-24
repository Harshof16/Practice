//Concurrency model

const uno = () => {
  return "I am one";
}

const dos = () => {
   return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("I am two");
      },3000);   
   });             
}      
// Promise is an event which might be fulfilled in the future or might not be
const tres = () => {
    return "I am three";
}

const callMe = async () => {
    let valOne = uno();
    console.log(valOne);
    let valTwo = await dos();  //waiting for it
    console.log(valTwo);
    let valThree = tres();
    console.log(valThree);
}

callMe();