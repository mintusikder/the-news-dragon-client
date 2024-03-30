// import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from '../pages/shared/leftNav/LeftNav';
import RightNav from '../pages/shared/rightNav/RightNav';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>main</Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
