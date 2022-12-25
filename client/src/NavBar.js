import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap'

export default function NavBar(){
  return (
    <Container>
            <Nav className="me-auto d-flex justify-content-center">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/write">Write</Nav.Link>
            </Nav>
  </Container>
  )
}