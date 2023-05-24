import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from '../Redux/operation/operation';

export const UserMenu = () => {
  const userEmail = useSelector(state => state.userState.user.email);
  const dispatch = useDispatch();
  const handleLogout = () => {
    
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
