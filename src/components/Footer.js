import React, { Component } from 'react';
import {
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    Nav,
    Button,
} from 'react-bootstrap';

class FooterPage extends Component {
    render(){
        return(
            <Navbar fixedBottom>
                <Navbar.Header>
                    <Navbar.Brand>

                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href="/contact">
                        Contact Us
                    </NavItem>
                    <NavItem eventKey={2} href="/about">
                        About Us
                    </NavItem>

                </Nav>
                <Nav pullRight>

                  <NavItem eventKey={1} href="#">
                    <Button bsStyle="info">Log Out</Button>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default FooterPage;
