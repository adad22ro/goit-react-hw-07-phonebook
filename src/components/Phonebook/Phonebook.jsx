import styles from './Phonebook.module.css';
import AddContactBtn from './AddContactBtn/AddContactBtn';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { setFilter } from '../../redux/slices/filterSlice';
import { selectContacts } from '../../redux/selectors';
const NameInput = () => {
  return (
    <>
      <label htmlFor="nameInputId">Name</label>
      <input
        type="text"
        name="name"
        id="nameInputId"
        pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

const NumberInput = () => {
  return (
    <>
      <label htmlFor="numberInputId">Number</label>
      <input
        type="tel"
        name="number"
        id="numberInputId"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </>
  );
};
const Phonebook = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    const checkExistence = contacts.find(item => {
      return item.name.toUpperCase() === name.toUpperCase();
    });

    checkExistence
      ? alert(`"${name}" is already in contacts`)
      : dispatch(addContact({ name, number })) && dispatch(setFilter(''));

    form.reset();
  };

  return (
    <div className={styles.phonebook}>
      <form onSubmit={handleSubmit}>
        <NameInput />
        <NumberInput />
        <AddContactBtn text="Add contact" />
      </form>
    </div>
  );
};

export default Phonebook;
