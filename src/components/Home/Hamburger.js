import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";

// Hamburger shape menu component at the top-left of the website

const Hamburger = props => {
  return (
    <HamburgerWrapper {...props}>
      <div id="first" />
      <div id="second" />
      <div id="third" />
      <Sidebar sidebarOpen={props.sidebarOpen} />
    </HamburgerWrapper>
  );
};

const HamburgerWrapper = styled.div`
  position: relative;
  left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0
  z-index: 10;

  &:focus {
    outline: none;
  }
 
  div  {
    width: 2rem;
    height: 0.25rem;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

   
  }

  #first {
       
      transform: ${props =>
        props.sidebarOpen ? "rotate(37.5deg)" : "rotate(0)"}
     
    }
      
    #second {
    
         opacity: ${props => (props.sidebarOpen ? "0" : "1")};
      transform: ${props =>
        props.sidebarOpen ? "translateX(20px)" : "translateX(0)"};
      
     
    }

   #third {
      transform: ${props =>
        props.sidebarOpen ? "rotate(-37.5deg)" : "rotate(0)"};
    }
`;

export default Hamburger;
