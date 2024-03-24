import PropTypes from 'prop-types';
import styles from './AddContactBtn.module.css';

const AddContactBtn = ({ text }) => {
  return (
    <button className={styles.submitBtn} type="submit">
      {text}
    </button>
  );
};

AddContactBtn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AddContactBtn;
