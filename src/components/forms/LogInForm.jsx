import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addNewAccount } from 'services/authService';
import styles from './Forms.module.css';

export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const dispatch = useDispatch();

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
    const formData = {
      email,
      password,
      };
      console.log(formData);
    // dispatch(addNewAccount(formData));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
      </div>
      <button type="submit" className={styles.button}>
        Login
      </button>
    </form>
  );
};


