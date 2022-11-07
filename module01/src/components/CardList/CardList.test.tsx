import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from 'store/store';

import CardList from './CardList';

describe('Card component', () => {
  it('should render "not found message with empty list of curds"', () => {
    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );
    expect(screen.getByText(/Cards not found/i)).toBeInTheDocument();
  });
});
