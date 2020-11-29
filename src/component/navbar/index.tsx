import React from "react"
import { Navbar } from "react-bootstrap"

const NavBar: React.FC = () => {
    return (
        <Navbar bg="primary" variant="dark" sticky="top">
            <Navbar.Brand href="#home" >Speisekarten Website</ Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text >45€</Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar