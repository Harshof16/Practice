//Concurrency model

const uno = () => {
    console.log("I am one");
}
const dos = () => {
    setTimeout(() => {
      console.log("Urgent");
    },3000);                  //Acc. to code, after one urgent should be printed but as it took much time, so two and three got printed before
     console.log("I am two");
}                //but what if JS is interacting with database, in that scenario it'll take much time and can print other details which are dependent on database, which is not good                             
const tres = () => {
    console.log("I am three");
}

uno();
dos();
tres();