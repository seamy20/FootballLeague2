import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import ReactTable from 'react-table'
import {
  MDBCard, MDBCardImage, MDBCardTitle, MDBCardText, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer, MDBRow, MDBModal, MDBModalBody,
  MDBModalHeader, MDBModalFooter, MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask
} from 'mdbreact';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import matchSorter from 'match-sorter'
import { FixedNavActive, LoadPageContent } from '../components/JSfunctions/Utils.js';
import "react-table/react-table.css";
import 'react-table-hoc-fixed-columns/lib/styles.css' // important: this line must
import test from '../images/teamLogos/bbob.jpg'
const ReactTableFixedColumns = withFixedColumns(ReactTable);
var moment = require('moment');
moment().format();
class ForHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      tariffOverlay1: false,
      chatBotOverlay1: false,
      teams: [],
      fixtures: [],
      fixtureTableLength:0,
      results: [],
      teamNameWidth:0,
      numberColWidth:0,
      blogposts: [
        {
          id: "xczczxczxczxc",
          title:
            "Click Here"
        },
        {
          id: "ZopfliPipelineCachedStorage",
          title: "django-pipeline and Zopfli"
        },
        {
          id: "django-lock-decorator-with-django-redis",
          title: "Click Here"
        }
      ]
    };
    this.onClick = this.onClick.bind(this);
    this.logoText = "";

  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  //Operations to hide or show content based on which tile is selected
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




  componentDidMount() {

    FixedNavActive();
    var w = window.innerWidth;
    var h = window.innerHeight;
    this.state.windowWidth = w;

    if(w < 500)
    {
      this.state.windowWidth = w;
      this.state.numberColWidth = 30;
      this.state.teamNameWidth = 100;
    }
    else{
      this.state.numberColWidth = 40;
      this.state.teamNameWidth = 150;
    }

console.log(w + " " + h);
    var page = 'home';
    //LoadPageContent(page);

        // Teams Data
        axios.get(window.$api + "teams")
        .then(res => {
          const data = res.data;
          this.setState({ teams: data });
          //console.log(this.state.teams);
        });
        // Fixture Data
        axios.get(window.$api + "fixtures")
        .then(res => {
          const data = res.data;
          this.setState({ fixtures: data });
          //console.log(this.state.fixtures);
          this.state.fixtureTableLength = this.state.fixtures.length;
          console.log(this.state.fixtureTableLength);
        });
        // Results Data
        axios.get(window.$api + "results")
        .then(res => {
          const data = res.data;
          this.setState({ results: data });
          //console.log(this.state.results);
        });

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

  TopUp() {
    window.open("https://myaccount.budgetenergy.co.uk/top-up/kpn");
  }



  //Operations to hide or show content based on which tile is selected
  operation() {
    var loc = window.location;
    if (loc.href.includes("beenergy")) {
      window.location.href = "https://myaccount.beenergy.ie/"
    }
    else {
      window.location.href = "https://myaccount.budgetenergy.co.uk/"
    }
  }


  operationLinks(value1, value2){
    console.log(value1);
    console.log(value2);

  }

  render() {
    const { teams } = this.state;
    const { fixtures } = this.state;
    const { results } = this.state;
    var test = 5;
    // teams = teams.map((row) => {
    //   row.ImgPath = "https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.nbcnews-ux-2880-1000.jpg";
    //   return row;
    // });
    
    var img1 = "../images/teamLogos/bbob.jpg";
                  const columns = [
                    {
                      Header: '*',
                      fixed: "left",
                      width:this.state.numberColWidth,
                      Cell: ({ row, original }) => {
                        var teamLogoRend = <div><img height={34} src={require('../images/teamLogos/bbob.jpg')}/></div>;
                        switch(original.teamName)
                        {
                          case "BBOB":  teamLogoRend = <div><img height={22} src={require('../images/teamLogos/bbob.jpg')}/></div>; break;
                          case "Lisahally":  teamLogoRend = <div><img height={22} src={require('../images/teamLogos/lisahally.jpg')}/></div>; break;
                          case "Foyle Wanderers": teamLogoRend = <div><img height={22} src={require('../images/teamLogos/foyle_wanderers.png')}/></div> ; break;
                          case "Ardmore": teamLogoRend = <div><img height={22} src={require('../images/teamLogos/ardmroe.PNG')}/></div> ; break;
                          case "Donemana": teamLogoRend = <div><img height={22} src={require('../images/teamLogos/donemana.jpg')}/></div> ; break;
                          case "Newbuildings Reserves": teamLogoRend = <div><img height={22} src={require('../images/teamLogos/newbuildings.jpg')}/></div> ; break;
                          case "Claudy Rovers": teamLogoRend = <div><img height={22} src={require('../images/teamLogos/claudy_rovers.jpg')}/></div> ; break;
                          case "Draperstown Celtic":  teamLogoRend = <div><img height={22} src={require('../images/teamLogos/draperstown.jpg')}/></div>; break;
                          case "Greysteel":  teamLogoRend = <div><img height={22} src={require('../images/teamLogos/greysteel.jpg')}/></div>; break;
                          case "Ballykelly United": teamLogoRend = <div><img height={22} src={require('../images/teamLogos/bbob.jpg')}/></div>; break;
                        }
                        return teamLogoRend;
                    
                    }
                    // accessor: d => d.customerFullName,
                    },
                  {
                    Header: 'Team ',
                    accessor: 'teamName',
                    className:"testTeam",
                    id: "teamName",
                    accessor: d => d.teamName,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, { keys: ["teamName"] }),
                    filterAll: true,
                    width:this.state.teamNameWidth, 
                },
                {
                  Header: 'MP',
                  accessor: 'matchesPlayed',
                  id: "matchesPlayed",
                  accessor: d => d.matchesPlayed,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["matchesPlayed"] }),
                  filterAll: true,
                  width:this.state.numberColWidth, 
              },
              {
                Header: 'W',
                accessor: 'wins',
                id: "wins",
                accessor: d => d.wins,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["wins"] }),
                filterAll: true,
                width:this.state.numberColWidth,    
              },
              {
                Header: 'D',
                accessor: 'draws',
                id: "draws",
                accessor: d => d.draws,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["draws"] }),
                filterAll: true,
                width:this.state.numberColWidth,    
              },
              {
                Header: 'L',
                accessor: 'lost',
                id: "lost",
                accessor: d => d.lost,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["lost"] }),
                filterAll: true,
                width:this.state.numberColWidth,      
              },
              {
                Header: 'GF',
                accessor: 'goalsFor',
                id: "goalsFor",
                accessor: d => d.goalsFor,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["goalsFor"] }),
                filterAll: true,
                width:this.state.numberColWidth,     
              },
              {
                Header: 'GA',
                accessor: 'goalsAgainst',
                id: "goalsAgainst",
                accessor: d => d.goalsAgainst,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["goalsAgainst"] }),
                filterAll: true,
                width:this.state.numberColWidth,     
              },
              {
                Header: 'Pts',
                accessor: 'points',
                id: "points",
                accessor: d => d.points,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["points"] }),
                filterAll: true,
                width:this.state.numberColWidth,       
              },
                  ]

                  const Fixturecolumns = [
                                              {
                                                Header: 'HomeTeam',
                                                accessor: 'homeTeam',
                                                className:"homeTeam",
                                                id: "homeTeam",
                                                accessor: d => d.homeTeam,
                                                filterMethod: (filter, rows) =>
                                                  matchSorter(rows, filter.value, { keys: ["homeTeam"] }),
                                                filterAll: true,
                                                width:this.state.teamNameWidth, 
                                              },
                                              {
                                              Header: 'Versus',
                                              accessor: 'versus',
                                              id: "versus",
                                              Cell: row => (<p>V</p>),
                                              width:65
                                              },
                                              {
                                              Header: 'Away Team',
                                              accessor: 'awayTeam',
                                              id: "awayTeam",
                                              accessor: d => d.awayTeam,
                                              filterMethod: (filter, rows) =>
                                              matchSorter(rows, filter.value, { keys: ["awayTeam"] }),
                                              filterAll: true,
                                              width:this.state.teamNameWidth,    
                                              },
                                              {
                                                Header: 'Date',
                                                accessor: 'fixtureDate',
                                                id: "fixtureDate",
                                                accessor: d => d.fixtureDate,
                                                filterMethod: (filter, rows) =>
                                                matchSorter(rows, filter.value, { keys: ["fixtureDate"] }),
                                                filterAll: true,
                                                width:107,    
                                                }
                  ]                                        

                  const Resultscolumns = [
                        {
                          Header: 'HomeTeam',
                          accessor: 'homeName',
                          className:"homeName",
                          id: "homeName",
                          accessor: d => d.homeName,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, { keys: ["homeName"] }),
                          filterAll: true,
                          width:this.state.teamNameWidth, 
                        },
                        {
                          Header: 'G',
                          accessor: 'homeTeamGoals',
                          className:"homeTeamGoals",
                          id: "homeTeamGoals",
                          accessor: d => d.homeTeamGoals,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, { keys: ["homeTeamGoals"] }),
                          filterAll: true,
                          width:33, 
                        },
                        {
                          Header: 'G',
                          accessor: 'awayTeamGoals',
                          className:"awayTeamGoals",
                          id: "awayTeamGoals",
                          accessor: d => d.awayTeamGoals,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, { keys: ["awayTeamGoals"] }),
                          filterAll: true,
                          width:33, 
                        },
                        {
                        Header: 'Away Team',
                        accessor: 'awayTeam',
                        id: "awayTeam",
                        accessor: d => d.awayTeam,
                        filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["awayTeam"] }),
                        filterAll: true,
                        width:this.state.teamNameWidth,    
                        },
                        {
                          Header: 'Date',
                          accessor: 'fixtureDate',
                          id: "fixtureDate",
                          accessor: d => d.fixtureDate,
                          filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, { keys: ["fixtureDate"] }),
                          filterAll: true,
                          width:107,    
                          }
                  ]

 console.log("Length is: " + this.state.fixtures.length);
    return (
      <div className="homeContainer">
        <header>
          <MDBContainer fluid className="boxshadow" >

         
          <div class="card flex-row flex-wrap" >
            <div class="card-header border-0 mainCardImgSide">
                <img className="overlay rounded z-depth-1 mainPageCardImg" src={require('../images/foyle_wanderers_final.jpg')}/>
            </div>

            <MDBCol class="mainCardInfoSide">
              <div class="mainCardInfoSide">
                  <p class="mainCardTitle">Foyle Wanderers Winners 2019/2020 </p>
                  <p  id="wordwrap">Foyle Wanderes picked up their first ever league title in the north west Junior in 2019/2020. 
                  With the new campaign half way through it looks like BBOB are the team to catch</p>
              </div>
            </MDBCol>

            <div class="w-100"></div>
            <div class="card-footer w-100 text-muted"> Updated 11/02/2020</div>
          </div>
            <MDBRow className="view sticky-navbar-shadow">
            <MDBCol lg="5" md="12">
            <ReactTableFixedColumns className="leagueTable mb-5 mt-5" data={teams} data={teams} columns={columns} showPagination={false} defaultPageSize={10}/>
              <ReactTableFixedColumns className="fixture_result_table mb-3" data={results} data={results} columns={Resultscolumns} showPagination={false} pageSize={results.length}/> 
              <ReactTableFixedColumns className="fixture_result_table " data={fixtures} data={fixtures} columns={Fixturecolumns} showPagination={false} pageSize={fixtures.length}/>  
          
           
            </MDBCol>
            <MDBCol lg="7" md="12" className="mb-4 mt-5">
            <ol >
              {this.state.blogposts.map(post => {
                return (
                  <div key={post.id}>
                  <li className="noStyle">
                  <div class="card flex-row flex-wrap mb-3 blogCard" >
                    <div class="card-header border-0 mainCardImgSide ">
                        <img className="overlay rounded z-depth-1 blogCardImg " src={require('../images/lisahallywin.jpg')}/>
                    </div>

                    <MDBCol class="mainCardInfoSide">
                      <div class="mainCardInfoSide">
                          <p className="cardTitle">Foyle Wanderers Winners 2019/2020 </p>
                          <p  id="wordwrap">View Lisahally V Ardmore Match report. </p>
                          <MDBNavLink href="#" to={`/${post.id}`}>{post.title}Click to view</MDBNavLink>
                      </div>
                    </MDBCol>

                    <div class="w-100"></div>
                    <div class="card-footer w-100 text-muted"> Updated 11/02/2020</div>
                  </div>

                    {/* <MDBNavLink to={`/${post.id}`}>{post.title}</MDBNavLink><br/> */}
                  </li>
                  </div>
                );
              })}
            </ol>
          </MDBCol>

            </MDBRow>


            <MDBRow className="view text-center">
                  <MDBCol lg="6" md="12" className="full-img">
                      <img id="Gas" src={require( '../images/lefair_pitches.jpg')} height="400px" width="100%" />
                      <div className="mask text-centered ">
                          <p className="h2-responsive white-text text-uppercase mt-5 pt-5">Council Pitches</p>
                          <p className="white-text text-uppercase">Check out the Council Pitches</p>
                          <MDBBtn disabled color="light-blue" className="float-center" size="md">Find Out More</MDBBtn>
                      </div>
                  </MDBCol>
                  <MDBCol lg="6" md="12" className="full-img">
                      <img id="SmartMeter" src={require( '../images/dalys_bar.jpg')} height="400px" width="100%" />
                      <div className="mask text-centered ">
                          <p className="h2-responsive white-text text-uppercase mt-5 pt-5">Sponsers</p>
                          <p className="white-text text-uppercase">Check out our league and team sponsers promoting local business</p>
                          <MDBBtn disabled color="light-blue" className="float-center" size="md">Find Out More</MDBBtn>
                      </div>
                  </MDBCol>
              </MDBRow>

          </MDBContainer>
        </header>
      </div>
    );
  }
}


export default ForHome;
