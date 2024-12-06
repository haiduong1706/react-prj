import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "",
//     age: "",
//   };

//   handleOnChange = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//     // console.log(event,event.target.value)
//   };
//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//     // console.log(event,event.target.value)
//   };
//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     // console.log(this.state);
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         {" "}
//         My name is {this.state.name}, I am {this.state.age} year old
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name:</label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChange(event)}
//           />
//           <label>Age:</label>
//           <input
//             value={this.state.age}
//             type="number"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleOnChange = (event) => {
    setName(event.target.value);
  };
  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name}, I am {age} year old
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name:</label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChange(event)}
        />
        <label>Age:</label>
        <input
          value={age}
          type="number"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfor;
