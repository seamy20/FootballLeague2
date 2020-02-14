import React from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer,
  MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask, MDBModal
} from 'mdbreact';

import { FixedNavActive, LoadPageContent } from '../components/JSfunctions/Utils';

class ForBusiness extends React.Component {
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

    var page = 'business';
    LoadPageContent(page);

    window.addEventListener('scroll', this.handleScroll, { passive: true });
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
                <img id="Logo" className="Page-Logo largeLogo" alt={this.logoText} />
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar="navbar">
                <MDBNavbarNav left="left"></MDBNavbarNav>
                <MDBNavbarNav id="custom-nav-bar-sticky" right="right" className="display-8 text-uppercase pr-5">
                  <MDBNavItem>
                    <MDBNavLink to="/business/smallbusinessfarm">Small Business & Farm</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/business/commercialindustrial">Commercial & Industrial</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/business/renewable">Renewable</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>


            <MDBContainer fluid className="text-center">
              <MDBRow className="view border-bottom">
                <MDBCol lg="6" md="12" className="no-padding">
                  <p className="Page-Title display-5 black-text text-left text-uppercase mt-5 ml-5 bold">Bright deals for your business</p>
                  <p className="black-text text-left text-uppercase ml-5">
                    Does your business need electricity?
                  <i className="fas fa-check fa-lg green-text ml-2"></i>
                  </p>
                  <p className="black-text text-left text-uppercase ml-5">
                    At competitive rates?
                  <i className="fas fa-check fa-lg green-text ml-2"></i>
                  </p>
                  <p className="black-text text-left text-uppercase ml-5">
                    With an easy to manage account?
                  <i className="fas fa-check fa-lg green-text ml-2"></i>
                  </p>
                  <p className="black-text text-left text-uppercase ml-5">
                   A customer service team you can talk to and a bill you can understand.
                  <i className="fas fa-check fa-lg green-text ml-2"></i>
                  </p>
                  <a className="btn btn-default btn-orange Ripple-parent orange full-width float-left ml-5" href="/business/callback">Contact Us</a>
                </MDBCol>
                <MDBCol lg="6" md="12" className="full-img">
                  <img id="BusinessBanner" src={require('../images/shutterstock/multiplebulbs.jpg')} height="400px !important" width="100%" className="" />
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-2 grey lighten-5 pt-5 pb-5 border-bottom">
                <MDBCol lg="2" md="0"></MDBCol>
                <MDBCol lg="8" md="12">
                  <h1 className="h2-responsive text-center text-uppercase ml-1 bold mb-5">ENERGY FOR ALL BUSINESS TYPES</h1>

                  <MDBRow>
                    <MDBCol lg="6" md="12">
                      <h3 className="text-uppercase bold">Small & Medium Business</h3>
                      <hr className="divider" />
                      <p className="lead text-center ml-1">
                        Looking for information on what Budget Energy can do for your small or medium business? We have a tariff to suit you.
                      </p>
                      <a className="btn btn-default Ripple-parent light-blue full-width" href="/business/smallbusinessfarm">Find out more</a>
                    </MDBCol>
                    <MDBCol lg="6" md="12">
                      <h3 className="text-uppercase bold">Commercial & Industrial Business</h3>
                      <hr className="divider" />
                      <p className="lead text-center ml-1">
                        For Large commercial and industrial business, our expert team can work with you to meet your needs. Have a look at what we can offer.
                    </p>
                      <a className="btn btn-default Ripple-parent light-blue full-width" href="/business/commercialindustrial">Find out more</a>
                    </MDBCol>
                  </MDBRow>
                  <br /><br />
                </MDBCol>
                <MDBCol lg="2" md="0"></MDBCol>
              </MDBRow>
              <MDBRow className="mt-5 mb-5">
                <MDBCol size="12">
                  <h1 className="h2-responsive text-center text-uppercase ml-1 bold">WE MAKE IT EASY</h1>
                  <hr className="divider" />
                </MDBCol>
              </MDBRow>
              <MDBRow className="">
                <MDBCol lg="4" md="12">
                  <i className="far fa-money-bill-alt fa-7x orange-text pb-4"></i>
                  <p className="display-8 text-uppercase font-weight-bold grey-text">One Bill</p>
                  <p className="">Your bills on one invoice.</p>
                </MDBCol>
                <MDBCol lg="4" md="12">
                  <i className="far fa-file-alt fa-7x orange-text pb-4"></i>
                  <p className="display-8 text-uppercase font-weight-bold grey-text">Fixed Tariffs</p>
                  <p className="">Fixed tariffs, with no hidden costs.</p>
                </MDBCol>
                <MDBCol lg="4" md="12">
                  <i className="fas fa-money-check-alt fa-7x orange-text pb-4"></i>
                  <p className="display-8 text-uppercase font-weight-bold grey-text">Easy Payment</p>
                  <p className="">Pay your bill, your way whenever suits you.</p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-5">
                <MDBCol lg="4" md="0">
                </MDBCol>
                <MDBCol lg="4" md="12">
                    <a className="mt-5 btn btn-default Ripple-parent light-blue full-width" href="/business/callback">Get In Touch</a>
                </MDBCol>
                <MDBCol lg="4" md="0">
                </MDBCol>
              </MDBRow>
              <br />
            </MDBContainer>
          </header>
        </div>
      );
    }
  }



export default ForBusiness;
