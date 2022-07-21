import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "reactstrap";
import Navbar from "../components/NavbarComponent";

function About() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  });

  const checkUser = () => {
    const token = localStorage.getItem("token");
    if (!!token) return setIsAuthenticated(true);
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Fragment>
      <Navbar />
      <Container>
        <h1>Halaman About</h1>
        <Button color="danger" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </Fragment>
  );
}

export default About;
