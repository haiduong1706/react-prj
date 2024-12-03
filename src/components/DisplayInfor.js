import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isShowList: true,
  };
  handleShow = () => {
    this.setState({
      isShowList: !this.state.isShowList,
    });
  };
  render() {
    const { listUsers } = this.props;
    
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShow();
            }}
          >
            {this.state.isShowList === true ? "Hide List" : "Show List"}
          </span>
        </div>
        {this.state.isShowList && (
          <div>
            {listUsers.map((user, index) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div> My name is {user.name}</div>
                  <div> My age is {user.age}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfor;
