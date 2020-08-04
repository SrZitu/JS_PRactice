import React from "react";
import ReactDom from "react-dom";
import "./index.css";
//stateless functional component
//always return jsx

const text = "search button";
function Person() {
  const btn = "search";
  const name = "sazzadur";
  const lastName = "zitu";
  return (
    <section className="books">
      <button>{btn}</button>
      <h2>{`${name} ${lastName}`}</h2>
      <h2>{name + " " + lastName}</h2>
      <p>info</p>
      <p>{66 + 4}</p>
    </section>
  );
}
//three argument element, propsObject, children
//function Greeting() {
// return React.createElement("div", {}, "Hello world");
//}

ReactDom.render(<Person />, document.getElementById("root"));
