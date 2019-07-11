import React, { Component } from "react";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegister: true
    };
  }

  toggleIsRegister = () => {
    this.setState({ isRegister: !this.state.isRegister });
  };
  render() {
    const { isRegister } = this.state;
    return (
      <div>
        <h1> Welcome to Deal Tracker!</h1>
        <h3> The easiest way to keep track of when items online go on sale!</h3>
        <br />
        {isRegister ? <RegisterForm /> : <LoginForm />}
        <p className='text-center mt-1 mb-0 ' onClick={this.toggleIsRegister}>
          <button className='btn btn-outline-primary btn-sm'>
            {isRegister
              ? "Already registered? Login Here"
              : "New user? Register Here"}
          </button>
        </p>
      </div>
    );
  }
}
