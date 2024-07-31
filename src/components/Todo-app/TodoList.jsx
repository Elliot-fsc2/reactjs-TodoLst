import { useEffect, useState } from "react";
import Lists from "./Lists.jsx";
import ShowNotes from "./ShowNotes.jsx";

const TodoList = () => {
  const [selectedTitle, setSelectedTitle] = useState(null);

  const [notes, setNotes] = useState([
    {
      id: 0,
      title: "Sample Note",
      content: "This is a sample note. Create a new one for yourself",
    },
    {
      id: 1,
      title: "NOTE",
      content: "Hello World!",
    },
  ]);

  const handleClick = (id) => {
    const list = notes.find((n) => n.id === id);
    setSelectedTitle(list);
  };

  const handleAddNote = () => {
    const title = window.prompt("Enter the title of your note");
    const content = window.prompt("Enter the content:");

    if (!content) {
      return;
    }

    const addNote = {
      id: notes.length + 1,
      title: title,
      content: content,
    };

    setNotes([...notes, addNote]); // this shit is rlly important the [] if ur using an array of obj
  };

  const handleDeleteNote = (id) => {
    const updateNotes = notes.filter((n) => n.id !== id);
    setNotes(updateNotes);
    if (selectedTitle && selectedTitle.id === id) {
      setSelectedTitle(null);
    }
  };

  const handleEditNote = (id) => {
    const result = notes.find((n) => n.id === id);
    if (!result) return;

    const title = window.prompt("Edit the title", result.title);
    const content = window.prompt(
      `Edit the content of ${result.title}`,
      result.content
    );

    if (title === null || content === null) {
      return;
    }

    const updatedNote = {
      ...notes,
      title: title,
      content: content,
    };

    const newNote = notes.map((n) => (n.id === id ? updatedNote : n));

    setNotes(newNote);
    if (selectedTitle && selectedTitle.id === id) {
      setSelectedTitle(updatedNote);
    }
  };

  // useEffect(() => {
  //   if (selectedTitle) {
  //     const update = notes.find((n) => n.id === selectedTitle.id);
  //     setSelectedTitle(update);
  //   }
  // }, [notes]);

  return (
    <div className="container p-2">
      <h1 className="text-center">To-do List</h1>
      <div className="row mt-5">
        <Lists
          notes={notes}
          onClickHandle={handleClick}
          onDeleteHandle={handleDeleteNote}
          onEditNote={handleEditNote}
        />
        <ShowNotes selectedTitle={selectedTitle} addNote={handleAddNote} />
      </div>
    </div>
  );
};

export default TodoList;
