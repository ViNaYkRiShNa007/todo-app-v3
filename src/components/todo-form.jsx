import React, { useContext, useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { TodoItems } from "../store/todo-items-store";
const Form = () => {
  const { dispatchTaskItems } = useContext(TodoItems);
  const todo_task = useRef();
  const todo_date = useRef();
  function addTask() {
    let item = todo_task.current.value;
    let date = todo_date.current.value;

    if (item !== "" && date !== "") {
      const newItemAction = {
        type: "NEW_ITEM",
        payload: {
          item,
          date,
        },
      };
      dispatchTaskItems(newItemAction);

      todo_task.current.value = "";
      todo_date.current.value = "";
    } else {
      alert("incomplete data");
    }
  }
  return (
    <div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            ref={todo_task}
            className="form-control"
            placeholder="Task"
            aria-label="Task"
            name="task"
          />
        </div>
        <div className="col">
          <input
            type="date"
            ref={todo_date}
            className="form-control"
            aria-label="Date"
            name="date"
          />
        </div>
        <div className="col">
          <div className="d-grid gap-2">
            <button className="btn btn-success" type="button" onClick={addTask}>
              <IoMdAddCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
