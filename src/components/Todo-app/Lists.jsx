import React from "react";
import style from "./Lists.module.css";

const List = ({ notes, onClickHandle, onDeleteHandle, onEditNote }) => {
  return (
    <div className={`col-lg-3 px-3 ${style.div}`}>
      <ul className="list-group text-center">
        <h3 className="mb-4">Lists</h3>

        {notes.map((n) => (
          <li
            className={`list-group-item ${style.li}`}
            key={n.id}
            onClick={() => onClickHandle(n.id)}
          >
            <p className="fw-bold fs-5">{n.title}</p>
            <button
              onClick={() => onEditNote(n.id)}
              className="btn btn-primary btn-sm"
            >
              Edit
            </button>
            <button
              onClick={() => onDeleteHandle(n.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {};

export default List;
