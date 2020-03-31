import React, { Component } from "react";

export class Table extends Component {
  constructor() {
    super();
    this.state = {
      cases: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/cases")
      .then(res => res.json())
      .then(cases => this.setState({ cases }));
  }

  casesByState = s => {
    s = s.charAt(0).toUpperCase() + s.slice(1);
    let filtered = this.state.cases.filter(elem => elem.Province_State === s);
    let sum = 0;
    filtered.forEach(elem => (sum = sum + elem.Confirmed));
    return sum;
  };

  render() {
    return (
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">State</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Deaths</th>
              <th scope="col">Recovered</th>
            </tr>
          </thead>
          <tr>
            <td>Illinois</td>
            <td>Illinois</td>
            <td>Illinois</td>
            <td>Illinois</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default Table;
