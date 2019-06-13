import React, { Component, Fragment } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class LoginRegisterModal extends Component {
  state = {
    modal: false,
    email: "",
    password: "",
    msg: null,
    login: true
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for login error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
    if (this.state.modal && isAuthenticated) {
      this.toggleModal();
    }
  }

  toggleModal = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleLogin = () => {
    this.props.clearErrors();
    this.setState({
      login: !this.state.login
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    const loginCredentials = {
      email,
      password
    };

    this.props.login(loginCredentials);
  };

  render() {
    const login = this.state.login;
    return (
      <div>
        <NavLink onClick={this.toggleModal} href='#'>
          Login/Register
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            {login ? "Login" : "Register"}
          </ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
            {login ? <LoginForm /> : <RegisterForm />}
            <p className='text-center mt-1 mb-0 ' onClick={this.toggleLogin}>
              <a href='#' className='text-muted'>
                {login
                  ? "New user? Register Here"
                  : "Already registered? Login Here"}
              </a>
            </p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(LoginRegisterModal);
