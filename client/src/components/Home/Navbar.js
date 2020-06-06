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
      <NavWrapper className="navbar navbar-expand-sm">
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
                  style={{ color: "#3E3B3B", textDecoration: "None" }}
                >
                  <span>
                    <Healthlogo width="50px" height="40px" />
                  </span>
                  CoronaTrace
                </Link>

                <span className="d-none d-sm-block">
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
  height: 3.5rem;

  font-size: 2.5rem;
  display: flex;
  justify-content: space-between;
`;
export default Navbar;
