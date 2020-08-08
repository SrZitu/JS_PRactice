import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "john",
    };
    //this.handleClick = this.handleClick.bind(this);
  }
  /*handleClick() {
    console.log("button is clicked");
    console.log(this.state.count);
  }
  handleClick = () => {
    console.log("button is clicked");
    console.log(this.state.count);
  };
    <button type="button" onClick={this.handleClick}>
  Add Count
          </button>*/
  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  lowerCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  restCount = () => {
    this.setState({ count: 0 });
  };
  render() {
    //console.log(this.props);
    const { img, title, author } = this.props.info;
    return (
      <div className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4>Title:{title}</h4>
          <h6>Author:{author}</h6>
          <h6>Count:{this.state.count}</h6>
          <h6>name:{this.state.name}</h6>
          <button type="button" onClick={this.addCount}>
            Add Count
          </button>
          <button type="button " onClick={this.lowerCount}>
            Lower Count
          </button>
          <button type="button" onClick={this.restCount}>
            Reset Count
          </button>
        </div>
      </div>
    );
  }
}
