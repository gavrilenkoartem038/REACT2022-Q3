import { NavLink, Outlet } from 'react-router-dom';

import React from 'react';

const Layout = () => {
  return (
    <>
      <header className="container mx-auto">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About us</NavLink>
      </header>

      <Outlet />
    </>
  );
};

export { Layout };
