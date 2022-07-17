import React, { Component } from "react";
import {
  Alert,
  Button,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import styles from "../style.module.css";

class Submit extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.state.value);

    e.preventDefault();
  };

  render() {
    return (
      <>
        <Container className="text-center">
          <h3>{this.state.value}</h3>
        </Container>
        <Container className={styles.container}>
          <Form inline onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail" hidden>
                Email
              </Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>{" "}
            <FormGroup>
              <Label for="examplePassword" hidden>
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="text"
              />
            </FormGroup>{" "}
            <Button lass="text-left" type="submit" value="Submit">
              Submit
            </Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default Submit;
