import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './Contacts/Slice';
import { filterSlice } from './Filter/Slice';
import { userSlice } from './User/Slice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
    userState: userSlice.reducer,
  },
});
