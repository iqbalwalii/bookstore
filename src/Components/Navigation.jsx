// import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  const cartItems = useSelector((state) => state.cart.items);
  const len = cartItems.length;

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <LinkContainer to="/">
        <Navbar.Brand className="px-2">Bookstore</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/books">
            <Nav.Link>Books</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/authors">
            <Nav.Link>Authors</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cart">
            <Nav.Link>
              Cart
              <span className="bg-light text-dark p-1 rounded-circle ">
                {len}
              </span>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
