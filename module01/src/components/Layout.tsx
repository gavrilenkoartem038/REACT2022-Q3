import { NavLink, Outlet } from 'react-router-dom';

import React from 'react';

const Layout = () => {
  return (
    <>
      <div className="bg-slate-500">
        <header className="container mx-auto p-4">
          <NavLink to="/" end className="p-2">
            Home
          </NavLink>
          <NavLink to="/about" className="p-2">
            About us
          </NavLink>
        </header>
      </div>
      <div className="bg-slate-100">
        <main className="container mx-auto p-4 flex flex-col items-center">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export { Layout };
