import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBCardImage, MDBCardTitle, MDBCardText, MDBNavItem,
         MDBNavLink, MDBIcon, MDBContainer, MDBRow, MDBCol, MDBCardBody,  MDBBtn, MDBView, MDBMask, MDBCard,MDBModal,
         MDBInput
} from 'mdbreact';
import axios from 'axios';
import ReactTable from 'react-table'
import { FixedNavActive, LoadPageContent } from '../../components/JSfunctions/Utils';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import matchSorter from 'match-sorter'
import "react-table/react-table.css";
import 'react-table-hoc-fixed-columns/lib/styles.css' // important: this line must
const ReactTableFixedColumns = withFixedColumns(ReactTable);
var moment = require('moment');
moment().format();
class TeamPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      tariffOverlay1: false,
      chatBotOverlay1: false,
      players: [],
      blogTeamposts: [
        {
          id2: "team1",
          title:
            "Blog Post 1"
        },
        {
          id2: "team2",
          title: "Blog Post 2"
        },
        {
          id2: "team3",
          title: "Blog Post 3"
        }
      ]
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

        // players Data
        axios.get(window.$api + "players")
        .then(res => {
          const data = res.data;
          this.setState({ players: data });
          //console.log(this.state.players);
        });



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
    const { players } = this.state;

    const Playerscolumns = [
      {
        Header: 'Player Name',
        accessor: 'playerName',
        className:"playerName",
        id: "playerName",
        accessor: d => d.playerName,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["playerName"] }),
        filterAll: true,
        width:200, 
      },
      {
        Header: 'Position',
        accessor: 'position',
        className:"position",
        id: "position",
        accessor: d => d.position,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["position"] }),
        filterAll: true,
        width:150, 
      },
]                                        


    return (
      <div className="homeContainer">
      <header>


        <MDBContainer fluid className="boxshadow">
        <MDBRow className="view border-bottom ml-1">
        <MDBCol lg="6" md="12" className="full-img ">
                  <img className="teamBanner" src={require('../../images/lisahallyteampic.jpg')}/>
                </MDBCol>
                <MDBCol lg="5" md="12" className="no-padding">
                  <p className="teamBannerInfoTitle Page-Title display-5 black-text text-left text-uppercase mt-5 ml-5 bold">Lissahally Football Club</p>
                  <p className="teamBannerInfoPara black-text text-left text-uppercase ml-5">
                    Does your business need electricity?
                  <i className="teamBannerInfoPara fas fa-check fa-lg green-text ml-2"></i>
                  </p>
                  <p className="teamBannerInfoPara black-text text-left text-uppercase ml-5">
                    At competitive rates?
                  <i className="fas fa-check fa-lg green-text ml-2"></i>
                  </p>
                  <p className="teamBannerInfoPara black-text text-left text-uppercase ml-5">
                    With an easy to manage account?
                  <i className="fas fa-check fa-lg green-text ml-2"></i>
                  </p>
                  <p className="teamBannerInfoPara black-text text-left text-uppercase ml-5">
                   A customer service team you can talk to and a bill you can understand.
                  <i className="fas fa-check fa-lg green-text ml-2"></i>
                  </p>
                  <a className="btn btn-default btn-orange Ripple-parent orange full-width float-left ml-5" href="/business/callback">Contact Us</a>
                </MDBCol>
              </MDBRow>
              <MDBRow className="teamFormation mt-4  ml-1">
                <MDBCol lg="4" md="12" className="full-img ">
                  <MDBCard >
                    <MDBCardImage className="img-fluid formationbackground" src={require('../../images/formationbackground.png')}  waves />
                    {/* <MDBCardBody>
                      <MDBCardTitle></MDBCardTitle>
                      <MDBCardText>
                      </MDBCardText>
                    </MDBCardBody> */}
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="4" md="12" className="playerTable">
                <ReactTableFixedColumns className="playerTable" data={players} data={players} columns={Playerscolumns} showPagination={false} pageSize={15}/>  
                </MDBCol>
              </MDBRow>


              <MDBRow className=" mt-4">
                <MDBCol lg="4" md="12" className="cardList">
                <ul>
                    {this.state.blogTeamposts.map(TeamPost => {
                      return (
                        <div key={TeamPost.id2}>
                        <li className="noStyle">
                        <div class="column card flex-row flex-wrap mb-3 cardCssTeamPage" >
                          <div class="card-header border-0 mainCardImgSide ">
                              <img className="overlay rounded z-depth-1 blogCardImgTeamPage " src={require('../../images/lisahallywin.jpg')}/>
                          </div>
                          <MDBCol class="">
                            <div class="">
                                <p className="cardTitle">Foyle Wanderers Winners 2019/2020 </p>
                                <p  id="wordwrap">View Lisahally V Ardmore Match report. </p>
                                <MDBNavLink href="#" to={`/teams/teamspage/${TeamPost.id2}`}>{TeamPost.title}Click to view</MDBNavLink>
                            </div>
                          </MDBCol>
                        </div>
                        </li>
                        </div>
                      );
                    })}
                    </ul>
                </MDBCol>
              </MDBRow>



        </MDBContainer>
      </header>
    </div>
    );
  }
}

export default TeamPage;
