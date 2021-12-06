import { Component } from "react";
import { Container, Form, FormControl, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import logo from "../logo.svg";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand={false} bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inlineblock align-top"
                alt="Logo"
              />
              {"Logo"}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About Us</Nav.Link>
                  <Nav.Link href="#">Gallery</Nav.Link>
                  <Nav.Link href="#">Contacts</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    );
  }
}
