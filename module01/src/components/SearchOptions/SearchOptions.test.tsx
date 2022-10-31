import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Store } from 'store/store';

import SearchOptions from './SearchOptions';

describe('Search options component', () => {
  it('should search selects on page', () => {
    render(
      <Store>
        <SearchOptions />
      </Store>
    );
    expect(screen.getByText(/sort order/i)).toBeInTheDocument();
  });

  it('should chage select value', () => {
    render(
      <Store>
        <SearchOptions />
      </Store>
    );
    const select = screen.getByTestId('sort');
    userEvent.selectOptions(select, 'race');
    expect(select).toHaveValue('race');
  });
});
