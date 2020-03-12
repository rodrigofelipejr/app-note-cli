import React, { Fragment, useState, useEffect } from 'react'
import { Column } from "rbx";
import { push as Menu } from 'react-burger-menu'
import List from "../Notes/List";
import Editor from '../Editor'
import Search from './Search'
import NoteService from '../../services/notes';
import '../../styles/notes.scss'
import NotesService from '../../services/notes';

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

  const updateNote = async (oldNote, params) => {
    const updatedNote = await NoteService.update(oldNote._id, params)
    const index = notes.indexOf(oldNote)
    const newNotes = notes
    newNotes[index] = updatedNote.data
    setNotes(newNotes)
    setCurrentNote(updatedNote.data)
  }

  const searchNotes = async (query) => {
    const response = await NotesService.search(query)
    setNotes(response.data)
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
          customCrossIcon={false}
        >

          <Column.Group>
            <Column size={10} offset={1}>
              <Search
                searchNotes={searchNotes}
                fetchNotes={fetchNotes}
              />
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
          <Editor
            note={currentNote}
            updateNote={updateNote}
          />
        </Column>
      </Column.Group>
    </Fragment>
  )
}

export default Notes