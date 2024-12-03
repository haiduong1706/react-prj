import React from "react";

class UserInfor extends React.Component {
  state = {
    name: "Duong",
    age: 21,
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
    // console.log(event,event.target.value)
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
    // console.log(event,event.target.value)
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        {" "}
        My name is {this.state.name}, I am {this.state.age} year old
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Your name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChange(event)}
          />
          <label>Age:</label>
          <input
            value={this.state.age}
            type="number"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default UserInfor;
