// import React from 'react';

import { Button, ListGroup } from "react-bootstrap";
import bg  from '../../../assets/bg.png'
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../qzone/QZone";
const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button className="mb-2 me-2 " variant="outline-primary">
        {" "}
        <FaGoogle /> Login With Google
      </Button>{" "}
      <Button variant="outline-secondary">
        {" "}
        <FaGithub /> Login With GitHub
      </Button>{" "}
      <div>
        <h4 className="mt-4 mb-3 ">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <h1>Create an Amazing Newspaper</h1>
          <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
          <Button variant="danger">Learn More</Button>{' '}
        </div>
        <img src={bg} alt="" style={{ width: '100%', height: 'auto', zIndex: '-1' }} />
      </div>
    </div>
  );
};

export default RightNav;
