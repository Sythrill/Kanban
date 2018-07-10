import React from 'react';
import Note from './Note';
import styles from './Note.css';
import Edit from '../../components/Edit';
import PropTypes from 'prop-types';

const Notes= (props) =>{
  //const {notes, laneId, onValueClick, updateNote, deleteNote} = props ;

  return(
    <ul className={styles.Notes}>{props.notes.map((note) =>
      <Note
        id={note.id}
        key={note.id}
        laneId={props.laneId}
        moveWithinLane={props.moveWithinLane}
      >
        <Edit
          editing={note.editing}
          value={note.task}
          onValueClick={() => props.onValueClick(note.id)}
          onUpdate={task => props.onUpdate({
            ...note,
            task,
            editing: false,
          })}
          onDelete={() => props.onDelete(note.id, props.laneId)}
        />
      </Note>
    )}</ul>
  );
};

Notes.propTypes = {
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  notes: PropTypes.array,
  children: PropTypes.any,
};

export default Notes;
