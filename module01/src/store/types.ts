import { FormFields } from 'components/Form/Form.types';
import { ICard, PersconCard } from 'types/types';

// eslint-disable-next-line no-shadow
export enum ActionTypes {
  AddCard = 'ADD_FORM_CARD',
  ChangeForm = 'CHANGE_FORM_VALUES',
  ToggleSubmitButton = 'TOGGLE_SUBMIT_BUTTON',
  ChangeSearchData = 'CHANGE_SEARCH_DATA',
  ChangeSearchString = 'CHANGE_SEARCH_STRING',
}

interface SearchData {
  cards: ICard[];
  sort: string;
  order: string;
  limit: string;
  page: string;
  pages: string;
}

export interface MainPage {
  searchData: SearchData;
  searchString: string;
}

export type FormPageActions =
  | { type: ActionTypes.AddCard; payload: PersconCard }
  | { type: ActionTypes.ChangeForm; payload: FormFields }
  | { type: ActionTypes.ToggleSubmitButton; payload: boolean };

export type MainPageActions =
  | { type: ActionTypes.ChangeSearchData; payload: SearchData }
  | { type: ActionTypes.ChangeSearchString; payload: string };

export interface FormPage {
  personCards: PersconCard[];
  formFields: FormFields;
  needValidate: boolean;
}
