import { FormFields } from 'components/Form/Form.types';
import { ICard, PersconCard } from 'types/types';

// eslint-disable-next-line no-shadow
export enum ActionTypes {
  AddCard = 'ADD_FORM_CARD',
  ChangeForm = 'CHANGE_FORM_VALUES',
  ToggleSubmitButton = 'TOGGLE_SUBMIT_BUTTON',
  ChangeSelectValue = 'CHANGE_SELECT_BUTTON',
  SetCards = 'SET_CARDS',
}

interface Options {
  sort: string;
  order: string;
  limit: string;
}

export interface MainPage {
  cards: ICard[];
  searchOptions: Options;
}

export type FormPageActions =
  | { type: ActionTypes.AddCard; payload: PersconCard }
  | { type: ActionTypes.ChangeForm; payload: FormFields }
  | { type: ActionTypes.ToggleSubmitButton; payload: boolean };

export type MainPageActions =
  | { type: ActionTypes.ChangeSelectValue; payload: Options }
  | { type: ActionTypes.SetCards; payload: ICard[] }
  | { type: ActionTypes.ToggleSubmitButton; payload: boolean };

export interface FormPage {
  personCards: PersconCard[];
  formFields: FormFields;
  needValidate: boolean;
}
