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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default class Example extends PureComponent {
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

  getUSTotalCases = () => {
    function isUS(val) {
      return val.Country_Region === "US";
    }
    let filtered = this.state.cases.filter(isUS);
    let sum = 0;
    filtered.forEach(elem => (sum = sum + elem.Confirmed));
    return sum;
  };

  casesByState = s => {
    s = s.charAt(0).toUpperCase() + s.slice(1);
    let filtered = this.state.cases.filter(elem => elem.Province_State === s);
    let sum = 0;
    filtered.forEach(elem => (sum = sum + elem.Confirmed));
    return sum;
  };

  render() {
    const { cases } = this.state;
    console.log(cases);
    console.log(cases[1]);
    console.log(this.casesByState("illinois"));

    return (
      <div>
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
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    );
  }
}
