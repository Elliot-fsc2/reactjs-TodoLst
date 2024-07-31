import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import { TodoInput } from "./TodoInput";
import { v4 as uniqueID } from "uuid";

export const Todo = () => {
  const [note, setNote] = useState(() => {
    const saveNotes = localStorage.getItem("notes");
    return saveNotes
      ? JSON.parse(saveNotes)
      : [
          {
            id: uniqueID(),
            content: "Gym at 8am",
          },
          {
            id: uniqueID(),
            content: "Study at 1pm",
          },
        ];
  });

  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(note));
  }, [note]);

  const handleAddNote = (newNote) => {
    const setNewNote = [...note, { id: uniqueID(), content: newNote }];
    setNote(setNewNote);
    setTodoValue(null);
  };

  const handleDeleteNote = (index) => {
    const newList = note.filter((n) => {
      return n.id !== index;
    });
    setNote(newList);
  };

  const handleEditNote = (index) => {
    const noteToBeEdited = note.find((note) => note.id === index);
    setTodoValue(noteToBeEdited.content);
    handleDeleteNote(index);
  };

  const emptyNote = (note) => {
    return note.length === 0;
  };

  return (
    <div className="container p-5">
      <TodoInput
        handleAddNote={handleAddNote}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoCard
        emptyNote={emptyNote}
        notes={note}
        handleEditNote={handleEditNote}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  );
};
