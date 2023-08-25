import React, { useState } from 'react';
import css from './Avatar.module.css';

const Avatar = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = event => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleUpload = e => {
    e.preventDefault();
    if (selectedImage) {
      const formData = new FormData();
      formData.append('avatar', selectedImage);
    }
  };

  return (
    <form className={css.box}>
      <label htmlFor="avatarInput" className={css.customInput}>
        {selectedImage ? selectedImage.name : 'Add new Avatar'}
        <p className={ css.plus}>+</p>
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className={css.input}
        id="avatarInput"
      />
      <button onClick={handleUpload}>Change avatar</button>
    </form>
  );
};

export default Avatar;
