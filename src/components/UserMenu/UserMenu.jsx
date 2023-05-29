import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from '../Redux/operation/operation';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const userEmail = useSelector(state => state.userState.user.email);
  const dispatch = useDispatch();
  const handleLogout = () => {
    
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      <p className={css.email}>{userEmail}</p>
      <button className={css.button} onClick={handleLogout}>Logout</button>
    </div>
  );
};
