import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContactById } from 'services/fetchContacts';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const registerUserThunk = createAsyncThunk(
  'auth/registerUser',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`/users/signup`, userData);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'auth/loginUser',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`/users/login`, userData);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(`/users/logout`);
      token.unset();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const lastToken = thunkAPI.getState().userState.token;
    if (lastToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(lastToken);
    try {
      const response = await axios.get(`/users/current`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const contacts = await axios.get(`/contacts`);
  return contacts;
});

export const postNewContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const contacts = await axios.post(`/contacts`, contact);
    return contacts;
  }
);

export const deleteOneContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const contacts = await deleteContactById(id);
    return contacts;
  }
);
