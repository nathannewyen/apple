import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const StyleNavbarContainer = styled.nav`
  background-color: #333333;
  width: 100%;
  color: #d6d6d6;
  position: fixed;
  text-align: center;
  top: 0;
`;

const AppleLogo = styled.div`
  font-size: 20px;
  display: inline-block;
  &:hover {
    color: white;
    transition-timing-function: ease-in-out;
    transition: 0.3s;
  }
`;

const StyleLinkList = styled.ul`
  display: inline-block;
`;

const StyledLink = styled(Link)`
  padding: 12px 35px;
  color: #d6d6d6;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    color: white;
    transition-timing-function: ease-in-out;
    transition: 0.3s;
  }
`;

const NavbarSystemLogo = {
  fontSize: "18px",
};

const Navbar = (props) => {
  return (
    <>
      <StyleNavbarContainer>
        <AppleLogo>
          <i class="fab fa-apple"></i>
        </AppleLogo>
        <StyleLinkList>
          <StyledLink to="/">Mac</StyledLink>
          <StyledLink to="/">iPad</StyledLink>
          <StyledLink to="/">iPhone</StyledLink>
          <StyledLink to="/">Watch</StyledLink>
          <StyledLink to="/">TV</StyledLink>
          <StyledLink to="/">Music</StyledLink>
          <StyledLink to="/">Support</StyledLink>
          <StyledLink to="/">
            <i class="fal fa-search" style={NavbarSystemLogo}></i>
          </StyledLink>
          <StyledLink to="/">
            <i class="fal fa-shopping-bag" style={NavbarSystemLogo}></i>
          </StyledLink>
        </StyleLinkList>
      </StyleNavbarContainer>
    </>
  );
};

export default Navbar;
