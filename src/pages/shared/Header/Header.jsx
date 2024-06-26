import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <Container>
      <div className="text-center mt-4 ">
        <img src={logo} alt="" />
        <p className="text-secondary mt-3 ">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p className="text-secondary">
          <small>{moment().format("dddd, MMMM  DD, YYYY ")}</small>
        </p>
      </div>
      <div className="d-flex bg-secondary-subtle">
        <Button variant="danger">Latest</Button>{" "}
        <Marquee pauseOnHover={Boolean}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricin">Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Button variant="secondary">Login</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
};

export default Header;
