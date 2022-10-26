import { FormFields } from 'components/Form/Form.types';
import { PersconCard } from 'types/types';

// eslint-disable-next-line no-shadow
export enum ActionTypes {
  AddCard = 'ADD_FORM_CARD',
  ChangeForm = 'CHANGE_FORM_VALUES',
  ToggleSubmitButton = 'TOGGLE_SUBMIT_BUTTON',
}

type FormPageActions =
  | { type: ActionTypes.AddCard; payload: PersconCard }
  | { type: ActionTypes.ChangeForm; payload: FormFields }
  | { type: ActionTypes.ToggleSubmitButton; payload: boolean };
export default FormPageActions;

export interface FormPage {
  personCards: PersconCard[];
  formFields: FormFields;
  needValidate: boolean;
}
