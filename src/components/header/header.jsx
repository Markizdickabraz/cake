import React from 'react'
import { NavLink } from "react-router-dom";
import { HeaderContainer, Nav, Link } from './headerStyle';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">
        <NavLink to='/'>
          <img style={{ width: 30, height: 30 }} src={require('../../img/logo.png')} alt="logo" />
        </NavLink>
      </div>
      <Nav>
        <Link to='/about'>Про нас
        </Link>
        <Link to='/products'>Продукція
        </Link>
        <Link to='/contacts'>Контакти
        </Link>
        <Link to='/business'>Співпраця
        </Link>
      </Nav>
    </HeaderContainer>
  )
}

export default Header;
