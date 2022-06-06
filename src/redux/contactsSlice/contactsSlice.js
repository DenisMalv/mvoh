import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [
    {
      id: "PdP",
      avatar: "ye",
      name: "ye",
      age: "15",
      status: "yes",
    },
    {
      id: "AkL",
      avatar: "maxim",
      name: "maxim",
      age: "16",
      status: "yes",
    },
    {
      id: "TIj",
      avatar: "alona",
      name: "alona",
      age: "14",
      status: "yes",
    },
    {
      id: "MAi",
      avatar: "valdemar",
      name: "valdemar",
      age: "15",
      status: "yes",
    },
    {
      id: "PUN",
      avatar: "alex",
      name: "alex",
      age: "15",
      status: "yes",
    },
    {
      id: "3g5",
      avatar: "denven",
      name: "denven",
      age: "16",
      status: "yes",
    },
    {
      id: "KD7",
      avatar: "bogdan",
      name: "bogdan",
      age: "15",
      status: "yes",
    },
    {
      id: "KJ3",
      avatar: "kateryna",
      name: "kateryna",
      age: "14",
      status: "yes",
    },
    {
      id: "aUK",
      avatar: "Brigadir",
      name: "Brigadir",
      age: "15",
      status: "yes",
    },
    {
      id: "ylP",
      avatar: "yulia",
      name: "yulia",
      age: "14",
      status: "yes",
    },
    {
      id: "QbZ",
      avatar: "denismalv",
      name: "denismalv",
      age: "15",
      status: "yes",
    },
  ],
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      console.log(state.contacts);
      console.log(action);
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      console.log(action.payload);
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    toggleStatus: (state, action) => {
      const index = state.contacts.findIndex(({ id }) => id === action.payload);
      const status = state.contacts[index].status === "yes" ? "no" : "yes";
      state.contacts[index] = { ...state.contacts[index], status };
    },
  },
});

export const contactSliceReducers = contactsSlice.reducer;
export const { addContact, deleteContact, toggleStatus } =
  contactsSlice.actions;

export const getContacts = (state) => state.contacts;
