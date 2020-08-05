import React from "react";
import ReactDom from "react-dom";
//import "./index.css";
//stateless functional component
//always return jsx

function People() {
  return (
    <section>
      <Person name="Sazzadur" Job="Student" />
    </section>
  );
}

const Person = (props) => {
  console.log(props);
  return (
    <article>
      <h1>{props.name}</h1>
      <p>{props.Job}</p>
    </article>
  );
};

ReactDom.render(<People />, document.getElementById("root"));
