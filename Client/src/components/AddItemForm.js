import React, { Component, Fragment } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  NavLink,
  Alert
} from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItem } from "../actions/itemActions";
import { clearErrors } from "../actions/errorActions";

class AddItemForm extends Component {
  state = {
    modal: false,
    name: "",
    make: "",
    vendors: [],
    url: "",
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "ITEM_CREATION_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  toggle = () => {
    // Clear errors
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, make, vendors, url } = this.state;

    const newItem = {
      name,
      make,
      vendors,
      url
    };

    this.props.addItem(newItem);
  };

  render() {
    return (
      <div>
        <NavLink onClick={this.toggle} href='#'>
          Add Item
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Watch a new Item</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Label for='url'>Url</Label>
                <Input
                  type='url'
                  name='url'
                  id='url'
                  placeholder='Item Url'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Label for='make'>Make</Label>
                <Input
                  type='make'
                  name='make'
                  id='make'
                  placeholder='Brand'
                  className='mb-3'
                  onChange={this.onChange}
                />

                <Label for='vendor'>Vendor</Label>
                <Input
                  type='vendor'
                  name='vendor'
                  id='vendor'
                  placeholder='Website'
                  className='mb-3'
                  onChange={this.onChange}
                />
                <Button color='dark' style={{ marginTop: "2rem" }} block>
                  Add Item
                </Button>
              </FormGroup>
            </Form>
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
  { addItem, clearErrors }
)(AddItemForm);
