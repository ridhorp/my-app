import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Navbar from "../components/NavbarComponent";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container>
          <h1>Contact</h1>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
