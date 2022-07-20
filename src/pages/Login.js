import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Container, Form, Label } from "reactstrap";

class Response extends String {
  json = () => {
    return JSON.parse(this);
  };
}

function mockFetch(url, { body }) {
  const { email, password } = body;

  if (email !== "admin@admin.com" || password !== "password")
    return Promise.reject("Email atau password salah");

  return Promise.resolve(
    new Response(JSON.stringify({ accessToken: "pura-puranya-ini-token" }))
  );
}

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    mockFetch("http://api.example.com/v1/auth/login", {
      body: { email, password },
    })
      .then((response) => response.json())
      .then((json) => {
        localStorage.setItem("token", json.accessToken);
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Container className="p-4 d-flex align-items-center justify-content-center">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Label>
        <Label>
          Password
          <input
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Label>
        <input type="submit" value="submit" />
      </Form>
    </Container>
  );
}

export default Login;
