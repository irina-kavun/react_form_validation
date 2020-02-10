import React from 'react';
import {NavLink} from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
        <NavLink exact to='/' className="header-link" activeClassName="active">Form 1</NavLink>
        <NavLink to='/form_2' className="header-link" activeClassName="active">Form 2</NavLink>
        <NavLink to='/form_3' className="header-link" activeClassName="active">Form 3</NavLink>
        <NavLink to='/form_4' className="header-link" activeClassName="active">Form 4</NavLink>
    </header>
  )
};