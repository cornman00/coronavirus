import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Healthlogo } from "../../healthcare.svg";
import styled from "styled-components";
import { ButtonContainer } from "../../Button";
import Hamburger from "./Hamburger";

export class Navbar extends Component {
  render() {
    return (
      <span>
        <Hamburger />
        <NavWrapper className="navbar navbar-expand-sm ">
          <Link
            to="/"
            className="navbar-brand"
            style={{ color: "black", textDecoration: "None" }}
          >
            <Healthlogo width="40px" height="35px" />
            CoronaTrace
          </Link>

          <span>
            <Link to="/login">
              <ButtonContainer>Log In</ButtonContainer>
            </Link>

            <Link to="/signup">
              <ButtonContainer primary>Sign Up</ButtonContainer>
            </Link>
          </span>
        </NavWrapper>
      </span>
    );
  }
}

const NavWrapper = styled.nav`
  background: rgb(242, 241, 241);

  font-size: 2.5rem;
  display: flex;
  justify-content: space-between;
`;
export default Navbar;
