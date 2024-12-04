import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log("constructer");
    super(props);
    this.state = {
      isShowList: true,
    };
  }
  componentDidMount() {
    console.log("Didmout");
    setTimeout(() => {
      document.title = "Haiduong";
    }, 1500);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("update", this.props, prevProps);
  }
  handleShow = () => {
    this.setState({
      isShowList: !this.state.isShowList,
    });
  };
  render() {
    console.log("render");
    const { listUsers } = this.props;

    return (
      <div className="display-infor-container">
        {/* <img src={logo} /> */}
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
                      <button
                        onClick={() => this.props.handleDeleteUser(user.id)}
                      >
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
  }
}
export default DisplayInfor;
