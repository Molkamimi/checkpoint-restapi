//1- import constants
import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_LOAD,
  GET_CONTACT,
  EDIT_CONTACT,
} from "../constants/contacts";
//2 INITIAL STATE
const initialState = {
  contacts: [],
  loadContacts: false,
  errors: null,
  user: {},
  editContact: "",
};

//state prend l'initial state et les actions et on fait switch
//on fait destructuring au lieu de action.type,action.payload
export const contactReducer = (state = initialState, { type, payload }) => {
  //tout dépend du type de l'action ,on va faire une modif sur le state
  //on a 3 types d'actions
  switch (type) {
    case GET_CONTACTS_LOAD:
      return { ...state, loadContacts: true };
    case GET_CONTACTS_SUCCESS:
      return { ...state, contacts: payload, loadContacts: false };
    case GET_CONTACTS_FAIL:
      return { ...state, loadContacts: false, errors: payload };
    case GET_CONTACT:
      return { ...state, user: payload };
    case EDIT_CONTACT:
      return { ...state, editContact: payload };
    default:
      return state;
  }
};
