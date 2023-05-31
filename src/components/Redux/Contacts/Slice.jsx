import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  postNewContact,
  deleteOneContact,
} from '../operation/operation';

const contacts = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.data;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(postNewContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postNewContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(postNewContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteOneContact.pending, state => {
        state.error = null;
      })
      .addCase(deleteOneContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteOneContact.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
