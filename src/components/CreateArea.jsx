import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({title: "", 
                                    content: ""})

  const handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value

    setNote((prevValue) => {
      return {
        ...prevValue,
        [inputName]: inputValue,
      }
    })
  }


  const handleSubmit = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={note.title} onChange={handleChange} name="title" placeholder="Title" />
        <textarea value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}



export default CreateArea;
