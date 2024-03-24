import { selectFilter } from '../../../redux/selectors';
import styles from './AbsentContactsNotification.module.css';
import { useSelector } from 'react-redux';

const AbsentContactsNotification = () => {
  const searchedContact = useSelector(selectFilter);

  return (
    <>
      <p className={styles.notification}>
        {searchedContact === ''
          ? "You haven't saved any contacts yet"
          : ` " ${searchedContact} " is not saved in your contacts list`}
      </p>
    </>
  );
};

export default AbsentContactsNotification;
