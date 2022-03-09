import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./Header.scss";

// Header.prototype = {};

export default function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://www.facebook.com/Namcoii2302/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chu Nam
            </a>
          </Col>

          <Col sx="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              // activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
