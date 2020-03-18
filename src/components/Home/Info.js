import React, { Component } from "react";
import styled from "styled-components";

export class Info extends Component {
  render() {
    return (
      <InfoWrapper>
        <h1 className="title">What are the symptoms?</h1>
        <p>
          Reported illnesses have ranged from mild symptoms to severe illness
          and death for confirmed coronavirus disease 2019 (COVID-19) cases.
        </p>
        <p>
          The following symptoms may appear
          <strong> 2-14 days after exposure.*</strong>
        </p>
        <ul>
          <li>Fever</li>
          <li>Cough</li>
          <li>Shortness of breath</li>
        </ul>
        <p>
          Those with weakened immune systems may develop more serious symptoms,
          like pneumonia or bronchitis. You may never develop symptoms after
          being exposed to COVID-19.
        </p>
      </InfoWrapper>
    );
  }
}
const InfoWrapper = styled.section`
  font-size: 20px;

  .title {
    text-align: center;
    font-size: 40px;
  }
`;
export default Info;
