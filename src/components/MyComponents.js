import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Duong", age: "18" },
      { id: 2, name: "Le", age: "23" },
      { id: 3, name: "Hai", age: "30" },
    ],
  };
  handleAddNewUser = (userObj) => {
    // console.log(userObj);
    // let listUsersNew = this.state.listUsers;
    // listUsersNew.unshift(userObj);
    // listUsersNew.push(userObj);
    // this.setState({
    //   listUsers: listUsersNew,
    // });

    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };
  handleDeleteUser = (userID) => {
    let listUsersClone = [...this.state.listUsers];
    listUsersClone = listUsersClone.filter((item) => item.id !== userID);
    this.setState({
      listUsers: listUsersClone,
    });
  };
  //JSX
  render() {
    return (
      <>
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <DisplayInfor
            listUsers={this.state.listUsers}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
