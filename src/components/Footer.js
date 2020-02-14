import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import { LoadPageContent } from '../components/JSfunctions/Utils.js';

class FooterTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    var page = 'footer';
    LoadPageContent(page);
  }

  render() {
    return (
      <div className="footer-position">
      <MDBFooter color="footerColor darken-5" className="font-small pt-4 mt-0 footer-position">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol size="12" className="text-center">
              <h5 className="title text-uppercase">Follow us on social media</h5>
              <p>
                <a className="Footer-Link-Facebook" href="https://www.facebook.com/BudgetEnergyNI/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-3x pr-3" /></a>
                <a className="Footer-Link-Twitter" href="https://twitter.com/BudgetEnergy" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square fa-3x pr-3" /></a>
                <a className="Footer-Link-LinkedIn" href="https://www.linkedin.com/company/budget-energy/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x pr-3" /></a>
              </p>
              <p className="h3-responsive text-uppercase font-weight-bold orange-text">
                <a className="Footer-Link-Twitter" href="https://twitter.com/BudgetEnergy" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-hashtag fa-lg orange-text align-middle pr-1" />
                  <strong className="orange-text">GetSwitchedOn</strong>
                </a>
              </p>
            </MDBCol>
          </MDBRow>

        {/*Footer Links*/}
        <MDBRow>
          <MDBCol size="12" className="text-center text-uppercase">
            <ul id="footer">
              <li id="footer">
                <a href="/about">About Us</a>
              </li>
              <li className="orange-text font-weight-bold">|</li>
              <li id="footer">
                <a href="http://budgetenergyreact/about/terms&conditions">Terms & Conditions</a>
              </li>
              <li className="orange-text font-weight-bold">|</li>
              <li id="footer">
                <a href="/help">Tariff FAQ's</a>
              </li>
              <li className="orange-text font-weight-bold">|</li>
              <li id="footer">
                <a href="/about/codesofpractice">Codes of Practice</a>
              </li>
              <li className="orange-text font-weight-bold">|</li>
              <li id="footer">
                <a href="/help/techQuery?techQuery=EnergyTheft">Energy Theft</a>
              </li>
              <li className="orange-text font-weight-bold">|</li>
              <li id="footer">
                <a href="/about/GDPR">Privacy Center</a>
              </li>
              <li className="orange-text font-weight-bold">|</li>
              <li id="footer">
                <a href="/home/RepsLogin">Reps Login</a>
              </li>
              <li className="orange-text font-weight-bold">|</li>
              <li id="footer">
                <a href="/help/tarifftable">Tariff Table</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
      </MDBFooter>
      </div>
    );
  }
}

export default FooterTest;
