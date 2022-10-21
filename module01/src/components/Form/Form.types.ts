import { PersconCard } from 'types/types';

export interface State {
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

export interface Props {
  addCard: (card: PersconCard) => void;
}

export interface FormFields {
  name: string;
  surname: string;
  date: string;
  country: string;
  dataProcessing: boolean;
  file: FileList;
}
