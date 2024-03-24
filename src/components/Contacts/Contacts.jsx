import styles from './Contacts.module.css';
import FilterContactsInput from './FilterContactsInput/FilterContactsInput';
import AbsentContactsNotification from './AbsentContactsNotification/AbsentContactsNotification';
import { useSelector } from 'react-redux';

import ContactsList from './ContactList/ContactsList';
import { selectContacts, selectFilter } from '../../redux/selectors';

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(item =>
    item.name.toUpperCase().includes(filter.toUpperCase())
  );
};

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const contactsFiltered = getFilteredContacts(contacts, filter);

  return (
    <div className={styles.contacts}>
      <FilterContactsInput />

      {contactsFiltered.length > 0 ? (
        <ContactsList contacts={contactsFiltered} />
      ) : (
        <AbsentContactsNotification />
      )}
    </div>
  );
};

export default Contacts;
