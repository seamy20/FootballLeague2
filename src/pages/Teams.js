import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem,
         MDBNavLink, MDBIcon, MDBContainer, MDBRow, MDBCol, MDBCardBody,  MDBBtn, MDBView, MDBMask, MDBCard,MDBModal,
         MDBInput
} from 'mdbreact';


import { FixedNavActive, LoadPageContent } from '../components/JSfunctions/Utils';

class Teams extends React.Component {
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

    var page = 'help';
    LoadPageContent(page);

    window.addEventListener('scroll', this.handleScroll, { passive: true });
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


        <MDBContainer fluid className="text-center">
          <MDBRow lg="12"className="helpPage">
            <MDBCol >
            </MDBCol>
          </MDBRow>

        </MDBContainer>
      </header>
    </div>
    );
  }
}

export default Teams;
