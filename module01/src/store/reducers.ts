import { ActionTypes, FormPage, FormPageActions, MainPage, MainPageActions } from './types';

export function formPageReducer(state: FormPage, action: FormPageActions) {
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

export function mainPageReducer(state: MainPage, action: MainPageActions) {
  switch (action.type) {
    case ActionTypes.ChangeSelectValue:
      return {
        ...state,
        searchOptions: action.payload,
      };
    case ActionTypes.SetCards:
      return {
        ...state,
        cards: action.payload,
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
