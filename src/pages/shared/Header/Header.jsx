import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";
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
    </Container>
  );
};

export default Header;
