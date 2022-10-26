import FormPageActions, { ActionTypes, FormPage } from './types';

export default function formPageReducer(state: FormPage, action: FormPageActions) {
  switch (action.type) {
    case ActionTypes.AddCard:
      return {
        ...state,
        personCards: [...state.personCards, action.payload],
      };
    case ActionTypes.ChangeForm:
      return {
        ...state,
        formFields: action.payload,
      };
    case ActionTypes.ToggleSubmitButton:
      return {
        ...state,
        needValidate: action.payload,
      };
    default:
      return state;
  }
}
