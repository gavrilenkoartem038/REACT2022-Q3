import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';

import Search from './Search';

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

const onSubmit = jest.fn();

describe('Search', () => {
  global.localStorage = new LocalStorageMock();

  it('should render seach-bar', () => {
    render(<Search func={onSubmit} />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('onChange function should be called the required number of times', () => {
    render(<Search func={onSubmit} />);
    userEvent.click(screen.getByText(/search/i));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should save "search" value to localStorage', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const search = screen.getByPlaceholderText(/search/i) as HTMLInputElement;
    const about = screen.getByText(/about/i);
    const button = screen.getByText(/search/i);
    userEvent.type(search, 'my');
    userEvent.click(button);
    userEvent.click(about);
    expect(localStorage.getItem('search')).toEqual('my');
  });
});
