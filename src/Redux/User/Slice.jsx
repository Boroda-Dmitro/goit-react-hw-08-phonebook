import { createSlice } from '@reduxjs/toolkit';
import {
  registerUserThunk,
  loginUserThunk,
  logoutUserThunk,
  refreshUser,
  updateAvatarThunk,
} from '../operation/operation';

export const userSlice = createSlice({
  name: 'userState',
  initialState: {
    user: { login: '', email: '', password: '' },
    isLoggedIn: false,
    token: null,
    isLoading: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        console.log(action.payload.user);
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUserThunk.fulfilled, state => {
        state.isLoading = false;
        state.user = { login: '', email: '', password: '' };

        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(logoutUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(updateAvatarThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateAvatarThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.avatarURL = action.payload.avatarURL; 
      })
      .addCase(updateAvatarThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
