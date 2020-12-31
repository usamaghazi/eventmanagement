import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbarr.css';
class Navbarr extends Component{
  render(){
    let a = null;
    if(this.props.token){
      a = (
        <Navbar className="navbar navbar-dark Gradient sticky-top" expand="md">
<div className="container-fluid mx-4">
<Navbar.Brand href="#home">
<img
    alt=""
    src="images/polo.png"
    width="80"
    height="45"
    className="d-inline-block align-top"
  />{' '}
  <span style={{fontWeight:'bold', fontSize:'35px', fontFamily:'serif',fontStyle:'oblique'}}>DN Organizers</span>
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="ml-auto">
  <Nav.Link className='Effect'>
  <NavLink
  exact
  style={{textDecoration:'none'}}
  activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1.56em'}} 
  to="/"> 
  <span style={{fontStyle:'italic',fontSize:'18px', color:'whitesmoke',}}>Home</span> 
  </NavLink>
  </Nav.Link>
  <Nav.Link className='Effect'>
  <NavLink 
  style={{textDecoration:'none'}}
  activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1.56em'}}
  to="/about"> 
  <span style={{fontStyle:'italic',fontSize:'18px', color:'whitesmoke'}}>About Us</span>
  </NavLink> 
</Nav.Link>
  {/*<Nav.Link href="#linkk"> <span style={{fontStyle:'italic',fontSize:'18px'}}>Contact</span> </Nav.Link>*/}
  <Nav.Link className='Effect'>
  <NavLink
  style={{textDecoration:'none'}}
  activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1.56em'}} 
  to="/logout"> 
  <span style={{fontStyle:'italic',fontSize:'18px', color:'whitesmoke'}}>Log Out</span> 
  </NavLink>
  </Nav.Link>
 { /*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown>*/ }
</Nav>
</Navbar.Collapse>
</div>
</Navbar>
      )
    }
    else{
      a = (
        <Navbar className="navbar navbar-dark Gradient sticky-top" expand="md" >
<div className="container-fluid mx-4">
<Navbar.Brand href="#home">
<img
    alt=""
    src="images/polo.png"
    width="80"
    height="45"
    className="d-inline-block align-top"
  />{' '}
  <span style={{fontWeight:'bold', fontSize:'35px', fontFamily:'serif',fontStyle:'oblique'}}>DN Organizers</span>
</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="ml-auto">
  <Nav.Link className='Effect'>
  <NavLink
  style={{textDecoration:'none'}}
  exact
  activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1.56em',":hover":{color: "black"}}} 
  to="/"> 
  <span style={{fontStyle:'italic',fontSize:'18px', color:'whitesmoke'}}>Home</span> 
  </NavLink>
  </Nav.Link>
  <Nav.Link className='Effect'>
  <NavLink 
  style={{textDecoration:'none'}}
  activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1.56em'}}
  to="/about"> 
  <span style={{fontStyle:'italic',fontSize:'18px', color:'whitesmoke'}}>About Us</span>
  </NavLink> 
</Nav.Link>
  {/*<Nav.Link href="#linkk"> <span style={{fontStyle:'italic',fontSize:'18px'}}>Contact</span> </Nav.Link>*/}
  <Nav.Link className='Effect'>
  <NavLink
  style={{textDecoration:'none'}}
  activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '1.56em'}} 
  to="/login"> 
  <span style={{fontStyle:'italic',fontSize:'18px', color:'whitesmoke'}}>Log In</span> 
  </NavLink>
  </Nav.Link>
 { /*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown>*/ }
</Nav>
</Navbar.Collapse>
</div>
</Navbar>
      )
    }
    return(
      <>
      {a}
      </>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.idToken
  }
}

export default connect(mapStateToProps,null)(Navbarr)



