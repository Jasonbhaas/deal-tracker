import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";

import { Container } from "reactstrap";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <AppNavbar />
        <Container>
          <h1>Hello World</h1>
        </Container>
      </div>
    );
  }
}

export default App;
