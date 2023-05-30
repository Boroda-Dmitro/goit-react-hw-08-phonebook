export const allContacts = ({ contacts: { items }}) => items

export const filteredContacts = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }
  return items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const isLoading = ({ contacts: { isLoading }}) => isLoading
export const contactsError = ({ contacts: { error } }) => error;
export const userError = ({ userState: { error } }) => error ;

export const isLoggedIn = ({ userState: { isLoggedIn } }) => isLoggedIn;