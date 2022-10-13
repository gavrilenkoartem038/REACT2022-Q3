import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import AboutPage from 'pages/AboutPage';
import FormPage from 'pages/FormPage/FormPage';
import MainPage from 'pages/MainPage/MainPage';
import NotFoundPage from 'pages/NotFounPage';

import './App.css';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="form" element={<FormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
