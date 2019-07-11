import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Welcome from "./Welcome";
import Feed from "./Feed";

class Main extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  render() {
    const { isAuthenticated } = this.props;
    return <div>{isAuthenticated ? <Feed /> : <Welcome />}</div>;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Main);
