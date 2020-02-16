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
        <MDBRow className="view border-bottom">
        <ul>
            <li><a href="" class="tooltipclass"><img height={52} src={require('../images/teamLogos/bbob.jpg')}/></a></li>
            <li><a href="/teams/teamspage" class="tooltipclass"><img height={52} src={require('../images/teamLogos/lisahally.jpg')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={52} src={require('../images/teamLogos/foyle_wanderers.png')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={52} src={require('../images/teamLogos/ardmroe.PNG')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={52} src={require('../images/teamLogos/donemana.jpg')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={52} src={require('../images/teamLogos/newbuildings.jpg')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={52} src={require('../images/teamLogos/claudy_rovers.jpg')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={52} src={require('../images/teamLogos/draperstown.jpg')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={52} src={require('../images/teamLogos/greysteel.jpg')}/></a></li>
            <li><a href="" class="tooltipclass"><img height={52} src={require('../images/teamLogos/bbob.jpg')}/></a></li>
          </ul>
              </MDBRow>

        </MDBContainer>
      </header>
    </div>
    );
  }
}

export default Teams;
