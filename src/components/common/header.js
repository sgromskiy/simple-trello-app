import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import logo from './logo.png';

function WithLiNavLink({to, activeOnlyWhenExact, children }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  })

  return (
    <li className={ match ? 'active' : ''}>
      <Link to={to}>
        {children}
      </Link>
    </li>
  )
} 

function Header() {
  return (
    <header id="header">
      <div className="logo" alt="Trello">
        <img src={logo} alt="My trello" />
      </div>
      <ul>
        <WithLiNavLink to="/" activeOnlyWhenExact={true}>Dashboard</WithLiNavLink>
        <WithLiNavLink to="/settings">Settings</WithLiNavLink>
      </ul>
    </header>
  );
}

export default React.memo(Header);