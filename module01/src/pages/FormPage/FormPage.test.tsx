import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormPage from './FormPage';

describe('Form page tests', () => {
  global.URL.createObjectURL = jest.fn();

  it('should render form page without cards ', () => {
    render(<FormPage />);
    const cardsElement = screen.queryByTestId('person-card');
    expect(cardsElement).toBeNull();
  });

  it('should create card on input correct values', async () => {
    render(<FormPage />);

    const inputName = screen.getByTestId('name');
    const inputSurname = screen.getByTestId('surname');
    const inputDate = screen.getByTestId('date');
    const inputFile = screen.getByTestId('file') as HTMLInputElement;
    const inputDataProcessing = screen.getByTestId('checkbox') as HTMLInputElement;
    const submitButton = screen.getByText('Create card');

    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    await act(async () => {
      userEvent.type(inputName, 'Ivan');
      userEvent.type(inputSurname, 'Ivanov');
      userEvent.type(inputSurname, 'Ivanov');
      userEvent.type(inputDate, '1995-04-29');
      userEvent.upload(inputFile, file);
      userEvent.click(inputDataProcessing);
    });
    await act(async () => {
      userEvent.click(submitButton);
    });
    expect(screen.getAllByTestId('person-card')).toHaveLength(1);
    expect(inputSurname).toHaveValue('');
    expect(inputDate).toHaveValue('');
  });
});
