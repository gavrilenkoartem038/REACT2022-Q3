import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from 'store/store';

import SearchOptions from './SearchOptions';

describe('Search options component', () => {
  it('should search selects on page', () => {
    render(
      <Provider store={store}>
        <SearchOptions />
      </Provider>
    );
    expect(screen.getByText(/sort order/i)).toBeInTheDocument();
  });

  it('should chage select value', () => {
    render(
      <Provider store={store}>
        <SearchOptions />
      </Provider>
    );
    const select = screen.getByTestId('sort');
    userEvent.selectOptions(select, 'race');
    expect(select).toHaveValue('race');
  });
});
