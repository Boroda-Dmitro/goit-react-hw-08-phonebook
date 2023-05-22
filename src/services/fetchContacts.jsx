import axios from 'axios';

const URL = 'https://6467937560c8cb9a2c9778ce.mockapi.io/contacts/contacts';

export const getContacts = async () => {
  try {
    const contacts = await axios.get(URL);
    return contacts.data;
  } catch (error) {
    console.log(error);
  }
};

export const addNewContact = async contact => {
  try {
    const contacts = await axios.post(URL, contact);
    return contacts.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContactById = async id => {
  try {
    const contacts = await axios.delete(`${URL}/${id}`);
    return contacts.data;
  } catch (error) {
    console.log(error);
  }
};
