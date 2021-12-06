import { Navbar, Container, Nav, NavLink, NavItem } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand className="p-2" href="/">
          STITCH LINE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              to="/register"
              className="nav-link"
              activeClassName="active"
              style={{ fontWeight: "bolder" }}
            >
              REGISTRATION
            </Nav.Link>
            <Nav.Link style={{ fontWeight: "bolder" }}>LOGIN</Nav.Link>
          </Nav>

        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
