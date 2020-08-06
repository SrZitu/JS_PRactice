//named and default import/exports
//only one default export module
//think of module as file

import React, { Component } from "react";

//import Wellcome from "./mycomponent/Wellcome";
import { name, age, person } from "./mycomponent/data";
import Banner from "./mycomponent/Banner";

const App = () => {
  return (
    <div>
      <Banner />
      <p>this is my content</p>
      <p>{name}</p>
      <p>{age}</p>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <hr />
    </div>
  );
};
/*this is another category*/
/*import * as data from "./mycomponent/data";
const App = () => {
  return (
    <div>
      <p>this is my content</p>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>{data.person.name}</p>
      <p>{data.person.age}</p>
    </div>
  );
};
*/
/***class base component*/

class App1 extends Component {
  render() {
    return (
      <div>
        <Banner />
        <p>this is my content</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <hr />
      </div>
    );
  }
}

export default App1;
