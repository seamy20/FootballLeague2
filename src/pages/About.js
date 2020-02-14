import React from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink,
  MDBIcon, MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask, MDBTable, MDBTableBody, MDBModal
} from 'mdbreact';

import { FixedNavActive, LoadPageContent } from '../components/JSfunctions/Utils';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      tariffOverlay1: false,
      chatBotOverlay1: false,
    };
    this.onClick = this.onClick.bind(this);
    this.logoText = "";
  }

  
  operation(query)
{
  var loc = window.location;
  if (loc.href.includes("beenergy"))
	{
      this.logoText ="BE Logo";
	}
  else 
  {
      this.logoText = "Budget Energy Logo";
  }
}


  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  componentDidMount() {
    FixedNavActive();

    var page = 'about';
    LoadPageContent(page);

    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    var Logo = document.getElementById("Logo");

    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
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
              <img id="Logo"  className="Page-Logo largeLogo" alt={this.logoText} />
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar="navbar">
              <MDBNavbarNav left="left"></MDBNavbarNav>
              <MDBNavbarNav id="custom-nav-bar-sticky" right="right" className="display-8 text-uppercase pr-5">
                <MDBNavItem>
                  <MDBNavLink to="/about/terms&conditions">T&Cs</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/about/GDPR">GDPR</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/about/codesofpractice">Codes of Practice</MDBNavLink>
                </MDBNavItem>
                {/* <MDBNavItem>
                  <MDBNavLink to="/about/meettheteam">Our Team</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/about/howtocomplain">Complaints</MDBNavLink>
                </MDBNavItem> */}
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>


          <MDBContainer fluid className="text-center">
            <MDBRow className="view pt-5 pb-5 border-bottom">
              <MDBCol lg="2" md="12" className="no-padding"></MDBCol>
              <MDBCol lg="8" md="12" className="pt-4">
                <p className="display-7 text-center text-uppercase bold">Who are we</p>
                <hr className="divider" />
                <p className="About-Para-1 text-uppercase">
                </p>
              </MDBCol>
              <MDBCol lg="2" md="12" className="no-padding"></MDBCol>
            </MDBRow>
            <MDBRow className="mb-2 grey lighten-5 pt-5 pb-5 border-bottom">
              <MDBCol lg="2" md="0"></MDBCol>
              <MDBCol lg="8" md="12">
                <h1 className="h2-responsive text-center text-uppercase ml-1 bold mb-2">WHAT WE DO</h1>
                <hr className="divider" />
                <MDBRow className="mt-5">
                  <MDBCol lg="4" md="12">
                    <i className="fas fa-home fa-7x orange-text pb-4"></i>
                    <p className="display-8 text-uppercase font-weight-bold grey-text">Domestic</p>
                    <p className="">For all your home energy needs.</p>
                  </MDBCol>
                  <MDBCol lg="4" md="12">
                    <i className="fas fa-city fa-7x orange-text pb-4"></i>
                    <p className="display-8 text-uppercase font-weight-bold grey-text">Commercial</p>
                    <p className="">Fixed tariffs, to suit your business needs.</p>
                  </MDBCol>
                  <MDBCol lg="4" md="12">
                    <i className="fas fa-sun fa-7x orange-text pb-4"></i>
                    <p className="display-8 text-uppercase font-weight-bold grey-text">Renewable</p>
                    <p className="">We buy back energy at competative rates.</p>
                  </MDBCol>
                </MDBRow>
                <br /><br />
              </MDBCol>
              <MDBCol lg="2" md="0"></MDBCol>
            </MDBRow>

            <MDBRow className="pt-5">
              <MDBCol size="12" className="mb-5">
                <h1 className="display-7 text-center text-uppercase pb-2 bold">Which? Recommended</h1>
                <hr className="divider mb-5" />
                <p className="h5-responsive text-center text-uppercase grey-text font-weight-bold pb-3">
                  Below are our <a className="font-weight-bold orange-text" href="https://www.which.co.uk/">Which? </a>
                  independent review scores
                </p>
                <div className="d-flex justify-content-center">
                  <MDBTable lg="6" md="12" borderless className="">
                    <MDBTableBody className="text-left">
                      <tr>
                        <td className="display-9 text-left text-uppercase font-weight-bold grey-text">Bill accuracy</td>
                        <td>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="far fa-star fa-lg red-text pl-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="display-9 text-left text-uppercase font-weight-bold grey-text">Bill Clarity</td>
                        <td>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="far fa-star fa-lg red-text pl-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="display-9 text-left text-uppercase font-weight-bold grey-text">Phone & Online Customer Service</td>
                        <td>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="far fa-star fa-lg red-text pl-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="display-9 text-left text-uppercase font-weight-bold grey-text">Helping Understand and Reduce Energy Use</td>
                        <td>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="far fa-star fa-lg red-text pl-2"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="display-9 text-left text-uppercase font-weight-bold grey-text">Value For Money</td>
                        <td>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="fas fa-star fa-lg red-text pl-2"></i>
                          <i className="far fa-star fa-lg red-text pl-2"></i>
                        </td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                </div>
                <div className="d-flex justify-content-center">
                  <MDBBtn href="https://www.which.co.uk/reviews/energy-companies/article/northern-ireland-electricity-and-gas/budget-energy" className="btn-orange" target="_blank">
                    Read The Review
                  </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </header>
      </div>
    );
  }
}

export default About;
