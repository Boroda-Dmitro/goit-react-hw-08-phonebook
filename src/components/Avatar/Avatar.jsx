import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatarThunk } from '../../Redux/operation/operation';
import css from './Avatar.module.css';

const Avatar = ({ closeModal }) => {
  const dispatch = useDispatch();
  const avatarURL = useSelector(state => state.userState.user.avatarURL);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  const handleImageChange = event => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImageUrl(imageUrl);
    }
  };

  const handleUpload = e => {
    e.preventDefault();
    if (selectedImage) {
      dispatch(updateAvatarThunk(selectedImage)).then(() => {
        closeModal();
      });
    }
  };

  return (
    <form className={css.box}>
      <label htmlFor="avatarInput" className={css.customLabel}>
        {selectedImageUrl ? (
          <img
            src={selectedImageUrl}
            alt="Selected Avatar"
            className={css.avatarThumbnail}
          />
        ) : (
          <>
            {avatarURL && (
              <img
                src={avatarURL}
                alt="Current Avatar"
                className={css.avatarThumbnail}
              />
            )}
            {selectedImage ? (
              selectedImage.name
            ) : (
              <>
                <p className={css.plus}>+</p>
              </>
            )}
          </>
        )}
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
