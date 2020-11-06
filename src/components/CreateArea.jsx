import React, { useState } from "react";


function CreateArea(props) {
  const emptyNote = { title: "", content: "" };
  const [note, setNote] = useState(emptyNote);

  function onChangeTitle(event) {
    const title = event.target.value;
    setNote((prevValue) => {
      return { ...prevValue, title: title };
    });
  }

  function onChangeContent(event) {
    const content = event.target.value;
    setNote((prevValue) => {
      return { ...prevValue, content: content };
    });
  }

  function onAddClick(event) {
    props.addNote(note);
    setNote(emptyNote);
    event.preventDefault(); //avoid page reload
  }

  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={onChangeTitle}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={onChangeContent}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={onAddClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
