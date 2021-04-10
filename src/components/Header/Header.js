import Logo from "../../images/logo.svg";
import Hamburger from "../../images/icon-hamburger.svg";

import { Button, Nav, Navbar } from "react-bootstrap";
import "./header.css";
function Header() {
  return (
    <Navbar bg="white" expand="lg" className="navbarWrapper">
      <Navbar.Brand href="#">
        <img src={Logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        data-label-expanded="Close"
        aria-expanded="false"
      >
        <img src={Hamburger} alt="menu-icon" />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto all-links">
          <Nav.Link className="m-2" href="#">
            Home
          </Nav.Link>
          <Nav.Link className="m-2" href="#">
            About
          </Nav.Link>
          <Nav.Link className="m-2" href="#">
            Contact
          </Nav.Link>
          <Nav.Link className="m-2" href="#">
            Blog
          </Nav.Link>
          <Nav.Link className="m-2" href="#">
            Careers
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Button variant="primary" className="btn">
        Request Invite
      </Button>
    </Navbar>
  );
}

export default Header;
