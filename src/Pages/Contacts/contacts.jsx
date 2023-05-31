import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Filter/Filter';

export default function ContactsPage() {
  return <>
    <ContactForm />
    <Filter />
    <ContactsList />
  </>;
}
