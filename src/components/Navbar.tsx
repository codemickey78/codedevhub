import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { Button } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";
import { NavLink } from "react-router-dom";
import "./comp.scss";

const MainNavbar = () => {
  return (
    <div>
      <>
        <Navbar className="main-navbar">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="mainlogo" width={200} />
            </Navbar.Brand>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={NavLink} to="/" className="mnav-link">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about" className="mnav-link">
                  About Me
                </Nav.Link>
              </Nav>
              <div>
                <Button className="btn-github border-0">
                  <GoMarkGithub /> View on GitHub
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default MainNavbar;
