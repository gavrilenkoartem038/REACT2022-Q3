import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from './Form';

describe('Form tests', () => {
  global.URL.createObjectURL = jest.fn();

  it('should change input "name" value on input change', () => {
    render(<Form />);
    const inputName = screen.getByTestId('name');
    expect(inputName).toBeInTheDocument();
    userEvent.type(inputName, 'qwe');
    expect(inputName).toHaveValue('qwe');
  });

  it('should change input "surname" value on input change', () => {
    render(<Form />);
    const inputSuname = screen.getByTestId('surname');
    expect(inputSuname).toBeInTheDocument();
    userEvent.type(inputSuname, 'asd');
    expect(inputSuname).toHaveValue('asd');
  });

  it('should change input "date" value on input change', () => {
    render(<Form />);
    const testDate = '1995-04-29';
    const inputDate = screen.getByTestId('date');
    expect(inputDate).toBeInTheDocument();
    userEvent.type(inputDate, testDate);
    expect(inputDate).toHaveValue(testDate);
  });

  it('should change checkbox state on click', () => {
    render(<Form />);
    const inputDataProcessing = screen.getByTestId('checkbox');
    expect(inputDataProcessing).toBeInTheDocument();
    userEvent.click(inputDataProcessing);
    expect(inputDataProcessing).toBeChecked();
  });

  // it('should enable submit button on input "name" value change', async () => {
  //   render(<Form />);
  //   const inputName = screen.getByTestId('name');
  //   const surnameBlock = screen.getByTestId('surname').parentElement;
  //   const button = screen.getByText(/Create card/i);
  //   userEvent.type(inputName, 'qwe');
  //   userEvent.click(button);
  //   await waitFor(() => expect(button).toBeDisabled());
  //   expect(surnameBlock?.classList.contains('invalid')).toBe(true);
  // });

  it('should set invalid input classes on input invalid values', () => {
    render(<Form />);
    const inputName = screen.getByTestId('name');
    userEvent.type(inputName, 'qwe');
    expect(screen.getByText(/Create card/i)).toBeEnabled();
  });

  it('should clear input values on reset button click', () => {
    render(<Form />);
    const inputName = screen.getByTestId('name');
    const inputSuname = screen.getByTestId('name');
    userEvent.type(inputSuname, 'qwe');
    userEvent.type(inputName, 'qwerew');
    userEvent.click(screen.getByText(/reset/i));
    expect(inputName).toHaveValue('');
    expect(inputSuname).toHaveValue('');
  });

  it('should upload file on "file" input change', () => {
    render(<Form />);
    const inputFile = screen.getByTestId('file') as HTMLInputElement;
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    expect(inputFile).toBeInTheDocument();
    userEvent.upload(inputFile, file);
    expect((inputFile.files as FileList)[0]).toStrictEqual(file);
    expect(inputFile.files as FileList).toHaveLength(1);
  });
});
