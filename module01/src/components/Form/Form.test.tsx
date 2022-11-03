import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import store from 'store/store';

import Form from './Form';

describe('Form tests', () => {
  global.URL.createObjectURL = jest.fn();

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  });

  it('should change input "name" value on input change', () => {
    const inputName = screen.getByTestId('name');
    expect(inputName).toBeInTheDocument();
    userEvent.type(inputName, 'qwe');
    expect(inputName).toHaveValue('qwe');
  });

  it('should change input "surname" value on input change', () => {
    const inputSuname = screen.getByTestId('surname');
    expect(inputSuname).toBeInTheDocument();
    userEvent.type(inputSuname, 'asd');
    expect(inputSuname).toHaveValue('asd');
  });

  it('should change input "date" value on input change', () => {
    const testDate = '1995-04-29';
    const inputDate = screen.getByTestId('date');
    expect(inputDate).toBeInTheDocument();
    userEvent.type(inputDate, testDate);
    expect(inputDate).toHaveValue(testDate);
  });

  it('should change checkbox state on click', () => {
    const inputDataProcessing = screen.getByTestId('checkbox');
    expect(inputDataProcessing).toBeInTheDocument();
    userEvent.click(inputDataProcessing);
    expect(inputDataProcessing).toBeChecked();
  });

  it('should set invalid input classes on input invalid values', () => {
    const inputName = screen.getByTestId('name');
    userEvent.type(inputName, 'qwe');
    expect(screen.getByText(/Create card/i)).toBeEnabled();
  });

  it('should clear input values on reset button click', () => {
    const inputSuname = screen.getByTestId('surname');
    userEvent.clear(inputSuname);
    userEvent.type(inputSuname, 'qwe');
    expect(inputSuname).toHaveValue('qwe');
    userEvent.click(screen.getByText(/reset/i));
    expect(inputSuname).toHaveValue('');
  });

  it('should upload file on "file" input change', () => {
    const inputFile = screen.getByTestId('file') as HTMLInputElement;
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    expect(inputFile).toBeInTheDocument();
    userEvent.upload(inputFile, file);
    expect((inputFile.files as FileList)[0]).toStrictEqual(file);
    expect(inputFile.files as FileList).toHaveLength(1);
  });
});
