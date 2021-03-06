import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 1.4rem;
  background: ${props => (props.primary ? "#7CBAF7" : "white")};
  color: ${props => (props.primary ? "white" : "#7CBAF7")};
  border: 0.05rem solid #688ff1;
  border-radius: 0.8rem;
  cursor: pointer;
  padding: 4px;
  margin: 5px 5px 13px 5px;
  transitions: 3s;
  &:hover {
    background: lightgrey;
  }
`;
