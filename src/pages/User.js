import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Navbar from "../components/NavbarComponent";

class Post extends Component {
  render() {
    const { email, username } = this.props;
    return (
      <h5>
        {email} | {username}{" "}
      </h5>
    );
  }
}

class User extends Component {
  state = { users: [] };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ users: result });
      });
  }
  render() {
    const { users } = this.state;
    return (
      <Fragment>
        <Navbar />
        <Container className="p-4">
          {users.map((i) => (
            <Post username={i.username} email={i.email} />
          ))}
        </Container>
      </Fragment>
    );
  }
}

export default User;
