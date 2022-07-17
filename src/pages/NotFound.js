import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Navbar from "../components/NavbarComponent";

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container>
          <h1>Not Found</h1>
        </Container>
      </Fragment>
    );
  }
}

export default NotFound;
