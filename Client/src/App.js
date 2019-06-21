import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Feed from "./components/Feed";
import Main from "./components/Main";
import { Container } from "reactstrap";
import { Router, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Container>
            <Main />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
