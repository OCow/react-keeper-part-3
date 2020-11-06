import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNewNote(note) {
    // console.log("addNewNote(): " + note.title + " - " + note.content);
    setNotes((prevValue) => {
      return [...prevValue, { title: note.title, content: note.content }];
    });
  }

  function deleteNoteByIndex(index) {
    // console.log("Now attempting to delete note with index " + index); 

    setNotes(prevValue => {
      return prevValue.filter((note, i) => i !== index); 
    }); 
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNewNote} />
      {notes.map((note, index) => (
        <Note key={index} id={index} cbDelete={deleteNoteByIndex} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
