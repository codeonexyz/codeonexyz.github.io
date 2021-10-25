import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import './index.css';
import logo from '../../assets/images/logo.png';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar light fixed="top" expand="md">
        <NavbarBrand href="/">
          <img className="logo" src={logo} alt="CodeOne Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link ff-roboto-bold">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/skills" className="nav-link ff-roboto-bold">Skills</Link>
            </NavItem>
            <NavItem>
              <Link to="/services" className="nav-link ff-roboto-bold">Services</Link>
            </NavItem>
            <NavItem>
              <Link to="/projects" className="nav-link ff-roboto-bold">Projects</Link>
            </NavItem>
            <NavItem>
              <Link to="/blog" className="nav-link ff-roboto-bold">Blog</Link>
            </NavItem>
            {/*<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>*/}
          </Nav>
          {/*<NavbarText>Simple Text</NavbarText>*/}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;