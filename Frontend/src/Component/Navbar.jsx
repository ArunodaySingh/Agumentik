import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

import "../Component/Style/Navbar.css";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="">
      <Container>
        <div className="home d-flex align-items-center">
          <FaHome style={{ fontSize: "25px" }} />
          <Navbar.Brand href="#home" className="ms-2">
            Shalter
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Buying</Nav.Link>
            <Nav.Link href="#selling">Selling</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link href="#login">Log in</Nav.Link>
            <Nav.Link href="#create-account">Create Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
