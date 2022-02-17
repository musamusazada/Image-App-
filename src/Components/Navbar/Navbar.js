import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.header`
  text-align: center;
  background: #ffcdb2;
  color: #fff;
  padding: 10px 0;
  font-size: 2rem;
  font-style: italic;
`;
export default function Navbar({ children }) {
  return <StyledNavbar>{children}</StyledNavbar>;
}
