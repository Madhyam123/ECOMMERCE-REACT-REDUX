import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { BsFillCartCheckFill } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function NavBarPanel() {
    const cartProducts = useSelector(state => state.cart);
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#home">Redux toolkit</Navbar.Brand>
                    <FaBeer />
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={Link} >Product</Nav.Link>
                    </Nav>
                    <Dropdown data-bs-theme="dark">
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                           Customer
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="http://localhost:3000/">Customer</Dropdown.Item>
                            
                            <Dropdown.Item href='http://localhost:3000/admin'>Admin</Dropdown.Item>
                            <Dropdown.Divider />
                        </Dropdown.Menu>
                    </Dropdown>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' >
                        <Navbar.Text>
                            <Nav.Link to="/cart" style={{ fontSize: "22px" }} as={Link}><BsFillCartCheckFill size={28} /> <span style={{ color: "red" }}><h1>{cartProducts.length}</h1></span></Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarPanel