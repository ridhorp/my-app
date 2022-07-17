import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Navbar from "../components/NavBar";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container className="p-4">
          <h1>Ini halaman home</h1>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
