import React from 'react';
import { useSelector } from 'react-redux';
// import { logOut } from 'actions/userActions';

export const UserMenu = () => {
  const userEmail = useSelector(state => state.userState.user.email);

  const handleLogout = () => {
    // dispatch(logOut());
  };

  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
