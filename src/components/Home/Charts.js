import React, { PureComponent } from "react";
import styled from "styled-components";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class Example extends PureComponent {
  constructor() {
    super();
    // cases in date order from 1 to 5. Cases5 is the latest.
    this.state = {
      cases1: [],
      cases2: [],
      cases3: [],
      cases4: [],
      cases5: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/cases1")
      .then(res => res.json())
      .then(cases1 => this.setState({ cases1 }));

    fetch("http://localhost:5000/cases2")
      .then(res => res.json())
      .then(cases2 => this.setState({ cases2 }));

    fetch("http://localhost:5000/cases3")
      .then(res => res.json())
      .then(cases3 => this.setState({ cases3 }));

    fetch("http://localhost:5000/cases4")
      .then(res => res.json())
      .then(cases4 => this.setState({ cases4 }));

    fetch("http://localhost:5000/cases5")
      .then(res => res.json())
      .then(cases5 => this.setState({ cases5 }));
  }

  // get the total number of confirmed cases in the US
  getUSTotalCases = cases => {
    function isUS(val) {
      return val.Country_Region === "US";
    }
    let filtered = cases.filter(isUS);
    let sum = 0;
    filtered.forEach(elem => (sum = sum + elem.Confirmed));
    return sum;
  };

  // get the total number of cases in the US by state
  casesByState = s => {
    s = s.charAt(0).toUpperCase() + s.slice(1);
    let filtered = this.state.cases.filter(elem => elem.Province_State === s);
    let sum = 0;
    filtered.forEach(elem => (sum = sum + elem.Confirmed));
    return sum;
  };

  render() {
    const { cases1, cases2, cases3, cases4, cases5 } = this.state;

    let data = [];
    if (
      cases1.length > 0 &&
      cases2.length > 0 &&
      cases3.length > 0 &&
      cases4.length > 0 &&
      cases5.length > 0
    ) {
      data = [
        {
          name: cases1[0].Last_Update.substring(0, 11),
          confirmed: this.getUSTotalCases(cases1)
        },
        {
          name: cases2[0].Last_Update.substring(0, 11),
          confirmed: this.getUSTotalCases(cases2)
        },
        {
          name: cases3[0].Last_Update.substring(0, 11),
          confirmed: this.getUSTotalCases(cases3)
        },
        {
          name: cases4[0].Last_Update.substring(0, 11),
          confirmed: this.getUSTotalCases(cases4)
        },
        {
          name: cases5[0].Last_Update.substring(0, 11),
          confirmed: this.getUSTotalCases(cases5)
        }
      ];
    }
    return (
      <div
        style={{
          margin: "auto",
          marginTop: "3.5rem",
          width: "50%",
          padding: "10px"
        }}
      >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="confirmed"
            stroke="#8884d8"
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </div>
    );
  }
}
