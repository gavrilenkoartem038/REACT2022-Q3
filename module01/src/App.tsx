import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFounPage';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
