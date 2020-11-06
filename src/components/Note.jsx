import React from "react";

function Note(props) {
  function onBtnClick(event) {
    props.cbDelete(props.id); 
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={onBtnClick}>DELETE</button>
    </div>
  );
}

export default Note;
