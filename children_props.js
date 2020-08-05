import React from "react";
import ReactDom from "react-dom";

function People() {
  const friends = [
    { name: "sazzadur", job: "developer", age: 23, company: "Apple" },
    { name: "sakibur", job: "doctor", age: 11, company: "Ibne Sina" },
    { name: "shahriar", job: "Engineer", age: 23, company: "Ford" },
  ];
  return (
    <section>
      <Person person={friends[0]}>
        <div>
          <p>this is first child</p>
          <h1>some heading</h1>
        </div>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = (props) => {
  //console.log(name, job, age, company);
  const { name, job, age, company } = props.person;
  const { children } = props;
  console.log(props);
  //props.children
  //
  return (
    <article>
      <h1>{name}</h1>
      {children}
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>

      <hr />
    </article>
  );
};

ReactDom.render(<People />, document.getElementById("root"));
