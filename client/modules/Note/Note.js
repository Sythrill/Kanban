import React, {PropTypes} from 'react';
import styles from './Note.css';

const Note = props =>
  <li className={styles.notes}>{props.children}</li>;

Note.propTypes = {
  children: PropTypes.any,
  editing: PropTypes.any,
};

export default Note;
