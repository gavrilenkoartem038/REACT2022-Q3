import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'App';
import store from 'store/store';

describe('roter and render pages', () => {
  it('should renders main page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should go to about page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    userEvent.click(screen.getByText(/about us/i));
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });

  test('should go to 404 page', () => {
    render(
      <MemoryRouter initialEntries={['/fdsfdsds']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/404 page/i)).toBeInTheDocument();
  });

  it('should save input values on change pages', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    userEvent.click(screen.getByText(/Forms/i));
    const inputName = screen.getByTestId('name');
    userEvent.type(inputName, 'qwerew');
    expect(inputName).toHaveValue('qwerew');
    userEvent.click(screen.getByText(/About us/i));
    userEvent.click(screen.getByText(/Forms/i));
    expect(inputName).toHaveValue('qwerew');
  });
});
