export const TodoInput = ({ handleAddNote, setTodoValue, todoValue }) => {
  return (
    <div>
      <div className="form-floating">
        <textarea
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          className="form-control"
          placeholder=""
          id="floatingTextarea"
          style={{ height: "150px" }}
        ></textarea>
        <label htmlFor="floatingTextarea">Content</label>
      </div>
      <div className="d-grid d-md-flex justify-content-md-end mt-4">
        <button
          className="btn btn-success block rounded me-md-2"
          onClick={() => {
            handleAddNote(todoValue);
            setTodoValue("");
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};
