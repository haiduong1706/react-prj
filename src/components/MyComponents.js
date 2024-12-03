import React from "react";

class MyComponent extends React.Component {
  state ={
    name: "Duong",
    age: 21
  }
  handleClick(event){
    console.log("Hello",this.state.name);
    console.log(event)
    this.setState({
      name: "Hai Duong",
      age: Math.random()
    })
  }
  // hoverClick(event){
  //   console.log(event)
  // }
  
  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name}, I am {this.state.age} year old
        <button onClick={(event)=>{this.handleClick(event)}}>Click me</button>
        <button onMouseOver={this.hoverClick}>Hover me</button>

      </div>
    );
  }
}

export default MyComponent;
