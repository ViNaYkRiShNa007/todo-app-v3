import React, { useContext, useReducer } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItems } from "../store/todo-items-store";
const TODO_ITEM = () => {
  const { tasks, dispatchTaskItems } = useContext(TodoItems);
  function handleDelete(id) {
    const deleteTaskAction = {
      type: "DELETE_ITEM",
      payload: {
        id,
      },
    };
    dispatchTaskItems(deleteTaskAction);
  }
  return tasks.map((items, index) => {
    return (
      <div className="card" key={index}>
        <div className="card-body">
          <div className="container text-center">
            <div className="row">
              <div className="col">{items.task}</div>
              <div className="col">{items.date}</div>
              <div className="col">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    return handleDelete(index);
                  }}
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default TODO_ITEM;
