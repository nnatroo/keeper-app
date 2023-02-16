import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   let localNotes = localStorage.getItem("notes");
  //   if (localNotes) {
  //     localNotes = JSON.parse(localStorage.getItem("notes"));
  //   } else {
  //     localNotes = [];
  //   }
  //   setNotes(localNotes);
  //   // console.log(notes);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(notes));
  // }, [notes]);

  const handleAdd = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const handleDelete = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      {notes.map((note, index) => (
        <Note
          onDelete={handleDelete}
          id={index}
          key={index}
          title={note.title}
          content={note.content}
        />
      ))}

      <Footer />
    </div>
  );
};

export default App;
