import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logout from "./auth/Logout";
import LoginRegisterModal from "./auth/LoginRegisterModal";
import AddItemModal from "./AddItemModal";

class AppNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  componentDidMount() {}

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span className='mr-3 navbar-text'>
            {user ? `Welcome ${user.name.split(" ")[0]}` : ""}
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
        <NavItem>
          <AddItemModal />
        </NavItem>
      </Fragment>
    );

    const guestLinks = <LoginRegisterModal />;

    return (
      <div>
        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href='/'>Deal Tracker</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(AppNavBar);
