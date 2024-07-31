import React from "react";

const ShowNotes = ({ selectedTitle, addNote }) => {
  if (!selectedTitle) {
    return (
      <div className="col-lg-9 text-center">
        <button className="btn btn-primary" onClick={() => addNote()}>
          New Note
        </button>

        <div className="container text-center mt-5">
          <p className="lead">Select a note</p>
        </div>
      </div>
    );
  }

  return (
    <div className="col-lg-9 text-center">
      <button className="btn btn-primary" onClick={() => addNote()}>
        New Note
      </button>

      <div className="container text-center mt-5">
        <p className="lead">{selectedTitle.content}</p>
      </div>
    </div>
  );
};

export default ShowNotes;
