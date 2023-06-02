import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from '../../Redux/operation/operation';
import css from './Forms.module.css';
import { toast } from 'react-toastify';
import { CiLogin } from 'react-icons/ci';

export default function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      toast.error('Invalid email address.');
      return;
    }
    const formData = {
      email,
      password,
    };
    dispatch(loginUserThunk(formData));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.formGroup}>
        <label className={css.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className={css.input}
        />
      </div>
      <div className={css.formGroup}>
        <label className={css.label}>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className={css.input}
        />
      </div>
      <button type="submit" className={css.button}>
        <CiLogin /> Login
      </button>
    </form>
  );
}
