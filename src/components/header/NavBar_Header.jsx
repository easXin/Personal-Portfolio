import React,{ useState }  from 'react'
import '../css/header.css'
import brandImg from '../../img/dw.jpg';

import { Navbar, Nav, Container } from 'react-bootstrap';
export default function HeaderComponnet() {
  const navItem = [
    {'Home':'/portfolio/home'},
    {'About':'/portfolio/about'},
    {'Timeline':'/portfolio/resume'},
    {'Project':'/portfolio/project'},
    {'Contact':'/portfolio/contact'}
  ]

  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Navbar bg="navbar navbar-expand-lg navbar-light bg-light border-5 mb-5 p-2" expand="lg">
      <Container>
        <Navbar.Brand href="/portfolio/">
          <img src={brandImg} alt="projects"></img>
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleNavbarToggle} aria-controls="basic-navbar-nav" style={{ fontSize: '1rem' }}/>
    
        <Navbar.Collapse id="basic-navbar-nav" 
          className={`collapse navbar-collapse flex-grow-1 ${expanded ? 'show justify-content-center' : ''}`}>
            <Nav className={`navbar-nav  ${!expanded ? 'text-right ms-auto' : 'ml-auto'} flex-nowrap`}>
              {navItem.map((item, index) => (
                <Nav.Link className='nav-item nav-link link ' href={Object.values(item)[0]} key={index}>
                  <span className="navItem">{Object.keys(item)[0]}</span>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
