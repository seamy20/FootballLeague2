import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer,
         MDBRow, MDBCol, MDBCardBody,  MDBBtn, MDBView, MDBMask
} from 'mdbreact';

class MyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  componentDidMount() {
  window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    var Logo = document.getElementById("Logo");

    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      Logo.className = 'smallLogo';
    }
    else {
      Logo.className = 'largeLogo';
    }
  }

  render() {
    return (
      <div>
      <header>
        <MDBNavbar id="custom-nav-expand" className="sticky-navbar-shadow sticky-top navbar-expand-lg navbar-dark light-blue scrolling-navbar">
          <MDBNavbarBrand href="/">
            <img id="Logo"  className="largeLogo"/>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.onClick}/>
          <MDBCollapse isOpen={this.state.collapse} navbar="navbar">
            <MDBNavbarNav left="left"></MDBNavbarNav>
              <MDBNavbarNav id="custom-nav-bar-sticky" right="right" className="display-8 text-uppercase pr-5">
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/teams">Teams</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/reports">Match Reports</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/news">News</MDBNavLink>
              </MDBNavItem>
              </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        <MDBContainer fluid className="no-padding">
          <div>
            <iframe href="https://myaccount.budgetenergy.co.uk/" width="100%" height="1000px" />
          </div>
        </MDBContainer>
      </header>
    </div>
    );
  }
}

export default MyAccount;
