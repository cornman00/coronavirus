import React, { Component } from "react";
import "../../App.css";

export class Table extends Component {
  constructor() {
    super();
    this.state = {
      cases: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/cases5")
      .then(res => res.json())
      .then(cases => this.setState({ cases }));
  }

  // get the total number of cases in the US by the type
  getUSTotalCases = caseType => {
    function isUS(val) {
      return val.Country_Region === "US";
    }
    let filtered = this.state.cases.filter(isUS);
    let sum = 0;

    if (caseType === "Confirmed") {
      filtered.forEach(elem => (sum = sum + elem.Confirmed));
    } else if (caseType === "Deaths") {
      filtered.forEach(elem => (sum = sum + elem.Deaths));
    } else if (caseType === "Recovered") {
      filtered.forEach(elem => (sum = sum + elem.Recovered));
    }
    return sum;
  };

  // get the total number of cases in the US by location
  casesByState = (s, caseType) => {
    s = s.charAt(0).toUpperCase() + s.slice(1);
    let filtered = this.state.cases.filter(elem => elem.Province_State === s);
    let sum = 0;

    if (caseType === "Confirmed") {
      filtered.forEach(elem => (sum = sum + elem.Confirmed));
    } else if (caseType === "Deaths") {
      filtered.forEach(elem => (sum = sum + elem.Deaths));
    } else if (caseType === "Recovered") {
      filtered.forEach(elem => (sum = sum + elem.Recovered));
    }
    return sum;
  };

  render() {
    return (
      <div style={{ marginTop: "3.5rem" }}>
        <table className="tablecls">
          <thead>
            <tr>
              <th scope="col">Location</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Deaths</th>
              <th scope="col">Recovered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total</td>
              <td>{this.getUSTotalCases("Confirmed")}</td>
              <td>{this.getUSTotalCases("Deaths")}</td>
              <td>{this.getUSTotalCases("Recovered")}</td>
            </tr>
            <tr>
              <td>Alabama</td>
              <td>{this.casesByState("Alabama", "Confirmed")}</td>
              <td>{this.casesByState("Alabama", "Deaths")}</td>
              <td>{this.casesByState("Alabama", "Recovered")}</td>
            </tr>
            <tr>
              <td>Alaska</td>
              <td>{this.casesByState("Alaskas", "Confirmed")}</td>
              <td>{this.casesByState("iAlaska", "Deaths")}</td>
              <td>{this.casesByState("Alaskas", "Recovered")}</td>
            </tr>
            <tr>
              <td>Arizona</td>
              <td>{this.casesByState("Arizona", "Confirmed")}</td>
              <td>{this.casesByState("Arizona", "Deaths")}</td>
              <td>{this.casesByState("Arizona", "Recovered")}</td>
            </tr>
            <tr>
              <td>Arkansas</td>
              <td>{this.casesByState("Arkansas", "Confirmed")}</td>
              <td>{this.casesByState("Arkansas", "Deaths")}</td>
              <td>{this.casesByState("iArkansas", "Recovered")}</td>
            </tr>
            <tr>
              <td>California</td>
              <td>{this.casesByState("California", "Confirmed")}</td>
              <td>{this.casesByState("California", "Deaths")}</td>
              <td>{this.casesByState("California", "Recovered")}</td>
            </tr>
            <tr>
              <td>Colorado</td>
              <td>{this.casesByState("Colorado", "Confirmed")}</td>
              <td>{this.casesByState("Colorado", "Deaths")}</td>
              <td>{this.casesByState("Colorado", "Recovered")}</td>
            </tr>
            <tr>
              <td>Connecticut</td>
              <td>{this.casesByState("Connecticut", "Confirmed")}</td>
              <td>{this.casesByState("Connecticut", "Deaths")}</td>
              <td>{this.casesByState("Connecticut", "Recovered")}</td>
            </tr>
            <tr>
              <td>Delaware</td>
              <td>{this.casesByState("Delaware", "Confirmed")}</td>
              <td>{this.casesByState("Delaware", "Deaths")}</td>
              <td>{this.casesByState("Delaware", "Recovered")}</td>
            </tr>
            <tr>
              <td>Florida</td>
              <td>{this.casesByState("Florida", "Confirmed")}</td>
              <td>{this.casesByState("Florida", "Deaths")}</td>
              <td>{this.casesByState("Florida", "Recovered")}</td>
            </tr>
            <tr>
              <td>Georgia</td>
              <td>{this.casesByState("Georgia", "Confirmed")}</td>
              <td>{this.casesByState("Georgia", "Deaths")}</td>
              <td>{this.casesByState("Georgia", "Recovered")}</td>
            </tr>
            <tr>
              <td>Hawaii</td>
              <td>{this.casesByState("Hawaii", "Confirmed")}</td>
              <td>{this.casesByState("Hawaii", "Deaths")}</td>
              <td>{this.casesByState("Hawaii", "Recovered")}</td>
            </tr>
            <tr>
              <td>Idaho</td>
              <td>{this.casesByState("Idaho", "Confirmed")}</td>
              <td>{this.casesByState("Idaho", "Deaths")}</td>
              <td>{this.casesByState("Idaho", "Recovered")}</td>
            </tr>
            <tr>
              <td>Illinois</td>
              <td>{this.casesByState("illinois", "Confirmed")}</td>
              <td>{this.casesByState("illinois", "Deaths")}</td>
              <td>{this.casesByState("illinois", "Recovered")}</td>
            </tr>
            <tr>
              <td>Indiana</td>
              <td>{this.casesByState("Indiana", "Confirmed")}</td>
              <td>{this.casesByState("Indiana", "Deaths")}</td>
              <td>{this.casesByState("Indiana", "Recovered")}</td>
            </tr>
            <tr>
              <td>Iowa</td>
              <td>{this.casesByState("Iowa", "Confirmed")}</td>
              <td>{this.casesByState("Iowa", "Deaths")}</td>
              <td>{this.casesByState("Iowa", "Recovered")}</td>
            </tr>
            <tr>
              <td>Kansas</td>
              <td>{this.casesByState("Kansas", "Confirmed")}</td>
              <td>{this.casesByState("Kansas", "Deaths")}</td>
              <td>{this.casesByState("Kansas", "Recovered")}</td>
            </tr>
            <tr>
              <td>Kentucky</td>
              <td>{this.casesByState("Kentucky", "Confirmed")}</td>
              <td>{this.casesByState("Kentucky", "Deaths")}</td>
              <td>{this.casesByState("Kentucky", "Recovered")}</td>
            </tr>
            <tr>
              <td>Louisiana</td>
              <td>{this.casesByState("Louisiana", "Confirmed")}</td>
              <td>{this.casesByState("Louisiana", "Deaths")}</td>
              <td>{this.casesByState("Louisiana", "Recovered")}</td>
            </tr>
            <tr>
              <td>Maine</td>
              <td>{this.casesByState("Maines", "Confirmed")}</td>
              <td>{this.casesByState("Maine", "Deaths")}</td>
              <td>{this.casesByState("Maine", "Recovered")}</td>
            </tr>
            <tr>
              <td>Maryland</td>
              <td>{this.casesByState("Maryland", "Confirmed")}</td>
              <td>{this.casesByState("Maryland", "Deaths")}</td>
              <td>{this.casesByState("Maryland", "Recovered")}</td>
            </tr>

            <tr>
              <td>Michigan</td>
              <td>{this.casesByState("Michigan", "Confirmed")}</td>
              <td>{this.casesByState("Michigan", "Deaths")}</td>
              <td>{this.casesByState("Michigan", "Recovered")}</td>
            </tr>
            <tr>
              <td>Minnesota</td>
              <td>{this.casesByState("Minnesota", "Confirmed")}</td>
              <td>{this.casesByState("Minnesota", "Deaths")}</td>
              <td>{this.casesByState("Minnesota", "Recovered")}</td>
            </tr>
            <tr>
              <td>Mississippi</td>
              <td>{this.casesByState("Mississippi", "Confirmed")}</td>
              <td>{this.casesByState("Mississippi", "Deaths")}</td>
              <td>{this.casesByState("Mississippi", "Recovered")}</td>
            </tr>
            <tr>
              <td>Missouri</td>
              <td>{this.casesByState("Missouri", "Confirmed")}</td>
              <td>{this.casesByState("Missouri", "Deaths")}</td>
              <td>{this.casesByState("Missouri", "Recovered")}</td>
            </tr>
            <tr>
              <td>Montana</td>
              <td>{this.casesByState("Montana", "Confirmed")}</td>
              <td>{this.casesByState("Montana", "Deaths")}</td>
              <td>{this.casesByState("Montana", "Recovered")}</td>
            </tr>
            <tr>
              <td>Nebraska</td>
              <td>{this.casesByState("Nebraska", "Confirmed")}</td>
              <td>{this.casesByState("Nebraska", "Deaths")}</td>
              <td>{this.casesByState("Nebraska", "Recovered")}</td>
            </tr>
            <tr>
              <td>Nevada</td>
              <td>{this.casesByState("Nevada", "Confirmed")}</td>
              <td>{this.casesByState("Nevada", "Deaths")}</td>
              <td>{this.casesByState("Nevada", "Recovered")}</td>
            </tr>
            <tr>
              <td>New Hampshire</td>
              <td>{this.casesByState("New Hampshire", "Confirmed")}</td>
              <td>{this.casesByState("New Hampshire", "Deaths")}</td>
              <td>{this.casesByState("New Hampshire", "Recovered")}</td>
            </tr>
            <tr>
              <td>New Jersey</td>
              <td>{this.casesByState("New Jersey", "Confirmed")}</td>
              <td>{this.casesByState("New Jersey", "Deaths")}</td>
              <td>{this.casesByState("New Jersey", "Recovered")}</td>
            </tr>
            <tr>
              <td>New Mexico</td>
              <td>{this.casesByState("New Mexico", "Confirmed")}</td>
              <td>{this.casesByState("New Mexico", "Deaths")}</td>
              <td>{this.casesByState("New Mexico", "Recovered")}</td>
            </tr>
            <tr>
              <td>New York</td>
              <td>{this.casesByState("New York", "Confirmed")}</td>
              <td>{this.casesByState("New York", "Deaths")}</td>
              <td>{this.casesByState("New York", "Recovered")}</td>
            </tr>
            <tr>
              <td>North Carolina</td>
              <td>{this.casesByState("North Carolina", "Confirmed")}</td>
              <td>{this.casesByState("North Carolina", "Deaths")}</td>
              <td>{this.casesByState("North Carolina", "Recovered")}</td>
            </tr>
            <tr>
              <td>North Dakota</td>
              <td>{this.casesByState("North Dakota", "Confirmed")}</td>
              <td>{this.casesByState("North Dakota", "Deaths")}</td>
              <td>{this.casesByState("North Dakota", "Recovered")}</td>
            </tr>
            <tr>
              <td>Ohio</td>
              <td>{this.casesByState("Ohio", "Confirmed")}</td>
              <td>{this.casesByState("Ohio", "Deaths")}</td>
              <td>{this.casesByState("Ohio", "Recovered")}</td>
            </tr>
            <tr>
              <td>Oklahoma</td>
              <td>{this.casesByState("Oklahoma", "Confirmed")}</td>
              <td>{this.casesByState("Oklahoma", "Deaths")}</td>
              <td>{this.casesByState("Oklahoma", "Recovered")}</td>
            </tr>
            <tr>
              <td>Pennsylvania</td>
              <td>{this.casesByState("Pennsylvania", "Confirmed")}</td>
              <td>{this.casesByState("Pennsylvania", "Deaths")}</td>
              <td>{this.casesByState("Pennsylvania", "Recovered")}</td>
            </tr>
            <tr>
              <td>Rhode Island</td>
              <td>{this.casesByState("Rhode Island", "Confirmed")}</td>
              <td>{this.casesByState("Rhode Island", "Deaths")}</td>
              <td>{this.casesByState("Rhode Island", "Recovered")}</td>
            </tr>
            <tr>
              <td>South Carolina</td>
              <td>{this.casesByState("South Carolina", "Confirmed")}</td>
              <td>{this.casesByState("South Carolina", "Deaths")}</td>
              <td>{this.casesByState("South Carolina", "Recovered")}</td>
            </tr>
            <tr>
              <td>South Dakota</td>
              <td>{this.casesByState("South Dakota", "Confirmed")}</td>
              <td>{this.casesByState("South Dakota", "Deaths")}</td>
              <td>{this.casesByState("South Dakota", "Recovered")}</td>
            </tr>
            <tr>
              <td>Tennessee</td>
              <td>{this.casesByState("Tennessee", "Confirmed")}</td>
              <td>{this.casesByState("Tennessee", "Deaths")}</td>
              <td>{this.casesByState("Tennessee", "Recovered")}</td>
            </tr>
            <tr>
              <td>Texas</td>
              <td>{this.casesByState("Texas", "Confirmed")}</td>
              <td>{this.casesByState("Texas", "Deaths")}</td>
              <td>{this.casesByState("Texas", "Recovered")}</td>
            </tr>
            <tr>
              <td>Utah</td>
              <td>{this.casesByState("Utah", "Confirmed")}</td>
              <td>{this.casesByState("Utah", "Deaths")}</td>
              <td>{this.casesByState("Utah", "Recovered")}</td>
            </tr>
            <tr>
              <td>Vermont</td>
              <td>{this.casesByState("Vermont", "Confirmed")}</td>
              <td>{this.casesByState("Vermont", "Deaths")}</td>
              <td>{this.casesByState("TVermont", "Recovered")}</td>
            </tr>
            <tr>
              <td>Virginia</td>
              <td>{this.casesByState("Virginia", "Confirmed")}</td>
              <td>{this.casesByState("Virginia", "Deaths")}</td>
              <td>{this.casesByState("Virginia", "Recovered")}</td>
            </tr>
            <tr>
              <td>Washington</td>
              <td>{this.casesByState("Washington", "Confirmed")}</td>
              <td>{this.casesByState("Washington", "Deaths")}</td>
              <td>{this.casesByState("Washington", "Recovered")}</td>
            </tr>
            <tr>
              <td>West Virginia</td>
              <td>{this.casesByState("West Virginia", "Confirmed")}</td>
              <td>{this.casesByState("West Virginia", "Deaths")}</td>
              <td>{this.casesByState("West Virginia", "Recovered")}</td>
            </tr>
            <tr>
              <td>Wisconsin</td>
              <td>{this.casesByState("Wisconsin", "Confirmed")}</td>
              <td>{this.casesByState("Wisconsin", "Deaths")}</td>
              <td>{this.casesByState("Wisconsin", "Recovered")}</td>
            </tr>
            <tr>
              <td>Wyoming</td>
              <td>{this.casesByState("Wyoming", "Confirmed")}</td>
              <td>{this.casesByState("Wyoming", "Deaths")}</td>
              <td>{this.casesByState("Wyoming", "Recovered")}</td>
            </tr>
            <tr>
              <td>Guam</td>
              <td>{this.casesByState("Guam", "Confirmed")}</td>
              <td>{this.casesByState("Guam", "Deaths")}</td>
              <td>{this.casesByState("Guam", "Recovered")}</td>
            </tr>
            <tr>
              <td>Virgin Islands</td>
              <td>{this.casesByState("Virgin Islands", "Confirmed")}</td>
              <td>{this.casesByState("Virgin Islands", "Deaths")}</td>
              <td>{this.casesByState("Virgin Islands", "Recovered")}</td>
            </tr>
            <tr>
              <td>American Samoa</td>
              <td>{this.casesByState("American Samoa", "Confirmed")}</td>
              <td>{this.casesByState("American Samoa", "Deaths")}</td>
              <td>{this.casesByState("American Samoa", "Recovered")}</td>
            </tr>
            <tr>
              <td>Northern Mariana Islands</td>
              <td>
                {this.casesByState("Northern Mariana Islands", "Confirmed")}
              </td>
              <td>{this.casesByState("Northern Mariana Islands", "Deaths")}</td>
              <td>
                {this.casesByState("Northern Mariana Islands", "Recovered")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;
