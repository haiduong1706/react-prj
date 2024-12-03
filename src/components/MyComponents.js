import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {


  //JSX
  render() {
    return (
      <div>
        <UserInfor/>
        <DisplayInfor name={"Duong"} age={21} />
      </div>
    );
  }
}

export default MyComponent;
