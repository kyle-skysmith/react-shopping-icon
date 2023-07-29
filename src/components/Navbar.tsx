import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { Icon } from '@iconify/react'; 

export function Navbar() {
    return <NavbarBs className="bg-white shadow-sm mb-3">
        <Container>
          <Nav>
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/" as={NavLink}>Store</Nav.Link>
            <Nav.Link to="/" as={NavLink}>About</Nav.Link>
          </Nav> 
          <button><Icon style={{ width: "3rem", height: "3rem"}} icon="typcn:shopping-cart" /></button>
        </Container>
    </NavbarBs>
}