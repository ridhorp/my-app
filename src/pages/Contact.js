import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Navbar from "../components/NavbarComponent";

class Contact extends Component {
  state = { image: null };

  file = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleFileChange = (e) => {
    const file = this.file.current.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.setState({ image: reader.result });
      },
      false
    );
    if (file.type.includes("image/")) reader.readAsDataURL(file);
  };

  render() {
    const { image } = this.state;
    return (
      <Fragment>
        <Navbar />
        <Container className="p-4">
          <h1>Contact</h1>
          {!!image && <img src={image} alt="Preview" />}
          <form onSubmit={this.handleSubmit}>
            <input
              type="file"
              name="photo"
              ref={this.file}
              onChange={this.handleFileChange}
            />
            <input type="submit" value="submit" />
          </form>
        </Container>
      </Fragment>
    );
  }
}

export default Contact;
