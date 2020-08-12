import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
const Person = ({ id, img, name, age, info }) => {
  return (
    <article>
      <img src={img} alt="person" />
      <h1>name:{name}</h1>
      <h2>age:{age}</h2>
      <h4>info:{info}</h4>
    </article>
  );
};

Person.propTypes = {
  img: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
Person.defaultProps = {
  img: "https://randomuser.me/api/portraits/thumb/men/7.jpg",
  name: "sakib",
  age: 34,
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
          <Person
            key={person.id}
            img={person.img}
            age={person.age}
            name={person.name}
          />
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
