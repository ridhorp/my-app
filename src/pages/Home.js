import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Navbar from "../components/NavbarComponent";

class Post extends Component {
  render() {
    const { title } = this.props;
    return <h5>{title}</h5>;
  }
}

class Home extends Component {
  state = { todos: [] };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ todos: result });
      });
  }
  render() {
    const { todos } = this.state;
    return (
      <Fragment>
        <Navbar />
        <Container className="p-4">
          {todos.map((i) => (
            <Post title={i.title} />
          ))}
        </Container>
      </Fragment>
    );
  }
}

export default Home;
