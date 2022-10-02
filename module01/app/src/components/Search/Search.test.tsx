import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';

interface Store {
  [key: string]: string;
}

class LocalStorageMock {
  store: Store;
  length: number;

  constructor() {
    this.store = {};
    this.length = 0;
  }

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  key(n: number): string | null {
    return Object.keys(this.store)[n];
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }
}

describe('Search', () => {
  global.localStorage = new LocalStorageMock();
  it('render seach-bar', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const search = screen.getByPlaceholderText(/search/i) as HTMLInputElement;
    const about = screen.getByText(/about/i);
    userEvent.type(search, 'my');
    userEvent.click(about);
    expect(localStorage.getItem('search')).toEqual('my');
  });
});
