import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import { MainPage } from './pages/MainPage/MainPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFounPage';
import { FormPage } from './pages/FormPage/FormPage';

import { Layout } from './components/Layout';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="form" element={<FormPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
