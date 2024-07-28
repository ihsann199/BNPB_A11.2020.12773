import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { raiseAlert, lowerAlert } from "./actions/alertActions";

const DisasterNavbar = ({
  brand = "Default Brand",
  links = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ],
  bgColor = "dark",
}) => {
  const alert = useSelector((state) => state.alert.alert);
  const dispatch = useDispatch();

  console.log("Current Alert Level:", alert); // Log current alert level

  return (
    <React.Fragment>
      <Navbar bg={bgColor} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {brand}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {links.map((link, index) => (
                <Nav.Link as={Link} key={index} to={link.href}>
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <div style={{ marginTop: "10px" }}>
          <h3>Current Alert Level: {alert}</h3>
          <Button
            variant="warning"
            onClick={() => {
              dispatch(raiseAlert());
              console.log("Raise Alert clicked"); // Log button click
            }}
          >
            Raise Alert
          </Button>
          <Button
            variant="success"
            onClick={() => {
              dispatch(lowerAlert());
              console.log("Lower Alert clicked"); // Log button click
            }}
            style={{ marginLeft: "10px" }}
          >
            Lower Alert
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
};

DisasterNavbar.propTypes = {
  brand: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  bgColor: PropTypes.string,
};

export default DisasterNavbar;
