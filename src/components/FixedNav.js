import React from 'react';
import { MDBContainer, MDBNavLink,  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, a, MDBIcon } from 'mdbreact';

import $ from 'jquery';

class FixedNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  MyAccount(){
    window.open("https://myaccount.budgetenergy.co.uk/");
  }

  render() {

    const activeLink = {borderBottom: '1px solid #ff9800'}

    return (
      <MDBNavbar id="custom-nav-expand" className="sticky-navbar-shadow sticky-top navbar-expand-lg navbar-dark menuBarColor scrolling-navbar">
      <MDBNavbarBrand href="/">
        <img id="Logo" className="Page-Logo largeLogo" src={require('../images/5e3e6f5e0d7592.png')} />
        
      </MDBNavbarBrand>
      <MDBNavbarBrand href="/" className="mt-5">
          <ul>
            <li><a href="" class="tooltipclass"><img height={22} src={require('../images/teamLogos/bbob.jpg')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={22} src={require('../images/teamLogos/lisahally.jpg')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={22} src={require('../images/teamLogos/foyle_wanderers.png')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={22} src={require('../images/teamLogos/ardmroe.PNG')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={22} src={require('../images/teamLogos/donemana.jpg')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={22} src={require('../images/teamLogos/newbuildings.jpg')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={22} src={require('../images/teamLogos/claudy_rovers.jpg')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={22} src={require('../images/teamLogos/draperstown.jpg')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={22} src={require('../images/teamLogos/greysteel.jpg')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={22} src={require('../images/teamLogos/bbob.jpg')}/></a></li>
          </ul>
      </MDBNavbarBrand>

      <MDBNavbarToggler onClick={this.onClick} />
      <MDBCollapse isOpen={this.state.collapse} navbar="navbar">
        <MDBNavbarNav left="left"></MDBNavbarNav>
        <MDBNavbarNav id="custom-nav-bar-sticky" right="right" className="display-8 text-uppercase">
          <MDBNavItem>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/about">About Us</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/careers">Careers</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/ordernow">Order Now</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default FixedNav;
