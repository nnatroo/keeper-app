import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  const [collapseArea, setCollapseArea] = useState(true);

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [inputName]: inputValue,
      };
    });
  };

  const handleSubmit = (event) => {
    if (note.title !== "" || note.content !== "") {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    } else {
      alert("Fill at least one input!");
    }

    event.preventDefault();
  };

  const handleFocus = () => {
    setCollapseArea(false);
  };

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {!collapseArea ? (
          <input
            value={note.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
          />
        ) : null}
        <textarea
          onFocus={handleFocus}
          value={note.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={collapseArea ? 1 : 3}
        />
        <Zoom in={!collapseArea}>
          <Fab type="submit" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
