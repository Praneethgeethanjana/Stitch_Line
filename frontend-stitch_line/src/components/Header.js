import { Navbar,Container,Nav } from "react-bootstrap"

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container fluid>
  <Navbar.Brand className="p-2" href="#home">STITCH LINE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      
      
    </Nav>
    <Nav>
      <Nav.Link style={{fontWeight:'bolder'}}>REGISTRATION</Nav.Link>
       <Nav.Link style={{fontWeight:'bolder'}} >LOGIN</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>



    )
}

export default Header
