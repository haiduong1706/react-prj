import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Duong",
    age: 21,
  };
  handleClick(event) {
    console.log("Hello", this.state.name);
    console.log(event);
    this.setState({
      name: "Hai Duong",
      age: Math.random(),
    });
  }
  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
    // console.log(event,event.target.value)
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  // hoverClick(event){
  //   console.log(event)
  // }

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name}, I am {this.state.age} year old
        <button onClick={(event) => this.handleClick(event)}>Click me</button>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChange(event)} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
