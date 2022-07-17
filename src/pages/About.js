import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Navbar from "../components/NavbarComponent";

class About extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container>
          <h1>About</h1>
        </Container>
      </Fragment>
    );
  }
}

export default About;
