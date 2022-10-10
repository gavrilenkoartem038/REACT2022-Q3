import { NavLink, Outlet } from 'react-router-dom';

import React from 'react';

const Layout = () => {
  return (
    <>
      <div className="bg-slate-500">
        <header className="flex justify-between flex-wrap items-center container mx-auto px-10 py-4">
          <div className="text-4xl text-white">Rick and Morty</div>
          <div className="flex gap-2">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
            <NavLink to="/form" end className="nav-link">
              Forms
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About us
            </NavLink>
          </div>
        </header>
      </div>
      <div>
        <main className="container mx-auto p-4 flex flex-col items-center gap-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export { Layout };
