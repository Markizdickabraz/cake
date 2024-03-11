import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div` 
  padding: 15px 15px 10px 15px;
  display: flex;
  align-items: center;
`

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin: 0 auto;
`

export const Link = styled(NavLink)` 
color: #F9A0A0;
font-size:10px;
@media screen and (min-width:768px) {
font-size:14px;
}

&:hover {
  color: #943030;
}
&:active {
  color: #943030;
}
`