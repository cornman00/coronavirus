import React, { Component } from "react";
import styled from "styled-components";
import Info from "./Info";

import Charts from "./Charts";
import Table from "./Table";

export class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <Info />
        <Charts />

        <Table />
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
