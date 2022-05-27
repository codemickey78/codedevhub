import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import { Button } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";
import { NavLink } from "react-router-dom";
import "./comp.scss";
import config from "../config";

const MainNavbar = () => {
  const [activeNav, setActiveNav] = useState(0);

  const handleActiveNav = (eventKey: any) => {
    setActiveNav(eventKey);
  };
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
                activeKey={activeNav}
                onSelect={handleActiveNav}
                defaultActiveKey={activeNav}
                className="mx-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link
                  eventKey="home"
                  as={NavLink}
                  to="/"
                  className="mnav-link"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  eventKey="about"
                  as={NavLink}
                  to="/about"
                  className="mnav-link"
                >
                  About Me
                </Nav.Link>
              </Nav>
              <div>
                <a
                  href={config.GithubRepo} target="_blank"
                  className="btn-github btn border-0 text-dark" rel="noreferrer"
                >
                  <GoMarkGithub /> View on GitHub
                </a>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default MainNavbar;
