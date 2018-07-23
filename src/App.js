import React, { Component } from 'react';
import {
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    Nav,
} from 'react-bootstrap';
import './App.css';
import {getApartments} from './api/index.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apartments: []
        }
    }
    componentWillMount() {
        getApartments()
        .then(APIapartments => {
            this.setState({
                apartments: APIapartments
            })
        })
    }

    render() {
        return (
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">Welcome to Appartments!</a>
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
                  <NavDropdown eventKey={3} title="Apartments" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}><a href="/sale">For Sale</a></MenuItem>
                    <MenuItem eventKey={3.2}><a href="/rent">For Rent</a></MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Sell your home</MenuItem>
                  </NavDropdown>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                    Log In
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    Sign Up
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default App;
