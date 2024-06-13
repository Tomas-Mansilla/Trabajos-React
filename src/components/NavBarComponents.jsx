import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import CartWidgetComponent from "./CartWidgetComponent";
import { getAllCategories } from "../services/products";

const NavBarComponent = () => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res.data);
    }).catch((error) => {
      console.error(error);
    });
  })
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand><link to="/">Ezio Store</link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> <link to="/">Home</link></Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">

              {categories.map((category) => {
                return (
                  <NavDropdown.Item key={category.id}>
                    <link to={`/category/${category.id}`}>{category.name}</link>
                  </NavDropdown.Item>
              );
            })}
</NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent />
      </Container>
    </Navbar>
  );
};
export default NavBarComponent;