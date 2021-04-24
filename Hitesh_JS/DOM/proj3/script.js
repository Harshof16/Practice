const courses = [                   //array of objects
    {
        name: "Complete ReactJS course",    //objects have properties
        price : "2.3"
    },
    {
        name: "Complete Angular course",    
        price : "2.7"
    },
    {
        name: "Complete MERN course",    
        price : "2.1"
    },
    {
        name: "Complete Java course",    
        price : "2.8"
    },
];

<li class = "list-group-item">
    Complete Java course

</li>;
<span class="float-right"> $2.8 </span>

function generateLTST(){
    const ul = document.querySelector(".list-group");
      courses.forEach ( (course) => {

          const li = document.createElement("li");
          li.classList.add("list-group-item");

          const name = document.createTextNode(course.name);
          li.appendChild(name);

          const span = document.createElement("span");
          span.classList.add("float-right");

          const price = document.createTextNode("$" +course.price);
          span.appendChild(price);

          li.appendChild(span);
          ul.appendChild(li);
      });
}

generateLTST();