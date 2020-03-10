import React, { Fragment, useState, useEffect } from 'react'
import { Column, Button } from "rbx";
import { push as Menu } from 'react-burger-menu'
import List from "../Notes/List";
import NoteService from '../../services/notes';
import '../../styles/notes.scss'

const Notes = (props) => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ title: "", body: "", id: "" });

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const response = await NoteService.index();
    if (response.data.length >= 1) {
      setNotes(response.data.reverse())
      /* primeira selecionada */
      setCurrentNote(response.data[0])
    } else {
      setNotes([])
    }
  }

  const createNote = async () => {
    await NoteService.create()
    fetchNotes()
  }

  const deleteNote = async (note) => {
    await NoteService.delete(note._id)
    fetchNotes()
  }

  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id === id;
    })
    setCurrentNote(note);
  }

  return (
    <Fragment>
      <Column.Group className="notes" id="notes">
        <Menu
          pageWrapId={"notes-editor"}
          isOpen={props.isOpen}
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus
          outerContainerId={"notes"}
          customBurgerIcon={false}
          customCrossIcon={false}>

          <Column.Group>
            <Column size={10} offset={1}>
              Search...
          </Column>
          </Column.Group>
          <List
            notes={notes}
            selectNote={selectNote}
            current_note={currentNote}
            createNote={createNote}
            deleteNote={deleteNote}
          />
        </Menu>

        <Column size={12} className="notes-editor" id="notes-editor">
          Editor...
      </Column>
      </Column.Group>
    </Fragment>
  )
}

export default Notes