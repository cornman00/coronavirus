import React, { Component } from "react";
import styled from "styled-components";
import { ContextConsumer } from "../../context";
import Info from "./Info";
import Map from "./Map";

export class Main extends Component {
  render() {
    return (
      <MainWrapper className="col-9 mx-auto col-md-6 col-lg-3">
        <Info />
        <Map />
      </MainWrapper>
    );
  }
}

const MainWrapper = styled.div`
  margin: 3rem 10rem 2rem 10rem;
  padding-left: 50px;
  padding-right: 50px;
  border: none;
`;
export default Main;
