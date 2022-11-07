import React from 'react';

import Input from '../Input/Input';
import Select from '../Select/Select';

import './Form.css';

import { Props, State } from './Form.types';

const countries = ['BY', 'UA', 'GE', 'PL', 'LT'];

class Form extends React.Component<Props, State> {
  nameInput: React.RefObject<HTMLInputElement>;

  surnameInput: React.RefObject<HTMLInputElement>;

  dateInput: React.RefObject<HTMLInputElement>;

  fileInput: React.RefObject<HTMLInputElement>;

  countrySelect: React.RefObject<HTMLSelectElement>;

  dataProcessingInput: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.nameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.dateInput = React.createRef();
    this.fileInput = React.createRef();
    this.countrySelect = React.createRef();
    this.dataProcessingInput = React.createRef();

    this.state = {
      isFirstTry: true,
      buttonDisabled: true,
      name: true,
      surname: true,
      date: true,
      country: true,
      dataProcessing: true,
      img: null,
      file: true,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name } = e.target;
    const { isFirstTry } = this.state;
    const inputImg = this.fileInput.current as HTMLInputElement;
    const isFileInputCorrect = name === 'file' && inputImg.files && inputImg.files.length !== 0;
    if (isFileInputCorrect) {
      this.setState({
        img: URL.createObjectURL((inputImg.files as FileList)[0]),
        file: true,
      });
    }

    if (isFirstTry) {
      this.setState({ buttonDisabled: false });
    } else {
      this.validateForm();
    }
  }

  onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { img } = this.state;
    const { addCard } = this.props;
    const name = (this.nameInput.current as HTMLInputElement).value;
    const surname = (this.surnameInput.current as HTMLInputElement).value;
    const date = (this.dateInput.current as HTMLInputElement).value;
    const country = (this.countrySelect.current as HTMLSelectElement).value;
    const file = img as string;

    if (this.validateForm()) {
      addCard({ name, surname, date, file, country });
      this.resetForm();
    } else {
      this.setState({ isFirstTry: false, buttonDisabled: true });
    }
  }

  validateInput(condition: boolean, field: keyof State) {
    this.setState((state) => ({ ...state, [field]: condition }));
    return condition;
  }

  validateForm(): boolean {
    const name = (this.nameInput.current as HTMLInputElement).value;
    const surname = (this.surnameInput.current as HTMLInputElement).value;
    const date = (this.dateInput.current as HTMLInputElement).value;
    const inputImg = this.fileInput.current as HTMLInputElement;
    const dataProcessing = this.dataProcessingInput.current as HTMLInputElement;
    const regexp = /\.(jpe?g|svg|png|gif)$/i;
    const validateFile = (): boolean => {
      const isFileInputCorrect = inputImg.files && inputImg.files.length !== 0;
      if (isFileInputCorrect) {
        if ((inputImg.files as FileList)[0].name.match(regexp)) {
          return true;
        }
      }
      return false;
    };
    const isNameValid = this.validateInput(name.length > 2, 'name');
    const isSurnameValid = this.validateInput(surname.length > 2, 'surname');
    const isDateValid = this.validateInput(new Date() > new Date(date), 'date');
    const isFileValid = this.validateInput(validateFile(), 'file');
    const isDataProcessingChecked = this.validateInput(dataProcessing.checked, 'dataProcessing');
    const isFormValid =
      isNameValid && isSurnameValid && isDateValid && isFileValid && isDataProcessingChecked;

    if (isFormValid) this.setState({ buttonDisabled: false });
    return isFormValid;
  }

  resetForm() {
    (this.nameInput.current as HTMLInputElement).value = '';
    (this.surnameInput.current as HTMLInputElement).value = '';
    (this.dateInput.current as HTMLInputElement).value = '';
    (this.fileInput.current as HTMLInputElement).value = '';
    (this.countrySelect.current as HTMLSelectElement).value = 'BY';
    (this.dataProcessingInput.current as HTMLInputElement).checked = false;

    this.setState({
      isFirstTry: true,
      buttonDisabled: true,
      name: true,
      surname: true,
      date: true,
      country: true,
      dataProcessing: true,
      img: null,
      file: true,
    });
  }

  render() {
    const { name, surname, date, file, dataProcessing, buttonDisabled } = this.state;
    return (
      <form
        className="flex flex-col gap-2 border-2 rounded-lg p-4 border-slate-300 bg-white max-w-sm"
        onSubmit={this.onSubmit}
      >
        <Input
          type="text"
          name="name"
          label="Name"
          validationField="Type at least 3 symbols"
          valid={name}
          reference={this.nameInput}
          onChange={this.onChangeHandler}
        />
        <Input
          type="text"
          name="surname"
          label="Surname"
          validationField="Type at least 3 symbols"
          valid={surname}
          reference={this.surnameInput}
          onChange={this.onChangeHandler}
        />
        <Input
          type="date"
          name="date"
          label="Date of Birth"
          validationField="Type date before now"
          valid={date}
          reference={this.dateInput}
          onChange={this.onChangeHandler}
        />
        <Input
          type="file"
          name="file"
          label="Avatar"
          validationField="Add your avatar or choose file with correct extantion"
          valid={file}
          reference={this.fileInput}
          onChange={this.onChangeHandler}
        />
        <Select name="select" label="Country" reference={this.countrySelect} values={countries} />
        <Input
          type="checkbox"
          name="checkbox"
          label="I agree with data processing"
          validationField="You must agree with data processing"
          valid={dataProcessing}
          reference={this.dataProcessingInput}
          onChange={this.onChangeHandler}
        />
        <div className="flex gap-2">
          <button
            type="submit"
            data-testid="button-submit"
            disabled={buttonDisabled}
            className="button"
          >
            Create card
          </button>
          <button
            type="button"
            onClick={this.resetForm}
            data-testid="button-reset"
            className="button"
          >
            Reset
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
