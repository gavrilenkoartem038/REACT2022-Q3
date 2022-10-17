import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './Layout.css';

class Layout extends React.Component {
  render() {
    return (
      <>
        <div className="bg-slate-500">
          <header className="header">
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
          <main className="container flex flex-col items-center gap-4 mx-auto p-4">
            <Outlet />
          </main>
        </div>
      </>
    );
  }
}

export default Layout;
