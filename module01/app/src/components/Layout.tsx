import { NavLink, Outlet } from 'react-router-dom';

import React from 'react';

const Layout = () => {
  return (
    <>
      <header className="container mx-auto p-4 bg-slate-500">
        <NavLink to="/" end className="p-2">
          Home
        </NavLink>
        <NavLink to="/about">About us</NavLink>
      </header>

      <Outlet />
    </>
  );
};

export { Layout };
