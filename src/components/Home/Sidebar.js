import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sidebar = props => {
  return (
    <SidebarWrapper {...props}>
      {console.log(props.sidebarOpen)}
      <div className="sidenav">
        <Link
          to="/board"
          className="links"
          style={{ textDecoration: "None", color: "black" }}
        >
          Board
        </Link>
        <Link
          to="/data"
          className="links"
          style={{ textDecoration: "None", color: "black" }}
        >
          Data
        </Link>
        <Link
          to="/map"
          className="links"
          style={{ textDecoration: "None", color: "black" }}
        >
          Map
        </Link>
        <Link
          to="/news"
          className="links"
          style={{ textDecoration: "None", color: "black" }}
        >
          News
        </Link>
      </div>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.nav`
  margin: 0;
  font-size: 1.7rem;

  .sidenav {
    height: 100%;
    width: 130px;
    position: fixed;
    z-index: 1;
    top: 20;
    left: 0;
    background-color: rgb(242, 241, 241);
    overflow-x: hidden;
    padding-top: 20px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
  }
  .links {
    padding-bottom: 20px;
  }

  transform: ${props =>
    props.sidebarOpen ? "None" : "translateX(-1000%)"} !important;
`;
export default Sidebar;
