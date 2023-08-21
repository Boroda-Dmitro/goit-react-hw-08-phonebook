import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from '../../Redux/operation/operation';
import { CiLogout } from 'react-icons/ci';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const userEmail = useSelector(state => state.userState.user.email);
  const userLogin = useSelector(state => state.userState.user.name);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      <p className={css.text}>Hello {userLogin}</p>
      <p className={css.email}>{userEmail}</p>
      <button className={css.button} onClick={handleLogout}>
        <CiLogout />
        Logout
      </button>
    </div>
  );
};
