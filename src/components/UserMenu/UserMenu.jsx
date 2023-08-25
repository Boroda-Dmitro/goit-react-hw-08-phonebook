import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from '../../Redux/operation/operation';
import { CiLogout } from 'react-icons/ci';
import { Modal } from '../Modal/Modal';
import  Avatar  from '../Avatar/Avatar';
import { useModal } from '../../hooks/useModal';
import defaultAvatar from '../../images/avatar.jpg';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const userEmail = useSelector(state => state.userState.user.email);
  const userLogin = useSelector(state => state.userState.user.name);
  const avatar = useSelector(state => state.userState.user.avatarURL);
  const { isModalOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      <div className={css.box}>
        <div>
          <p className={css.text}>Hello {userLogin}</p>
          <p className={css.email}>{userEmail}</p>
          <button className={css.button} onClick={handleLogout}>
            <CiLogout />
            Logout
          </button>
        </div>
        <div className={css.avatarBox}>
          <img
            src={avatar ? avatar : defaultAvatar}
            alt="avatar"
            className={css.img}
          />
          <button type="button" onClick={openModal} className={css.avatarAdd}>
            +
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Avatar />
        </Modal>
      )}
    </div>
  );
};
