import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Form from './Form';

describe('Form tests', () => {
  global.URL.createObjectURL = jest.fn();

  it('input name test', () => {
    render(<Form addCard={jest.fn()} />);
    const inputName = screen.getByTestId('name');
    expect(inputName).toBeInTheDocument();
    userEvent.type(inputName, 'qwe');
    expect(inputName).toHaveValue('qwe');
  });

  it('input surname test', () => {
    render(<Form addCard={jest.fn()} />);
    const inputSuname = screen.getByTestId('surname');
    expect(inputSuname).toBeInTheDocument();
    userEvent.type(inputSuname, 'asd');
    expect(inputSuname).toHaveValue('asd');
  });

  it(' input date test', () => {
    render(<Form addCard={jest.fn()} />);
    const inputDate = screen.getByTestId('date');
    expect(inputDate).toBeInTheDocument();
    userEvent.type(inputDate, '1995-04-29');
    expect(inputDate).toHaveValue('1995-04-29');
  });

  it(' select data processing test', () => {
    render(<Form addCard={jest.fn()} />);
    const inputDataProcessing = screen.getByTestId('checkbox');
    expect(inputDataProcessing).toBeInTheDocument();
    userEvent.click(inputDataProcessing);
    expect(inputDataProcessing).toBeChecked();
  });

  it('enable submit button test', () => {
    render(<Form addCard={jest.fn()} />);
    const inputName = screen.getByTestId('name');
    userEvent.type(inputName, 'qwe');
    expect(screen.getByText(/Create card/i)).toBeEnabled();
  });

  it('reset button test', () => {
    render(<Form addCard={jest.fn()} />);
    const inputName = screen.getByTestId('name');
    const inputSuname = screen.getByTestId('name');
    userEvent.type(inputSuname, 'qwe');
    userEvent.type(inputName, 'qwerew');
    userEvent.click(screen.getByText(/reset/i));
    expect(inputName).toHaveValue('');
    expect(inputSuname).toHaveValue('');
  });

  it(' input file test', () => {
    render(<Form addCard={jest.fn()} />);
    const inputFile = screen.getByTestId('file') as HTMLInputElement;
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    expect(inputFile).toBeInTheDocument();
    userEvent.upload(inputFile, file);
    expect((inputFile.files as FileList)[0]).toStrictEqual(file);
    expect(inputFile.files as FileList).toHaveLength(1);
  });
});
