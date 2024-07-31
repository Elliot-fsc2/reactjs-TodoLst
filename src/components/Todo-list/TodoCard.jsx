import React from "react";

export default function TodoCard({
  notes,
  handleEditNote,
  handleDeleteNote,
  emptyNote,
}) {
  if (emptyNote(notes)) {
    return (
      <div className="mt-5 text-center">
        <h1>Your list will appear here</h1>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <ul className="list-group">
        {notes.map((n) => (
          <div key={n.id} className="list-group-item d-flex p-4 fs-5">
            {n.content}
            <div className="d-lg-flex d-sm-grid ms-auto gap-3">
              <button
                className="btn btn-primary"
                onClick={() => handleEditNote(n.id)}
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteNote(n.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
