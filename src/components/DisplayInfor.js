import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {

//   render() {
//     console.log("render");
//     const { listUsers } = this.props;

//     return (
//       <div className="display-infor-container">

//         {true && (
//           <>
//             {listUsers.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                     <div> My name is {user.name}</div>
//                     <div> My age is {user.age}</div>
//                   </div>
//                   <div>
//                     <span>
//                       <button
//                         onClick={() => this.props.handleDeleteUser(user.id)}
//                       >
//                         Delete
//                       </button>
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;

  return (
    <div className="display-infor-container">
      {true && (
        <>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div> My name is {user.name}</div>
                  <div> My age is {user.age}</div>
                </div>
                <div>
                  <span>
                    <button onClick={() => props.handleDeleteUser(user.id)}>
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
