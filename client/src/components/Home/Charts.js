import React, { PureComponent } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
      cases5: [],
    };
  }

  componentDidMount() {
    for (let i = 1; i < 6; i++) {
      this.getCaseData(i);
    }
  }

  // case data fetch function from server
  getCaseData = (index) => {
    (async () => {
      try {
        const res = await axios.get(`/api/cases/${index}`);
        this.setState({ [`cases${index}`]: res.data });
      } catch (err) {
        console.log("Case data load failed: " + err);
      }
    })();
  };

  // get the total number of confirmed cases in the US
  getUSTotalCases = (cases) => {
    let filtered = cases.filter((elem) => elem.Country_Region === "US");
    let sum = 0;
    filtered.forEach((elem) => (sum = sum + elem.Confirmed));
    return sum;
  };

  // get the total number of confirmed cases in the US by state
  casesByState = (caseNum, s) => {
    s = s.charAt(0).toUpperCase() + s.slice(1);
    let filtered = caseNum.filter((elem) => elem.Province_State === s);
    let sum = 0;
    filtered.forEach((elem) => (sum = sum + elem.Confirmed));
    return sum;
  };

  render() {
    const { cases1, cases2, cases3, cases4, cases5 } = this.state;

    let us_data = [],
      il_data = [];
    if (
      cases1.length > 0 &&
      cases2.length > 0 &&
      cases3.length > 0 &&
      cases4.length > 0 &&
      cases5.length > 0
    ) {
      us_data = [
        {
          name: cases1[0].Last_Update.substring(0, 11),
          confirmed: this.getUSTotalCases(cases1),
        },
        {
          name: cases2[0].Last_Update.substring(0, 11),
          confirmed: this.getUSTotalCases(cases2),
        },
        {
          name: cases3[0].Last_Update.substring(0, 11),
          confirmed: this.getUSTotalCases(cases3),
        },
        {
          name: cases4[0].Last_Update.substring(0, 11),
          confirmed: this.getUSTotalCases(cases4),
        },
        {
          name: cases5[0].Last_Update.substring(0, 11),
          confirmed: this.getUSTotalCases(cases5),
        },
      ];

      il_data = [
        {
          name: cases1[0].Last_Update.substring(0, 11),
          confirmed: this.casesByState(cases1, "illinois"),
        },
        {
          name: cases2[0].Last_Update.substring(0, 11),
          confirmed: this.casesByState(cases2, "illinois"),
        },
        {
          name: cases3[0].Last_Update.substring(0, 11),
          confirmed: this.casesByState(cases3, "illinois"),
        },
        {
          name: cases4[0].Last_Update.substring(0, 11),
          confirmed: this.casesByState(cases4, "illinois"),
        },
        {
          name: cases5[0].Last_Update.substring(0, 11),
          confirmed: this.casesByState(cases5, "illinois"),
        },
      ];
    }
    return (
      <div
        className="row"
        style={{ marginTop: "3.5rem", marginBottom: "12.0rem" }}
      >
        {/* US cases chart */}

        <div className="col-sm">
          <h4
            style={{
              textAlign: "center",
              textTransform: "capitalize",
              marginBottom: "-30px",
            }}
          >
            US total confirmed cases
          </h4>
          <div
            style={{
              margin: "auto",
              marginTop: "3.5rem",

              width: "50%",
              padding: "10px",
            }}
          >
            <LineChart
              width={500}
              height={300}
              data={us_data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
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
                stroke="green"
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </div>
        </div>

        {/* Illinois cases chart */}

        <div className="col-sm">
          <h4
            style={{
              textAlign: "center",
              textTransform: "capitalize",
              marginBottom: "-30px",
            }}
          >
            illinois total confirmed cases
          </h4>
          <div
            style={{
              margin: "auto",
              marginTop: "3.5rem",
              width: "50%",
              padding: "10px",
            }}
          >
            <LineChart
              width={500}
              height={300}
              data={il_data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
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
                stroke="blue"
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </div>
        </div>
      </div>
    );
  }
}
