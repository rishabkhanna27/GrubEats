import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import '../App.css'
export class NavBar extends Component{
    render(){
        return(
            
            <div>
                
            <Navbar className="navi" expands="lg">
            <Navbar.Brand className=" brand text-white">GE
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
            <NavLink className="navii let d-inline p-4 text-white" to="/">Home</NavLink>
            <NavLink className="navii let d-inline p-4 text-white" to="/Homeit">Menu</NavLink>
            <NavLink className="navii let d-inline p-4 text-white" to="/Cart">Cart</NavLink>

            </Nav>   
            </Navbar.Collapse>
            <Nav><NavLink className="navii let d-inline p-4 text-white" to="/Homeit">Order Now</NavLink>

            </Nav>
            </Navbar>
            </div>
           
        )
    }
}
export default NavBar;