import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './Contacts/Slice';
import { filterSlice } from './Filter/Slice';
import { userSlice } from './User/Slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'userState',
  storage,
  whitelist: ['token']
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);




export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
    userState: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

