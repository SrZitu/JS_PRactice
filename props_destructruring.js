import React from "react";
import ReactDom from "react-dom";
//import "./index.css";
//stateless functional component
//always return jsx

function People() {
  const friends = [
    { name: "sazzadur", job: "developer", age: 23, company: "Apple" },
    { name: "sakibur", job: "doctor", age: 11, company: "Ibne Sina" },
    { name: "shahriar", job: "Engineer", age: 23, company: "Ford" },
  ];
  return (
    <section>
      <Person Person={friends[0]} />
      <Person Person={friends[1]} />
      <Person Person={friends[2]} />
    </section>
  );
}
//**************for understanding concept ******************/
const person = {
  name: "shakib",
  age: 25,
  company: "amajon",
};
//const { name, age } = person;
//console.log(name, age);
const showPerson = ({ name, age, company }) => console.log(name, age, company);
showPerson(person);
//********************************************************/
const Person = ({ Person: { name, job, age, company } }) => {
  //console.log(name, job, age, company);
  // const { name, job, age, company } = props.Person;
  return (
    <article>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <hr />
    </article>
  );
};

ReactDom.render(<People />, document.getElementById("root"));
