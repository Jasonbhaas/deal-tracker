import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Feed from "./components/Feed";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Container>
            <Feed />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
