import React from 'react';
import './Form.css';
import Input from '../Input/Input';
import { PersconCard } from 'types/types';
import Select from '../Select/Select';

interface State {
  isFirstTry: boolean;
  buttonDisabled: boolean;
  name: boolean;
  surname: boolean;
  date: boolean;
  country: boolean;
  dataProcessing: boolean;
  img: string | null;
  file: boolean;
}

const countries = ['BY', 'UA', 'GE', 'PL', 'LT'];

interface Props {
  addCard: (card: PersconCard) => void;
}

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
    const name = e.target.name;
    const inputImg = this.fileInput.current as HTMLInputElement;
    if (name === 'file' && inputImg.files && inputImg.files.length !== 0) {
      this.setState({
        img: URL.createObjectURL(inputImg.files[0]),
        file: true,
      });
    }

    if (this.state.isFirstTry) {
      this.setState({ buttonDisabled: false });
    } else {
      this.validateForm();
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
      if (inputImg.files !== null && inputImg.files.length !== 0) {
        if (inputImg.files[0].name.match(regexp)) {
          return true;
        }
      }
      return false;
    };
    let isValid = true;
    isValid = this.validateInput(name.length > 2, 'name') && isValid;
    isValid = this.validateInput(surname.length > 2, 'surname') && isValid;
    isValid = this.validateInput(new Date() > new Date(date), 'date') && isValid;
    isValid = this.validateInput(validateFile(), 'file') && isValid;
    isValid = this.validateInput(dataProcessing.checked, 'dataProcessing') && isValid;
    if (isValid) this.setState({ buttonDisabled: false });
    return isValid;
  }

  onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = (this.nameInput.current as HTMLInputElement).value;
    const surname = (this.surnameInput.current as HTMLInputElement).value;
    const date = (this.dateInput.current as HTMLInputElement).value;
    const country = (this.countrySelect.current as HTMLSelectElement).value;
    const file = this.state.img as string;

    if (this.validateForm()) {
      this.props.addCard({ name, surname, date, file, country });
      this.resetForm();
    } else {
      console.log('form is invalid');
      this.setState({ isFirstTry: false, buttonDisabled: true });
    }
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
    return (
      <form
        className="flex flex-col gap-2 border-2 rounded-lg p-4 border-slate-300 bg-white max-w-sm"
        onSubmit={this.onSubmit}
      >
        <Input
          name="name"
          label="Name"
          validationField="Type at least 3 symbols"
          valid={this.state.name}
          reference={this.nameInput}
          onChange={(e) => this.onChangeHandler(e)}
        />
        <Input
          name="surname"
          label="Surname"
          validationField="Type at least 3 symbols"
          valid={this.state.surname}
          reference={this.surnameInput}
          onChange={(e) => this.onChangeHandler(e)}
        />
        <Input
          type="date"
          name="date"
          label="Date of Birth"
          validationField="Type date before now"
          valid={this.state.date}
          reference={this.dateInput}
          onChange={(e) => this.onChangeHandler(e)}
        />
        <Input
          type="file"
          name="file"
          label="Avatar"
          validationField="Add your avatar or choose file with correct extantion"
          valid={this.state.file}
          reference={this.fileInput}
          onChange={(e) => this.onChangeHandler(e)}
        />
        <Select name="select" label="Country" reference={this.countrySelect} values={countries} />
        <Input
          type="checkbox"
          name="checkbox"
          label="I agree with data processing"
          validationField="You must agree with data processing"
          valid={this.state.dataProcessing}
          reference={this.dataProcessingInput}
          onChange={(e) => this.onChangeHandler(e)}
        />
        <div className="flex gap-2">
          <button
            type="submit"
            data-testid="button-submit"
            disabled={this.state.buttonDisabled}
            className="button"
          >
            Create card
          </button>
          <button
            type="reset"
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
