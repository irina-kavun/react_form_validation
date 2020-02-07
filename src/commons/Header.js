import React from 'react';
import { NavLink } from "react-router-dom";

export const Header = () => {
  return(
    <div className="header">
      <NavLink exact to='/' className="header-link">Form 1</NavLink>
      <NavLink to='/form_2' className="header-link">Form 2</NavLink>
      <NavLink to='/form_3' className="header-link">Form 3</NavLink>
    </div>
  )
};