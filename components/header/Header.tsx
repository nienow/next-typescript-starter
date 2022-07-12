import styled from 'styled-components';
import React from "react";
import HeaderTitle from "./HeaderTitle";
import Link from "../link/Link";

const HeaderContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  margin-bottom: 50px;
`
const Header = () => {
  return <HeaderContainer>
    <HeaderTitle>My Starter Application</HeaderTitle>
    <Link url="/about">About</Link>
  </HeaderContainer>
}

export default Header
