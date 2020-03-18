import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Healthlogo } from "../../healthcare.svg";
import styled from "styled-components";
import { ButtonContainer } from "../../Button";
import Hamburger from "./Hamburger";
import { ContextConsumer } from "../../context";

export class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm ">
        <ContextConsumer>
          {value => {
            const { sidebarOpen, openSidebar } = value;
            return (
              <React.Fragment>
                <Hamburger
                  onClick={() => openSidebar()}
                  sidebarOpen={sidebarOpen}
                />
                <Link
                  to="/"
                  className="navbar-brand"
                  style={{ color: "black", textDecoration: "None" }}
                >
                  <span style={{ paddingTop: "3rem" }}>
                    <Healthlogo width="40px" height="35px" />
                  </span>
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
              </React.Fragment>
            );
          }}
        </ContextConsumer>
      </NavWrapper>
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
