import React from 'react'
import {Link} from 'react-router-dom';
import { Navbar,Nav,NavDropdown,Button } from 'react-bootstrap'
import classes from "./Header.module.css";

function Header() {
    return (
      
          
<div>

<Navbar  expand="lg">
  <Navbar.Brand><Link to='/home' style={{ textDecoration: 'none' }}><h2 className={classes.heading}>GST</h2></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
      <div className={classes.div}>
    <Nav
      className="mr-auto my-2 my-lg-0"
      navbarScroll
    >
      <Nav.Link href="#action1"><Link to='/review' style={{textDecoration:'none'}}><p className={classes.head1}>REVIEW</p></Link></Nav.Link>
      <Nav.Link href="#action2"><Link to='/FAQ' style={{textDecoration:'none'}}><p className={classes.head2}>Q&A</p></Link></Nav.Link>
      <Nav.Link href="#action3"><Link to='/contact' style={{textDecoration:'none'}}><p className={classes.head2}>CONTACT</p></Link></Nav.Link>
    </Nav>
    </div>
   
  </Navbar.Collapse>
</Navbar>
  
</div>

       
    )
}

export default Header
