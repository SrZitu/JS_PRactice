import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
const Person = ({ person: { img, name, age, info } }) => {
  //const {id,img,name,age}=props.person
  return (
    <article>
      <img src={img} alt="person" />
      <h1>name:{name}</h1>
      <h2>age:{age}</h2>
      <h3>Info:{info || "default about the person"}</h3>
    </article>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    img: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }),
};
Person.defaultProps = {
  /*img: "https://randomuser.me/api/portraits/thumb/men/7.jpg",
  name: "sakib",
  age: 34,*/
  info: "default info about person",
};
class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: "Bob",
        age: 24,
      },

      {
        id: 2,

        img: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
        name: "Bobby",
        age: 23,
      },
      {
        id: 3,

        img: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
        name: "Bai",
        age: 21,
        info: "some unfefined info ",
      },
    ],
  };

  render() {
    return (
      <section>
        {this.state.people.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </section>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <PersonList />
      </div>
    );
  }
}
export default App;
