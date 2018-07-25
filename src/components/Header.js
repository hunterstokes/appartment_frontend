
import React, { Component } from 'react';
import {
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    Nav,
    Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import AuthService from '../services/AuthService';

const Auth = new AuthService()

class Header extends Component {

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
                    <NavDropdown eventKey={3} title="Apartments" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}><a href="/sale">For Sale</a></MenuItem>
                        <MenuItem eventKey={3.2}><a href="/rent">For Rent</a></MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Sell your home</MenuItem>
                    </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                        <ul>{Auth.loggedIn()
                          ? <li onClick={this.handleLogout}>
                              <Button bsStyle="info">Logout</Button>
                          </li>
                          : <li>
                              <Button bsStyle="info">Log In</Button>
                          </li>
                        }
                        </ul>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                    <Button bsStyle="info">Sign Up</Button>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
