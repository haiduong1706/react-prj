import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Duong", age: "18" },
      { id: 2, name: "Le", age: "23" },
      { id: 3, name: "Hai", age: "30" },
    ],
  };
  //JSX
  render() {
    return (
      <div>
        <UserInfor />
        <DisplayInfor listUsers={this.state.listUsers}/>
      </div>
    );
  }
}

export default MyComponent;
